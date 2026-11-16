export type MerchantPhase = "ready" | "tapping" | "review" | "authorizing" | "processing" | "complete";
export const MERCHANT_DEMO = { name: "Example merchant", amount: "48.00", currency: "SAR" };

/** Quiet, native payment UI. The serif is reserved for the Aeria wordmark. */
export function drawMerchantScreen(
  canvas: HTMLCanvasElement,
  phase: MerchantPhase,
  fonts: { display: string; body: string },
  progress = 1,
  atmosphereTime = 0,
) {
  const c = canvas.getContext("2d");
  if (!c) return;
  c.setTransform(canvas.width / 440, 0, 0, canvas.width / 440, 0, 0);
  c.clearRect(0, 0, 440, 928);
  const ink = "#20394b";
  const muted = "#81909a";
  const blue = "#3f6d8c";
  const paper = "#f8fafb";
  const text = (value: string, x: number, y: number, size: number, color = ink, weight = 500, align: CanvasTextAlign = "left", serif = false) => {
    c.font = `${weight} ${size}px ${serif ? fonts.display : fonts.body}`;
    c.fillStyle = color; c.textAlign = align; c.fillText(value, x, y);
  };
  const box = (x: number, y: number, w: number, h: number, r: number, fill: string | CanvasGradient, stroke?: string) => {
    c.beginPath(); c.roundRect(x, y, w, h, r); c.fillStyle = fill; c.fill();
    if (stroke) { c.strokeStyle = stroke; c.lineWidth = 1; c.stroke(); }
  };
  const circle = (x: number, y: number, r: number, fill: string) => {
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fillStyle = fill; c.fill();
  };
  const line = (x1: number, y1: number, x2: number, y2: number, color = "#e3e9ed", width = 1) => {
    c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.strokeStyle = color;
    c.lineWidth = width; c.lineCap = "round"; c.stroke();
  };
  const faceID = (x: number, y: number, size = 1) => {
    c.save(); c.translate(x, y); c.scale(size, size);
    c.lineWidth = 1.8; c.strokeStyle = blue; c.lineCap = "round";
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
      c.beginPath(); c.moveTo(sx * 11, sy * 27); c.lineTo(sx * 22, sy * 27);
      c.quadraticCurveTo(sx * 28, sy * 27, sx * 28, sy * 21);
      c.lineTo(sx * 28, sy * 11); c.stroke();
    }
    line(-10, -10, -10, -3, blue, 1.8); line(10, -10, 10, -3, blue, 1.8);
    c.beginPath(); c.moveTo(1, -7); c.lineTo(1, 5); c.lineTo(-3, 7); c.stroke();
    c.beginPath(); c.arc(0, 4, 12, 0.45, Math.PI - 0.45); c.stroke();
    c.restore();
  };
  const identity = () => {
    line(43, 776, 397, 776);
    text("Aeria ID", 44, 810, 12, muted);
    text("you@aeria", 44, 843, 21, ink, 550);
  };
  const detail = (label: string, value: string, y: number, color = ink) => {
    text(label, 44, y, 15, muted);
    text(value, 396, y, 17, color, 550, "right");
  };

  const rim = c.createLinearGradient(0, 0, 440, 0);
  rim.addColorStop(0, "#cbd2d1"); rim.addColorStop(0.02, "#657078");
  rim.addColorStop(0.05, "#0b1724"); rim.addColorStop(0.96, "#0b1724"); rim.addColorStop(1, "#aab7be");
  box(0, 0, 440, 928, 80, rim, "#ccd2d1");
  c.save(); c.beginPath(); c.roundRect(10, 10, 420, 908, 70); c.clip();
  box(10, 10, 420, 908, 70, paper);
  // A quiet moving surface behind the existing minimal interface.
  const lightX = 220 + Math.sin(atmosphereTime * 0.23) * 70;
  const lightY = 410 + Math.cos(atmosphereTime * 0.19) * 85;
  const wash = c.createRadialGradient(lightX, lightY, 0, lightX, lightY, 340);
  wash.addColorStop(0, "#b7d4df28"); wash.addColorStop(1, "#b7d4df00");
  c.fillStyle = wash; c.fillRect(10, 70, 420, 800);
  for (let i = 0; i < 24; i++) {
    const x = 28 + (i * 73.71) % 384;
    const y = 190 + (((i * 37.13 - atmosphereTime * 5) % 550) + 550) % 550;
    const fade = Math.min((y - 190) / 45, (740 - y) / 45, 1);
    c.globalAlpha = (0.12 + (i % 3) * 0.035) * fade;
    circle(x, y, 0.65 + (i % 2) * 0.2, blue);
  }
  c.globalAlpha = 1;
  text("9:41", 43, 52, 15, "#23323d", 650);
  box(159, 21, 122, 34, 20, "#080d11");
  for (let i = 0; i < 4; i++) box(354 + i * 5, 46 - i * 3, 3, 4 + i * 3, 1, "#23323d");
  box(380, 34, 23, 12, 3, paper, "#455461"); box(383, 37, 16, 6, 1, "#455461");
  text("Aeria", 42, 128, 40, ink, 400, "left", true);
  circle(382, 111, 16, "#eef2f4");
  line(377, 106, 387, 116, "#8b99a3", 1.4); line(387, 106, 377, 116, "#8b99a3", 1.4);
  line(42, 165, 398, 165);

  if (phase === "ready" || phase === "tapping") {
    circle(220, 384, 68, "#edf3f7");
    c.strokeStyle = blue; c.lineWidth = 2.2; c.lineCap = "round";
    circle(220, 384, 3, blue);
    for (const side of [-1, 1]) for (let i = 1; i <= 3; i++) {
      const start = side === 1 ? -0.8 : Math.PI - 0.8;
      c.beginPath(); c.arc(220, 384, 12 + i * 10, start, start + 1.6); c.stroke();
    }
    text(phase === "tapping" ? "Connecting…" : "Ready to connect", 220, 532, 30, ink, 600, "center");
    text(phase === "tapping" ? "Finding the merchant" : "Hold near the Aeria Terminal", 220, 574, 18, muted, 500, "center");
    text("Review before you pay.", 220, 611, 14, muted, 500, "center");
    identity();
  } else if (phase === "review") {
    text("PAYING", 220, 240, 11, muted, 650, "center");
    text(MERCHANT_DEMO.name, 220, 280, 24, ink, 550, "center");
    text(MERCHANT_DEMO.currency, 220, 350, 15, blue, 650, "center");
    text(MERCHANT_DEMO.amount, 220, 433, 76, ink, 600, "center");
    text("Total to pay", 220, 472, 14, muted, 500, "center");
    line(44, 531, 396, 531);
    detail("Pay from", "Connected account", 574);
    detail("Aeria ID", "you@aeria", 618);
    line(44, 647, 396, 647);
    faceID(220, 714, 0.7);
    box(40, 767, 360, 62, 31, blue);
    text("Confirm payment", 220, 806, 20, "#ffffff", 600, "center");
    text("Confirm with Face ID", 220, 861, 13, muted, 500, "center");
  } else if (phase === "authorizing" || phase === "processing") {
    text(`${MERCHANT_DEMO.currency} ${MERCHANT_DEMO.amount}`, 220, 255, 30, ink, 600, "center");
    text(MERCHANT_DEMO.name, 220, 292, 18, muted, 500, "center");
    if (phase === "authorizing") {
      c.save(); c.globalAlpha = 0.65 + progress * 0.35; faceID(220, 449, 1.3); c.restore();
    } else {
      c.beginPath(); c.arc(220, 449, 36, 0, Math.PI * 2); c.strokeStyle = "#e6edf1"; c.lineWidth = 3; c.stroke();
      const start = -Math.PI / 2 + progress * Math.PI * 2;
      c.beginPath(); c.arc(220, 449, 36, start, start + Math.PI * 0.65); c.strokeStyle = blue; c.lineWidth = 3; c.stroke();
    }
    text(phase === "authorizing" ? "Confirming it’s you" : "Processing payment", 220, 568, 27, ink, 600, "center");
    text(phase === "authorizing" ? "Face ID" : "Just a moment.", 220, 607, 17, muted, 500, "center");
    identity();
  } else {
    circle(220, 303, 42, "#edf4ef");
    const eased = 1 - Math.pow(1 - progress, 3);
    c.save(); c.beginPath(); c.moveTo(202, 303); c.lineTo(215, 316); c.lineTo(240, 290);
    c.strokeStyle = "#4b7866"; c.lineWidth = 3.5; c.lineCap = "round"; c.lineJoin = "round";
    if (progress < 1) c.setLineDash([65 * eased, 100]);
    c.stroke(); c.restore();
    text("Payment complete", 220, 411, 29, ink, 600, "center");
    text(`${MERCHANT_DEMO.currency} ${MERCHANT_DEMO.amount}`, 220, 488, 48, ink, 600, "center");
    text(MERCHANT_DEMO.name, 220, 532, 20, muted, 500, "center");
    line(44, 611, 396, 611);
    detail("Status", "Completed", 654, "#4b7866");
    detail("Paid from", "Connected account", 698);
    identity();
  }
  box(155, 901, 130, 5, 4, "#283e4d");
  c.restore();
}
