import { ImageResponse } from "next/og";

export const alt = "Anas Ahmed — Full Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#000000",
          padding: "40px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* Main Minimalist Frame */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "20px",
            border: "1px solid #27272a",
            backgroundColor: "#09090b",
            padding: "60px 64px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Top Bar: Monospace Navigation / Metadata */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  display: "flex",
                }}
              />
              <span
                style={{
                  color: "#a1a1aa",
                  fontSize: "14px",
                  fontFamily: "monospace",
                  letterSpacing: "0.5px",
                }}
              >
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <span
              style={{
                color: "#71717a",
                fontSize: "14px",
                fontFamily: "monospace",
              }}
            >
              anas-ahmed.vercel.app
            </span>
          </div>

          {/* Middle: Clean Minimalist Typography */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <h1
              style={{
                fontSize: "76px",
                fontWeight: 800,
                color: "#fafafa",
                letterSpacing: "-2.5px",
                margin: 0,
                lineHeight: 1,
              }}
            >
              Anas Ahmed
            </h1>

            <p
              style={{
                fontSize: "28px",
                fontWeight: 400,
                color: "#a1a1aa",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              Full Stack Developer & AI Engineer
            </p>

            <p
              style={{
                fontSize: "17px",
                color: "#52525b",
                margin: 0,
                marginTop: "4px",
                maxWidth: "700px",
                lineHeight: 1.5,
              }}
            >
              Building scalable web applications, autonomous agent systems, and modern digital experiences.
            </p>
          </div>

          {/* Bottom Bar: Monochrome Tech Stack Tags */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              borderTop: "1px solid #18181b",
              paddingTop: "24px",
              width: "100%",
            }}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "FastAPI",
              "Agentic AI",
              "Tailwind CSS",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  color: "#e4e4e7",
                  fontSize: "13px",
                  fontWeight: 500,
                  fontFamily: "monospace",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
