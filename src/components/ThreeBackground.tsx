import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
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
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
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

function FloatingGeometry({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.3]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.6}
          wireframe
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#00ffff" intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.3} />
        
        <ParticleField />
        
        <FloatingGeometry position={[-2, 1, -2]} color="#00ffff" />
        <FloatingGeometry position={[2, -1, -3]} color="#ff00ff" />
        <FloatingGeometry position={[0, 2, -4]} color="#0080ff" />
        <FloatingGeometry position={[-3, -2, -1]} color="#ff0080" />
        <FloatingGeometry position={[3, 1, -5]} color="#80ff00" />
      </Canvas>
    </div>
  );
}