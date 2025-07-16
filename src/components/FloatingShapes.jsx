// src/components/FloatingShapes.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Cone } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Floating sphere */}
        <group position={[-5, 2, 0]}>
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial 
              color="#7e22ce" 
              transparent 
              opacity={0.4} 
              emissive="#7e22ce" 
              emissiveIntensity={0.2}
            />
          </Sphere>
        </group>
        
        {/* Floating torus */}
        <group position={[4, -1, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <Torus args={[1, 0.4, 16, 32]}>
            <meshStandardMaterial 
              color="#6b21a8" 
              transparent 
              opacity={0.3} 
              emissive="#6b21a8" 
              emissiveIntensity={0.1}
            />
          </Torus>
        </group>
        
        {/* Floating cone */}
        <group position={[0, 3, -5]}>
          <Cone args={[1, 2, 32]}>
            <meshStandardMaterial 
              color="#581c87" 
              transparent 
              opacity={0.3} 
              emissive="#581c87" 
              emissiveIntensity={0.1}
            />
          </Cone>
        </group>
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;