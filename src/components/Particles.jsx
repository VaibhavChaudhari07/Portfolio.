import { useEffect, useRef } from "react";

const Particles = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.log("Particles: Container not found");
      return;
    }

    try {
      console.log("Particles: Initializing WebGL renderer");
      
      // Create canvas
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        console.error("Particles: WebGL not supported");
        return;
      }

      // Set canvas styles
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      
      container.appendChild(canvas);

      const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        console.log(`Particles: Resizing to ${width}x${height}`);
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      };
      
      window.addEventListener("resize", resize, false);
      resize();

      // Simple vertex shader
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, `
        attribute vec2 position;
        uniform float uTime;
        
        void main() {
          vec2 pos = position;
          pos.x += sin(uTime + position.y) * 0.1;
          pos.y += cos(uTime + position.x) * 0.1;
          gl_Position = vec4(pos, 0.0, 1.0);
          gl_PointSize = 3.0;
        }
      `);
      gl.compileShader(vertexShader);

      // Check vertex shader compilation
      if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error("Particles: Vertex shader compilation failed:", gl.getShaderInfoLog(vertexShader));
        return;
      }

      // Simple fragment shader
      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, `
        precision mediump float;
        
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
      `);
      gl.compileShader(fragmentShader);

      // Check fragment shader compilation
      if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error("Particles: Fragment shader compilation failed:", gl.getShaderInfoLog(fragmentShader));
        return;
      }

      // Create program
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      // Check program linking
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Particles: Program linking failed:", gl.getProgramInfoLog(program));
        return;
      }

      gl.useProgram(program);

      // Create particles
      const count = 100;
      const positions = new Float32Array(count * 2);
      
      for (let i = 0; i < count; i++) {
        positions[i * 2] = (Math.random() - 0.5) * 2;
        positions[i * 2 + 1] = (Math.random() - 0.5) * 2;
      }

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

      const positionLocation = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const timeLocation = gl.getUniformLocation(program, 'uTime');

      let animationFrameId;
      let lastTime = performance.now();
      let elapsed = 0;

      const update = (t) => {
        animationFrameId = requestAnimationFrame(update);
        const delta = t - lastTime;
        lastTime = t;
        elapsed += delta * 0.001;

        // Only render if the canvas is visible
        if (canvas.getBoundingClientRect().bottom > 0 && canvas.getBoundingClientRect().top < window.innerHeight) {
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);

          gl.uniform1f(timeLocation, elapsed);
          gl.drawArrays(gl.POINTS, 0, count);
        }
      };

      console.log("Particles: Starting animation loop");
      animationFrameId = requestAnimationFrame(update);

      return () => {
        console.log("Particles: Cleaning up");
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationFrameId);
        if (container.contains(canvas)) {
          container.removeChild(canvas);
        }
      };
    } catch (error) {
      console.error("Particles: Error initializing WebGL", error);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className || ''}`}
      style={{ minHeight: '400px' }}
      onError={(e) => {
        console.error("Particles container error:", e);
      }}
    />
  );
};

export default Particles; 