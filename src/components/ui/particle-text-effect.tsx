import { useEffect, useRef } from "react";

interface Vector2D { x: number; y: number; }

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };
  closeEnoughTarget = 100;
  maxSpeed = 1.0;
  maxForce = 0.1;
  particleSize = 10;
  isKilled = false;
  startColor = { r: 34, g: 197, b: 94 };
  targetColor = { r: 34, g: 197, b: 94 };
  colorWeight = 0;
  colorBlendRate = 0.01;

  move() {
    let proximityMult = 1;
    const distance = Math.hypot(this.pos.x - this.target.x, this.pos.y - this.target.y);
    if (distance < this.closeEnoughTarget) proximityMult = distance / this.closeEnoughTarget;

    const towardsTarget = { x: this.target.x - this.pos.x, y: this.target.y - this.pos.y };
    const mag = Math.hypot(towardsTarget.x, towardsTarget.y);
    if (mag > 0) {
      towardsTarget.x = (towardsTarget.x / mag) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / mag) * this.maxSpeed * proximityMult;
    }
    const steer = { x: towardsTarget.x - this.vel.x, y: towardsTarget.y - this.vel.y };
    const sMag = Math.hypot(steer.x, steer.y);
    if (sMag > 0) {
      steer.x = (steer.x / sMag) * this.maxForce;
      steer.y = (steer.y / sMag) * this.maxForce;
    }
    this.acc.x += steer.x; this.acc.y += steer.y;
    this.vel.x += this.acc.x; this.vel.y += this.acc.y;
    this.pos.x += this.vel.x; this.pos.y += this.vel.y;
    this.acc.x = 0; this.acc.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.colorWeight < 1.0) this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    const c = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    };
    ctx.fillStyle = `rgb(${c.r},${c.g},${c.b})`;
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
  }

  kill(w: number, h: number) {
    if (!this.isKilled) {
      const r = generateRandomPos(w / 2, h / 2, (w + h) / 2);
      this.target.x = r.x; this.target.y = r.y;
      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      };
      this.targetColor = { r: 240, g: 253, b: 244 };
      this.colorWeight = 0;
      this.isKilled = true;
    }
  }
}

function generateRandomPos(x: number, y: number, mag: number): Vector2D {
  const rx = Math.random() * 1000;
  const ry = Math.random() * 500;
  const dir = { x: rx - x, y: ry - y };
  const m = Math.hypot(dir.x, dir.y);
  if (m > 0) { dir.x = (dir.x / m) * mag; dir.y = (dir.y / m) * mag; }
  return { x: x + dir.x, y: y + dir.y };
}

interface Props { words?: string[]; className?: string; }

export function ParticleTextEffect({
  words = ["ECODRONES", "REGENERAR", "AGIR", "IMPACTO"],
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);
  const wordIdxRef = useRef(0);
  const pixelSteps = 6;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = parent?.clientWidth || 1000;
    const h = Math.min(500, w * 0.5);
    canvas.width = w;
    canvas.height = h;

    const nextWord = (word: string) => {
      const off = document.createElement("canvas");
      off.width = canvas.width; off.height = canvas.height;
      const octx = off.getContext("2d")!;
      octx.fillStyle = "white";
      const fontSize = Math.min(canvas.width / 6, 140);
      octx.font = `bold ${fontSize}px "Bebas Neue", sans-serif`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText(word, canvas.width / 2, canvas.height / 2);
      const data = octx.getImageData(0, 0, canvas.width, canvas.height).data;
      const newColor = { r: 34, g: 197, b: 94 };
      const particles = particlesRef.current;
      let idx = 0;
      const coords: number[] = [];
      for (let i = 0; i < data.length; i += pixelSteps * 4) coords.push(i);
      for (let i = coords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coords[i], coords[j]] = [coords[j], coords[i]];
      }
      for (const ci of coords) {
        if (data[ci + 3] > 0) {
          const x = (ci / 4) % canvas.width;
          const y = Math.floor(ci / 4 / canvas.width);
          let p: Particle;
          if (idx < particles.length) {
            p = particles[idx]; p.isKilled = false; idx++;
          } else {
            p = new Particle();
            const rp = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2);
            p.pos.x = rp.x; p.pos.y = rp.y;
            p.maxSpeed = Math.random() * 6 + 4;
            p.maxForce = p.maxSpeed * 0.05;
            p.particleSize = Math.random() * 6 + 6;
            p.colorBlendRate = Math.random() * 0.0275 + 0.0025;
            particles.push(p);
          }
          p.startColor = {
            r: p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight,
            g: p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight,
            b: p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight,
          };
          p.targetColor = newColor;
          p.colorWeight = 0;
          p.target.x = x; p.target.y = y;
        }
      }
      for (let i = idx; i < particles.length; i++) particles[i].kill(canvas.width, canvas.height);
    };

    const animate = () => {
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "rgba(240,253,244,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.move(); p.draw(ctx);
        if (p.isKilled && (p.pos.x < 0 || p.pos.x > canvas.width || p.pos.y < 0 || p.pos.y > canvas.height)) {
          particles.splice(i, 1);
        }
      }
      frameRef.current++;
      if (frameRef.current % 200 === 0) {
        wordIdxRef.current = (wordIdxRef.current + 1) % words.length;
        nextWord(words[wordIdxRef.current]);
      }
      animRef.current = requestAnimationFrame(animate);
    };

    nextWord(words[0]);
    animate();

    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [words]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "auto", display: "block", background: "hsl(var(--background))" }}
      aria-hidden="true"
    />
  );
}
