import { ImageResponse } from "next/og"
import { businessInfo } from "@/lib/data/business-info"

export const runtime = "edge"

export const alt = businessInfo.name
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #7c5c3a 0%, #a87c50 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {businessInfo.name}
        </div>
        <div
          style={{
            fontSize: 42,
            opacity: 0.95,
            textAlign: "center",
          }}
        >
          {businessInfo.tagline}
        </div>
      </div>
    ),
    { ...size }
  )
}
