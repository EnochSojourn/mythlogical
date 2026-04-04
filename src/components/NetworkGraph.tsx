"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  pulseSpeed: number;
  label: string;
}

const NODES: Node[] = [
  { x: 250, y: 200, radius: 16, color: "#10b981", pulseSpeed: 2, label: "M" },
  { x: 120, y: 100, radius: 8, color: "#3b82f6", pulseSpeed: 3, label: "" },
  { x: 380, y: 80, radius: 8, color: "#3b82f6", pulseSpeed: 2.5, label: "" },
  { x: 80, y: 250, radius: 6, color: "#06b6d4", pulseSpeed: 4, label: "" },
  { x: 400, y: 220, radius: 6, color: "#06b6d4", pulseSpeed: 3.5, label: "" },
  { x: 180, y: 340, radius: 6, color: "#06b6d4", pulseSpeed: 3, label: "" },
  { x: 320, y: 350, radius: 6, color: "#06b6d4", pulseSpeed: 4.5, label: "" },
  { x: 50, y: 160, radius: 4, color: "#6b7280", pulseSpeed: 5, label: "" },
  { x: 160, y: 50, radius: 4, color: "#6b7280", pulseSpeed: 4, label: "" },
  { x: 430, y: 150, radius: 4, color: "#6b7280", pulseSpeed: 3, label: "" },
  { x: 350, y: 300, radius: 4, color: "#f59e0b", pulseSpeed: 1.5, label: "!" },
  { x: 200, y: 150, radius: 4, color: "#6b7280", pulseSpeed: 5, label: "" },
  { x: 300, y: 130, radius: 4, color: "#6b7280", pulseSpeed: 4.5, label: "" },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 7], [1, 8], [1, 11],
  [2, 9], [2, 12],
  [3, 7],
  [4, 9], [4, 10],
  [5, 6],
];

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 500 * dpr;
    canvas.height = 420 * dpr;
    ctx.scale(dpr, dpr);

    let time = 0;

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, 500, 420);

      // Draw edges
      for (const [a, b] of EDGES) {
        const nodeA = NODES[a];
        const nodeB = NODES[b];
        const pulse = Math.sin(time * 2 + a + b) * 0.3 + 0.5;

        ctx.beginPath();
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 + pulse * 0.15})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Traveling packet
        const packetPos = (time * 0.3 + a * 0.5) % 1;
        const px = nodeA.x + (nodeB.x - nodeA.x) * packetPos;
        const py = nodeA.y + (nodeB.y - nodeA.y) * packetPos;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${0.3 + pulse * 0.4})`;
        ctx.fill();
      }

      // Draw nodes
      for (const node of NODES) {
        const pulse = Math.sin(time * node.pulseSpeed) * 0.3 + 0.7;

        // Glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        gradient.addColorStop(0, node.color + "40");
        gradient.addColorStop(1, node.color + "00");
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.7 + pulse * 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Label
        if (node.label) {
          ctx.font = `bold ${node.radius}px Inter, sans-serif`;
          ctx.fillStyle = "#06060e";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(node.label, node.x, node.y);
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative">
      <div className="gradient-border p-1">
        <div className="bg-background/80 rounded-[0.9rem] p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-green" />
            <span className="text-xs text-muted font-mono">
              mythnet — topology live
            </span>
            <span className="ml-auto text-xs text-accent-green font-mono">
              13 devices
            </span>
          </div>
          <canvas
            ref={canvasRef}
            className="w-full h-auto"
            style={{ width: 500, height: 420, maxWidth: "100%" }}
          />
          <div className="flex items-center justify-between mt-3 text-xs text-muted font-mono">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-green" />
                MythNet
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Router
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                Server
              </span>
            </div>
            <span className="text-accent-amber">1 anomaly</span>
          </div>
        </div>
      </div>
    </div>
  );
}
