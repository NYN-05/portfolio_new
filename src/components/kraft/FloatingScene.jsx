import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Grid } from "@react-three/drei";
import { useReducedMotion } from "motion/react";

function TechnicalKnot({ position, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.35 * speed;
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.y = t * 0.45;
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.18;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      {/* wireframe icosahedron — blueprint feel */}
      <mesh>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color="#e85a2a" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.92, 0]} />
        <meshStandardMaterial color="#1a1816" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

function BlueprintTorus({ position, scale = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <torusGeometry args={[0.7, 0.14, 14, 28]} />
        <meshBasicMaterial color="#1a1816" wireframe transparent opacity={0.13} />
      </mesh>
      {/* inner hand-drawn circle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.55, 0.57, 32]} />
        <meshBasicMaterial color="#e85a2a" transparent opacity={0.18} side={2} />
      </mesh>
    </group>
  );
}

function FloatingStack({ position }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.55) * 0.12;
  });
  return (
    <group ref={ref} position={position}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[i * 0.04, i * 0.07, i * -0.04]} rotation={[0, 0, (i - 1) * 0.03]}>
          <boxGeometry args={[1.05, 0.02, 0.72]} />
          <meshStandardMaterial color={i === 0 ? "#fffef8" : i === 1 ? "#fefdf7" : "#fdf8ef"} transparent opacity={0.95} />
        </mesh>
      ))}

    </group>
  );
}

// Dynamically import three for edgesGeometry fallback without bundling extra
// Instead use simple box wire above — avoid require in production, use JSX geometry

function Scene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 3]} intensity={1.15} />
      <directionalLight position={[-4, -3, -5]} intensity={0.45} color="#e85a2a" />

      {/* subtle infinite blueprint grid */}
      <Grid
        position={[0, -1.2, 0]}
        args={[14, 14]}
        cellSize={0.32}
        cellThickness={0.45}
        sectionSize={1.6}
        sectionThickness={0.9}
        sectionColor="#1a1816"
        cellColor="#1a1816"
        fadeDistance={9}
        fadeStrength={1.8}
        infiniteGrid
      />

      <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.55}>
        <TechnicalKnot position={[-1.9, 0.55, -0.8]} scale={0.95} speed={0.9} />
      </Float>
      <Float speed={0.95} rotationIntensity={0.18} floatIntensity={0.48}>
        <BlueprintTorus position={[1.95, 0.15, -0.6]} scale={0.9} />
      </Float>
      <Float speed={1.05} rotationIntensity={0.12} floatIntensity={0.42}>
        <FloatingStack position={[0.05, -0.18, 0.45]} />
      </Float>

      {/* faint annotation dots */}
      <mesh position={[-0.85, 1.05, -1.2]}>
        <sphereGeometry args={[0.02, 12, 12]} />
        <meshBasicMaterial color="#e85a2a" transparent opacity={0.65} />
      </mesh>
      <mesh position={[1.35, 0.82, -1.1]}>
        <sphereGeometry args={[0.018, 10, 10]} />
        <meshBasicMaterial color="#1a1816" transparent opacity={0.22} />
      </mesh>
    </>
  );
}

function FloatingScene({ className }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div aria-hidden="true" className={className}>
        <div className="absolute inset-0 dot-grid opacity-[0.08]" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={className}>
      <Canvas
        dpr={[1, 1.45]}
        camera={{ position: [0, 0.7, 5.2], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
        }}
        style={{ background: "transparent" }}
      >
        {/* frameloop demand via manual invalidation is lighter, but keep always for float */}
        <Scene />
      </Canvas>

      {/* paper overlay veil — keeps engineering identity, softens 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/35" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-multiply" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      }} />
    </div>
  );
}

export default FloatingScene;
