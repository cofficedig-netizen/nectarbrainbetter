import { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface SynergyWheelProps {
  centralLabel: string;
  synergies: { label: string }[];
}

const synergyEmojis = ["🍯🦁", "🍯🟡", "🍵✨", "🌿🥥", "🫐🧘", "🟡🌶️"];

const SynergyWheel = ({ centralLabel, synergies }: SynergyWheelProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const radius = 180;

  return (
    <div
      className="relative w-[360px] h-[360px] md:w-[500px] md:h-[500px] mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setHoveredIndex(null); }}
    >
      {/* Rotating container */}
      <div
        className="absolute inset-0"
        style={{
          animation: paused ? "none" : "spin 30s linear infinite",
        }}
      >
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
          {synergies.map((_, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const x = 250 + radius * Math.cos(angle);
            const y = 250 + radius * Math.sin(angle);
            return (
              <line
                key={i}
                x1="250" y1="250" x2={x} y2={y}
                stroke="hsl(var(--primary))"
                strokeWidth={hoveredIndex === i ? 3 : 1.5}
                strokeOpacity={hoveredIndex === i ? 0.8 : 0.3}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Orbital nodes */}
        {synergies.map((s, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const pct = (radius / 250) * 50;
          const left = 50 + pct * Math.cos(angle);
          const top = 50 + pct * Math.sin(angle);
          return (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <button
                  className={`absolute w-16 h-16 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 flex items-center justify-center text-sm font-body cursor-pointer transition-all duration-300 ${
                    hoveredIndex === i
                      ? "border-primary bg-primary/20 scale-110 shadow-lg shadow-primary/20"
                      : "border-primary/30 bg-card hover:border-primary/60"
                  }`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    counterReset: "none",
                    transform: `translate(-50%, -50%) rotate(${paused ? 0 : 0}deg)`,
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="text-lg md:text-xl">{synergyEmojis[i]}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[240px] text-center font-body">
                {s.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      {/* Central node (doesn't rotate) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/50 flex flex-col items-center justify-center shadow-lg shadow-primary/10">
          <span className="text-3xl md:text-4xl">🍯</span>
          <span className="font-display text-xs md:text-sm font-bold text-primary mt-1 text-center px-2 leading-tight">
            {centralLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SynergyWheel;
