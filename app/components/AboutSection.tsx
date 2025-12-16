"use client";

import { Terminal, Cpu, Users, ArrowRight, RefreshCcw } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- TERMINAL SCRIPT CONFIGURATION ---
const SCRIPT = [
  { type: "cmd", text: "init protocol --d3" },
  { type: "output", text: ">> D3_CORE: Loading neural pathways..." },
  { type: "output", text: ">> MODULE: AI_RESEARCH [ONLINE]" },
  { type: "output", text: ">> MODULE: FULL_STACK [ONLINE]" },
  { type: "cmd", text: "run vision.exe" },
  { type: "result", text: '"Building the future, one event at a time."' },
];

export default function AboutSection() {
  // --- TYPING ENGINE STATE ---
  const [lines, setLines] = useState<{ type: string; text: string }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Ref to auto-scroll the terminal
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= SCRIPT.length) {
      // Script finished, wait and reset
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 5000); // 5 second pause before restart
      return () => clearTimeout(timeout);
    }

    const currentScriptLine = SCRIPT[currentLineIndex];

    // Typing logic
    if (currentCharIndex < currentScriptLine.text.length) {
      const timeout = setTimeout(
        () => {
          setCurrentCharIndex((prev) => prev + 1);
        },
        currentScriptLine.type === "cmd" ? Math.random() * 50 + 50 : 20
      ); // Commands type slower (human), outputs fast (machine)

      return () => clearTimeout(timeout);
    } else {
      // Line finished
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, currentScriptLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 400); // Pause between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, currentCharIndex]);

  return (
    <section className="col-span-1 md:col-span-4 bento-card w-full overflow-hidden rounded-bento bg-dark-card border border-dark-border p-6 md:p-10 relative group">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        {/* LEFT COLUMN: Narrative */}
        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-[0_0_10px_rgba(0,74,173,0.2)]">
              About Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            Where <span className="text-gradient">Logic</span> Meets{" "}
            <span className="text-gradient">Imagination</span>
          </h2>

          <p className="text-[var(--color-muted)] text-lg leading-relaxed">
            The Digital Dreamers Den (D3) isn't just a club; it's a compile-time
            environment for your ambitions. We are a collective of AI engineers,
            full-stack developers, and creative problem solvers dedicated to the
            philosophy of{" "}
            <span className="text-[var(--color-text)] font-semibold italic">
              "Less talk, more shipping."
            </span>
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
              <Cpu className="w-4 h-4 text-[var(--color-secondary)]" />
              <span>AI Research</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
              <Terminal className="w-4 h-4 text-[var(--color-secondary)]" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
              <Users className="w-4 h-4 text-[var(--color-secondary)]" />
              <span>Peer Learning</span>
            </div>
          </div>

          <button className="mt-4 group/btn flex items-center gap-2 text-sm font-bold text-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-colors">
            Read our Manifesto
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* RIGHT COLUMN: Interactive Terminal */}
        <div className="relative w-full h-full min-h-[320px] flex items-center justify-center perspective-1000">
          {/* Terminal Container */}
          <div className="w-full bg-[#020817] rounded-xl border border-[var(--color-border)] shadow-2xl overflow-hidden font-mono text-sm relative flex flex-col h-[300px] hover:border-[var(--color-primary)]/50 transition-colors duration-300">
            {/* Terminal Header */}
            <div className="bg-[#0f172a] px-4 py-2 border-b border-[var(--color-border)] flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
              </div>
              <div className="text-[10px] font-bold text-[var(--color-muted)] flex items-center gap-2">
                <Cpu className="w-3 h-3" />
                D3_KERNEL_V2.4
              </div>
            </div>

            {/* Terminal Body - Scrollable Area */}
            <div
              ref={terminalBodyRef}
              className="p-6 flex-1 overflow-y-auto custom-scrollbar font-mono space-y-2"
            >
              {/* History Lines */}
              {lines.map((line, idx) => (
                <div
                  key={idx}
                  className={`${
                    line.type === "cmd" ? "mb-4 mt-4 first:mt-0" : "mb-1"
                  }`}
                >
                  {line.type === "cmd" && (
                    <div className="flex items-center">
                      <span className="text-[var(--color-secondary)] mr-2">
                        ➜
                      </span>
                      <span className="text-blue-400 mr-2">~</span>
                      <span className="text-gray-100">{line.text}</span>
                    </div>
                  )}
                  {line.type === "output" && (
                    <div className="text-[var(--color-muted)] pl-4 border-l-2 border-[var(--color-border)] ml-1">
                      {line.text}
                    </div>
                  )}
                  {line.type === "result" && (
                    <div className="text-[var(--color-primary-light)] pl-4 font-bold mt-2">
                      {line.text}
                    </div>
                  )}
                </div>
              ))}

              {/* Active Typing Line */}
              {currentLineIndex < SCRIPT.length && (
                <div
                  className={`${
                    SCRIPT[currentLineIndex].type === "cmd" ? "mt-4" : "mb-1"
                  }`}
                >
                  {SCRIPT[currentLineIndex].type === "cmd" && (
                    <div className="flex items-center">
                      <span className="text-[var(--color-secondary)] mr-2">
                        ➜
                      </span>
                      <span className="text-blue-400 mr-2">~</span>
                      <span className="text-gray-100">
                        {SCRIPT[currentLineIndex].text.slice(
                          0,
                          currentCharIndex
                        )}
                        <span className="inline-block w-2 h-4 bg-[var(--color-secondary)] animate-pulse ml-1 align-middle" />
                      </span>
                    </div>
                  )}
                  {SCRIPT[currentLineIndex].type === "output" && (
                    <div className="text-[var(--color-muted)] pl-4 border-l-2 border-[var(--color-border)] ml-1">
                      {SCRIPT[currentLineIndex].text.slice(0, currentCharIndex)}
                    </div>
                  )}
                  {SCRIPT[currentLineIndex].type === "result" && (
                    <div className="text-[var(--color-primary-light)] pl-4 font-bold mt-2">
                      {SCRIPT[currentLineIndex].text.slice(0, currentCharIndex)}
                      <span className="inline-block w-2 h-4 bg-[var(--color-primary-light)] animate-pulse ml-1 align-middle" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Status Footer */}
            <div className="bg-[#0f172a]/50 backdrop-blur-sm px-4 py-1 border-t border-[var(--color-border)] flex justify-between items-center text-[10px] text-[var(--color-muted)]">
              <span>
                STATUS: <span className="text-green-400">ONLINE</span>
              </span>
              <span className="animate-pulse">LISTENING_PORT:3000</span>
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
