# 🌐 Latency Topology Visualizer

An interactive 3D world map to visualize real-time and historical network latency across major cloud providers (AWS, GCP, Azure) and cryptocurrency exchange servers. Built using **Next.js**, **React Three Fiber**, and **Cloudflare Radar API**.

## 📸 Features

- 🌍 3D globe with realistic textures
- 📍 Markers for exchange server locations with tooltip overlays
- 🔄 Real-time animated latency links using:
  - Pulsing effects
  - Dashed lines
  - Color-coded latency
- 🎨 Light/Dark theme support
- 🔁 Cloudflare Radar API integration for real-world latency data
- 📱 Mobile support with camera controls and pinch-zoom

---

## 🚀 Tech Stack

| Layer     | Tech                                           |
|-----------|------------------------------------------------|
| Frontend  | React, Next.js, Tailwind CSS, ShadCN UI        |
| 3D Engine | React Three Fiber, Drei, GLSL shaders          |
| Data      | Cloudflare Radar API (or mock latency fallback)|
| Auth      | Google OAuth (Planned)                         |

---

## 🧱 Project Structure

```

/components
├── ThreeScene.tsx          # 3D canvas with globe and server markers
├── LatencyLine.tsx         # Animated latency lines with pulse
├── RealTimeLatency.tsx     # Cloudflare Radar latency API fetch
├── CameraController.tsx    # Camera animation logic
/lib
├── geoUtils.ts             # Lat/lng to 3D conversion utils
├── exchangeData.ts         # List of exchanges and cloud providers
├── latencyData.ts          # Mock latency generator
/public
├── earthmap.jpg            # Texture for the globe
/pages
└── api/
└── latency.ts          # Optional proxy API for latency fetch

---

## ✨ Visual Effects Used

* 🌐 Earth texture with `meshStandardMaterial`
* 📍 Server markers with hoverable HTML tooltips
* 🔁 Latency links animated with:

  * ShaderMaterial for latency thresholds
  * Dashed line effects
  * Color-coded latencies
* 🔄 Auto-refresh every 5 seconds

---

## 🎮 Controls

* Drag to rotate globe
* Scroll to zoom in/out
* Tooltip on hover (PC) or tap (Mobile)
* Touch-gesture camera support

---

## 📦 To-Do (Upcoming Phases)

* 📊 Historical latency timeline
* 📍 Add more cloud regions and exchanges
* 🔒 Google Login + user save settings
* 📤 Export latency reports

---

## 👨‍💻 Author

**Ridam Hazra**

---

## 📄 License

MIT License