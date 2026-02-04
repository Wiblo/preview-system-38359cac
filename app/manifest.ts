import type { MetadataRoute } from "next"
import { businessInfo } from "@/lib/data/business-info"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessInfo.name,
    short_name: "Beck's",
    description: businessInfo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c5c3a",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  }
}
