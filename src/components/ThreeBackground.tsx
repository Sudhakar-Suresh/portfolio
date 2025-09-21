import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField({ mousePosition }: { mousePosition: { x: number; y: number } }) {
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



export default function ThreeBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#00ffff" intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.3} />
        
        <ParticleField mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}