import { useEffect } from "react";
import { ClassicalNoise } from "../utils/hero-bg";

const BgNoise = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const perlin = new ClassicalNoise();
    const variation = 0.003;
    const amp = 200;
    const variators: number[] = [];
    const max_lines = navigator.userAgent.toLowerCase().includes("firefox") ? 25 : 30;
    let canvasWidth: number;
    let canvasHeight: number;
    let start_y: number;

    for (let i = 0, u = 0; i < max_lines; i++, u += 0.02) {
      variators[i] = u;
    }

    function draw() {
      ctx.shadowColor = "rgba(134,194,50)";
      ctx.shadowBlur = 0.5;

      for (let i = 0; i <= max_lines; i++) {
        ctx.beginPath();
        ctx.moveTo(0, start_y);

        let lastY = 0;
        for (let x = 0; x <= canvasWidth; x++) {
          const y = perlin.noise(x * variation + variators[i], x * variation, 0);
          ctx.lineTo(x, start_y + amp * y);
          lastY = y;
        }

        const alpha = Math.min(Math.abs(lastY), 0.8) + 0.1;
        ctx.strokeStyle = `rgba(134,194,50,${alpha})`;
        ctx.stroke();
        ctx.closePath();

        variators[i] += 0.005;
      }
    }

    (function init() {
      resizeCanvas();
      animate();
      window.addEventListener("resize", resizeCanvas);
    })();

    function animate() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      draw();
      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvasWidth = document.documentElement.clientWidth;
      canvasHeight = document.documentElement.clientHeight;

      canvas.setAttribute("width", canvasWidth.toString());
      canvas.setAttribute("height", canvasHeight.toString());

      start_y = canvasHeight / 2.5;
    }
  }, []);

  return <canvas id="canvas" className="absolute -z-10" />;
};

export default BgNoise;
