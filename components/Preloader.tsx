"use client";

import { useEffect, useState } from "react";

type LoaderLine = {
  id: string;
  text: string;
  prompt?: boolean;
  dim?: boolean;
  ok?: boolean;
};

const lines: LoaderLine[] = [
  { id: "cmd", prompt: true, text: "next compile --dev" },
  { id: "ts", dim: true, text: "injecting typescript modules" },
  { id: "react", dim: true, text: "hydrating react tree" },
  { id: "ok", ok: true, text: "compiled successfully" }
];

export function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader${loaded ? " loaded" : ""}`}>
      <div className="centrize full-width" style={loaded ? { display: "none" } : undefined}>
        <div className="vertical-center">
          <div className="code-loader" aria-label="Loading">
            <div className="code-loader__glyph" aria-hidden="true">
              <span className="code-loader__bracket">&lt;</span>
              <span className="code-loader__slash">/</span>
              <span className="code-loader__bracket">&gt;</span>
            </div>
            <div className="code-loader__window">
              <div className="code-loader__chrome">
                <span></span>
                <span></span>
                <span></span>
                <em>boot.tsx</em>
              </div>
              <pre className="code-loader__body">
                {lines.map((line) => (
                  <span className={`code-loader__line${line.ok ? " is-ok" : ""}`} key={line.id}>
                    {line.prompt ? <span className="code-loader__prompt">$</span> : null}
                    {line.dim ? <span className="code-loader__dim">↳</span> : null}
                    {line.ok ? <span className="code-loader__ok">✓</span> : null}
                    {line.text}
                  </span>
                ))}
              </pre>
              <div className="code-loader__track">
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
