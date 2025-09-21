import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  const ref = useRef<THREE.Points>(null);

  // Generate random particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Base rotation
      const baseRotationX = state.clock.elapsedTime * 0.05;
      const baseRotationY = state.clock.elapsedTime * 0.03;

      // Mouse influence (opposite direction with reduced intensity)
      const mouseInfluenceX = -mousePosition.y * 0.3;
      const mouseInfluenceY = -mousePosition.x * 0.3;

      ref.current.rotation.x = baseRotationX + mouseInfluenceX;
      ref.current.rotation.y = baseRotationY + mouseInfluenceY;
    }
  });

  return (
    <Points
      ref={ref}
      positions={particlesPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ShootingStar({
  startPosition,
  direction,
  speed,
}: {
  startPosition: [number, number, number];
  direction: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const [opacity, setOpacity] = useState(1);
  const [reset, setReset] = useState(false);

  const trailPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < 30; i++) {
      const t = i / 29;
      points.push(
        new THREE.Vector3(
          startPosition[0] - direction[0] * t * 4,
          startPosition[1] - direction[1] * t * 4,
          startPosition[2] - direction[2] * t * 4
        )
      );
    }
    return points;
  }, [startPosition, direction, reset]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Move the shooting star
      ref.current.position.x += direction[0] * speed * delta;
      ref.current.position.y += direction[1] * speed * delta;
      ref.current.position.z += direction[2] * speed * delta;

      // Check if star is out of bounds and reset
      const distance = ref.current.position.length();
      if (distance > 30) {
        ref.current.position.set(...startPosition);
        setOpacity(1);
        setReset(!reset);
      }

      // Fade based on distance from center
      const fadeStartDistance = 20;
      if (distance > fadeStartDistance) {
        setOpacity(Math.max(0.2, 1 - (distance - fadeStartDistance) / 10));
      } else {
        setOpacity(
          Math.min(
            1,
            0.5 + ((fadeStartDistance - distance) / fadeStartDistance) * 0.5
          )
        );
      }
    }
  });

  return (
    <group ref={ref} position={startPosition}>
      {/* Main star point */}
      <Points positions={new Float32Array([0, 0, 0])} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.3}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={opacity * 0.9}
        />
      </Points>

      {/* Trail */}
      <Line
        points={trailPoints}
        color="#ffffff"
        lineWidth={4}
        transparent
        opacity={opacity * 0.7}
      />
    </group>
  );
}

function ShootingStars() {
  const shootingStars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 8; i++) {
      // Generate random direction vector
      const dirX = (Math.random() - 0.5) * 2;
      const dirY = (Math.random() - 0.5) * 2;
      const dirZ = (Math.random() - 0.5) * 2;

      // Normalize the direction vector
      const length = Math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ);
      const normalizedDir = [dirX / length, dirY / length, dirZ / length];

      stars.push({
        id: i,
        startPosition: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50, // Random position in all directions
        ] as [number, number, number],
        direction: normalizedDir as [number, number, number],
        speed: 3 + Math.random() * 4,
      });
    }
    return stars;
  }, []);

  return (
    <>
      {shootingStars.map((star) => (
        <ShootingStar
          key={star.id}
          startPosition={star.startPosition}
          direction={star.direction}
          speed={star.speed}
        />
      ))}
    </>
  );
}

export default function ThreeBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#00ffff" intensity={0.5} />
        <pointLight
          position={[-10, -10, -10]}
          color="#ff00ff"
          intensity={0.3}
        />

        <ParticleField mousePosition={mousePosition} />
        <ShootingStars />
      </Canvas>
    </div>
  );
}
