import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          fontWeight: "bold",
          background: "linear-gradient(135deg, #7c5c3a 0%, #a87c50 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "6px",
        }}
      >
        BB
      </div>
    ),
    { ...size }
  )
}
