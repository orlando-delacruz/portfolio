import { useState, useEffect } from "react";
import theme from "../styles/theme"; // Adjust the import path as needed

const ComingSoon = ({ pageName = "This Page" }) => {
  const [dots, setDots] = useState("");
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 2;
        return next >= 73 ? 73 : next;
      });
    }, 120);

    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);

    return () => {
      clearInterval(dotInterval);
      clearInterval(progressInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  const { colors } = theme;
  const primaryRgb = colors.primaryRgb;
  const whiteRgb = "255, 255, 255";

  return (
    <div style={styles.root(colors)}>
      {/* Noise overlay */}
      <div style={styles.noise} />

      {/* Grid background */}
      <div style={styles.grid(primaryRgb)} />

      {/* Scanline */}
      <div style={styles.scanline} />

      <div style={styles.container}>
        {/* Top status bar */}
        <div style={styles.statusBar(primaryRgb)}>
          <span style={styles.statusDot(colors)} />
          <span style={styles.statusText}>PORTFOLIO — IN PROGRESS</span>
          <span style={styles.statusTime(primaryRgb)}>{new Date().toLocaleTimeString()}</span>
        </div>

        {/* Main content */}
        <div style={styles.main}>
          <button className="backBtn" onClick={() => window.history.back()}>
            <span style={styles.backArrow}>←</span> go back
          </button>
          <p style={styles.label(colors)}>[ PAGE UNDER CONSTRUCTION ]</p>

          <h1 style={{ ...styles.heading, ...(glitch ? styles.headingGlitch(colors) : {}) }}>
            <span style={styles.headingAccent(colors)}>/</span>
            {pageName}
          </h1>

          <p style={styles.subtext}>
            Still building this one{dots}
            <br />
            <span style={styles.subtextMuted}>
              Great things take time. Check back soon.
            </span>
          </p>

          {/* Progress bar */}
          <div style={styles.progressWrapper}>
            <div style={styles.progressLabel}>
              <span>build progress</span>
              <span style={styles.progressPercent(colors)}>{Math.floor(progress)}%</span>
            </div>
            <div style={styles.progressTrack}>
              <div
                style={{
                  ...styles.progressFill(colors),
                  width: `${progress}%`,
                }}
              />
              <div
                style={{
                  ...styles.progressGlow(colors),
                  left: `${progress}%`,
                }}
              />
            </div>
            <p style={styles.progressNote}>
              ↳ stalled at 73% as all good projects do
            </p>
          </div>

          {/* Tags */}
          <div style={styles.tags}>
            {["crafting", "designing", "debugging at 2am", "almost there"].map(
              (tag) => (
                <span key={tag} style={styles.tag(primaryRgb)}>
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Back button */}
        <div style={styles.footer(whiteRgb)}>

          <span style={styles.footerNote(whiteRgb, primaryRgb)}>
            portfolio by{" "}
            <span style={styles.footerAccent(primaryRgb)}>Orlando Dela Cruz</span>
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@700;800&display=swap');

        @keyframes scanMove {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes glitch1 {
          0% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
          20% { clip-path: inset(40% 0 50% 0); transform: translate(4px, 0); }
          40% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
          60% { clip-path: inset(20% 0 70% 0); transform: translate(3px, 0); }
          80% { clip-path: inset(60% 0 30% 0); transform: translate(-4px, 0); }
          100% { clip-path: inset(95% 0 0 0); transform: translate(0, 0); }
        }

        @keyframes fillGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .backBtn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: 1px solid rgba(${whiteRgb}, 0.15);
          border-radius: 3px;
          background-color: transparent;
          color: rgba(${whiteRgb}, 0.6);
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .backBtn:hover {
          background: rgba(${primaryRgb}, 0.08);
          border-color: rgba(${primaryRgb}, 0.5);
          color: ${colors.primary};
        }
      `}</style>
    </div>
  );
};

const styles = {
  root: (colors) => ({
    minHeight: "100vh",
    backgroundColor: colors.background,
    color: colors.white,
    fontFamily: "'Space Mono', monospace",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  }),
  noise: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
    backgroundRepeat: "repeat",
    backgroundSize: "128px",
    opacity: 0.4,
    pointerEvents: "none",
    zIndex: 1,
  },
  grid: (primaryRgb) => ({
    position: "fixed",
    inset: 0,
    backgroundImage: `linear-gradient(rgba(${primaryRgb}, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${primaryRgb}, 0.03) 1px, transparent 1px)`,
    backgroundSize: "48px 48px",
    pointerEvents: "none",
    zIndex: 0,
  }),
  scanline: {
    position: "fixed",
    left: 0,
    right: 0,
    height: "120px",
    background:
      "linear-gradient(to bottom, transparent, rgba(37, 98, 234, 0.025), transparent)",
    animation: "scanMove 6s linear infinite",
    pointerEvents: "none",
    zIndex: 2,
  },
  container: {
    position: "relative",
    zIndex: 10,
    maxWidth: "720px",
    margin: "0 auto",
    padding: "40px 32px",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    gap: "0",
  },
  statusBar: (primaryRgb) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    border: `1px solid rgba(${primaryRgb}, 0.12)`,
    borderRadius: "4px",
    backgroundColor: `rgba(${primaryRgb}, 0.03)`,
    marginBottom: "80px",
  }),
  statusDot: (colors) => ({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: colors.primary,
    display: "inline-block",
    animation: "blink 1.5s ease-in-out infinite",
    flexShrink: 0,
  }),
  statusText: {
    fontSize: "11px",
    letterSpacing: "0.15em",
    color: "rgba(255, 255, 255, 0.5)",
    flex: 1,
  },
  statusTime: (primaryRgb) => ({
    fontSize: "11px",
    color: `rgba(${primaryRgb}, 0.5)`,
    letterSpacing: "0.1em",
  }),
  main: {
    flex: 1,
  },
  label: (colors) => ({
    fontSize: "11px",
    letterSpacing: "0.2em",
    color: colors.primary,
    marginBottom: "20px",
    opacity: 0.7,
  }),
  heading: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(40px, 10vw, 55px)",
    fontWeight: 800,
    lineHeight: 0.95,
    color: "#eef4f8",
    marginBottom: "32px",
    letterSpacing: "-0.02em",
    position: "relative",
  },
  headingGlitch: (colors) => ({
    animation: "glitch1 0.15s steps(1) forwards",
    color: colors.primary,
  }),
  headingAccent: (colors) => ({
    color: colors.primary,
    marginRight: "4px",
  }),
  subtext: {
    fontSize: "15px",
    lineHeight: 1.8,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "48px",
  },
  subtextMuted: {
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: "13px",
  },
  progressWrapper: {
    marginBottom: "48px",
  },
  progressLabel: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "rgba(255, 255, 255, 0.4)",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  progressPercent: (colors) => ({
    color: colors.primary,
  }),
  progressTrack: {
    height: "3px",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "2px",
    position: "relative",
    overflow: "visible",
  },
  progressFill: (colors) => ({
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: "2px",
    transition: "width 0.15s ease",
    position: "relative",
  }),
  progressGlow: (colors) => ({
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: colors.primary,
    boxShadow: `0 0 12px 4px ${colors.primary}`,
    animation: "fillGlow 1.5s ease-in-out infinite",
  }),
  progressNote: {
    fontSize: "11px",
    color: "rgba(255, 255, 255, 0.25)",
    marginTop: "10px",
    fontStyle: "italic",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: (primaryRgb) => ({
    fontSize: "11px",
    letterSpacing: "0.1em",
    padding: "6px 14px",
    border: `1px solid rgba(${primaryRgb}, 0.15)`,
    borderRadius: "2px",
    color: `rgba(${primaryRgb}, 0.5)`,
    backgroundColor: `rgba(${primaryRgb}, 0.03)`,
  }),
  footer: (whiteRgb) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "40px",
    borderTop: `1px solid rgba(${whiteRgb}, 0.06)`,
    marginTop: "80px",
    flexWrap: "wrap",
    gap: "16px",
  }),
  backArrow: {
    fontSize: "16px",
  },
  footerNote: (whiteRgb) => ({
    fontSize: "12px",
    color: `rgba(${whiteRgb}, 0.2)`,
    letterSpacing: "0.05em",
  }),
  footerAccent: (primaryRgb) => ({
    color: `rgba(${primaryRgb}, 0.4)`,
  }),
};

export default ComingSoon;