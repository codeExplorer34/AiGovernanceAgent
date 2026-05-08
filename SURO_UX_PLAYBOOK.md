# SURO: The "Control Plane" Design System 🛡️✨

This document serves as a master technical reference for the SURO UX/UI architecture. It details the "Surgical Hardware" aesthetic, animation types, and atmospheric effects used to create a premium, mission-critical experience.

---

## 1. Global Atmosphere (The "Room")
The atmosphere is managed by the `Atmosphere.tsx` wrapper. It creates a "Digital Physical Interface" using layers of CSS and SVG filters.

### A. Architectural Grid
A 1px white grid that exists behind all content to ground the elements in a technical space.
```css
/* Atmosphere.tsx logic */
backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
backgroundSize: "40px 40px",
opacity: 0.03
```

### B. The "Sand" Effect (Noise/Grain)
*Note: Removed in final SURO version for clarity, but documented here for future use.*
A high-contrast turbulence filter that simulates physical film grain or textured hardware.
```svg
<filter id='noiseFilter'>
  <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/>
</filter>
```

### C. Surgical Scanlines
Simulates a high-resolution CRT or terminal monitor.
```css
backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
backgroundSize: "100% 4px"
```

---

## 2. Animation System
We use **Framer Motion** for all interactions. The core philosophy is **"Revealing Truth"**.

### A. The "Radar Scan" (Text Entrance)
The signature SURO animation. Instead of a simple fade, text is revealed by a vertical "sweep".
- **Concept**: A clipping mask that moves from top to bottom.
- **Implementation**: Uses `clipPath: "inset(0% 0% 100% 0%)"` transition to `inset(0% 0% 0% 0%)`.

### B. High-Fidelity Blur In
Used for titles to create a "lens focusing" effect.
- **Concept**: Starting at `filter: blur(10px)` and animating to `0px`.

---

## 3. Interactive Components

### A. Holographic Service Cards
Cards that react to the mouse in 3D.
1. **The Tilt**: `rotateX` and `rotateY` calculated based on mouse position relative to card center.
2. **The Shine**: A gradient overlay (`radial-gradient`) that moves *linearly* with the cursor to simulate a light source hitting a physical surface.

### B. Governance Lens (X-Ray Sweep)
A dual-layer comparison tool.
- **Logic**: Two identical containers stacked. Top layer has a dynamic `clip-path` (mask) controlled by a draggable slider.
- **Contrast**: `Left = Red/Alert` (Raw Data) vs `Right = Emerald/Secure` (SURO Protected).

### C. Mission Control Floor (Live Log)
A continuous marquee in the footer.
- **Aesthetic**: Monospace font, typewriter delays, and a glowing `LIVE` indicator.
- **Psychology**: Suggests the system is working even when the user is idle.

---

## 4. Hierarchy & Typography
- **Primary Font**: `Inter` (Sleek, Neutral).
- **Secondary/Technical Font**: `Space Mono` or standard `monospace` (Used for system logs, breadcrumbs like `ROOT://`, and metadata).
- **Colors**:
  - `Base`: `#000000` (True Black)
  - `Accent`: `Purple-600` (SURO Power)
  - `Signal`: `Emerald-400` (Secure/Success)
  - `Alert`: `Red-500` (High Risk/Raw Data)

---

## 5. Standard Component Styling (Hardware Look)
To make a flat UI feel like physical hardware:
- **Top Border**: `border-top: 1px solid rgba(255,255,255,0.15)` (Simulates a light highlight on the top edge).
- **Inset Shadow**: `box-shadow: inset 0 2px 10px rgba(0,0,0,0.5)` (Makes the component look "sunken" into the frame).
- **Backdrop Blur**: `backdrop-blur-xl` (Essential for the "Glassmorphism" depth).

