import { ImageResponse } from "next/og";

export const alt = "Anas Ahmed — Full Stack Developer & Agentic AI Engineer";
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f0f14 0%, #1a1a2e 50%, #16213e 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "100px",
            width: "60px",
            height: "60px",
            borderRadius: "15px",
            background: "rgba(99, 102, 241, 0.15)",
            transform: "rotate(45deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "150px",
            right: "150px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(34, 197, 94, 0.15)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "flex",
              }}
            />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", fontWeight: 500 }}>
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#f8fafc",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Anas Ahmed
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "26px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              marginTop: "12px",
              letterSpacing: "0.5px",
            }}
          >
            Full Stack Developer & Agentic AI Engineer
          </p>

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React", "Next.js", "Node.js", "Python", "TypeScript", "AI"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "15px",
                    fontWeight: 500,
                    display: "flex",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* URL */}
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.3)",
              marginTop: "36px",
              fontWeight: 400,
            }}
          >
            anas-ahmed.vercel.app
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
