"use client";

import { useEffect, useRef } from "react";

export default function ShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext("webgl") || (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    vec2 p = (v_texCoord * 2.0 - 1.0);
    p.x *= u_resolution.x / u_resolution.y;

    // Base color from MYBF palette (#062043)
    vec3 color1 = vec3(0.0235, 0.1255, 0.2627); 
    // Accent color (#418a30)
    vec3 color2 = vec3(0.2549, 0.5412, 0.1882);

    float noise = 0.0;
    for(float i = 1.0; i < 4.0; i++) {
        uv.y += sin(uv.x * 2.0 * i + u_time * 0.2) * 0.1;
        uv.x += cos(uv.y * 2.0 * i + u_time * 0.1) * 0.1;
        noise += (1.0 - abs(sin(uv.y * 10.0 + u_time * 0.5))) * 0.2 / i;
    }

    vec3 finalColor = mix(color1, color2 * 0.5, noise);
    
    // Add a slight glow based on mouse position
    float d = length(p - (u_mouse/u_resolution * 2.0 - 1.0));
    finalColor += color2 * 0.2 * (1.0 / (1.0 + d * d * 5.0));

    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function cs(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;

    const vertexShader = cs(gl.VERTEX_SHADER, vs);
    const fragmentShader = cs(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    function render(t: number) {
      if (!gl || !canvas) return;
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeObserver && canvas) {
        resizeObserver.unobserve(canvas);
      }
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full" style={{ display: "block" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
        width={1280}
        height={1024}
      />
    </div>
  );
}
