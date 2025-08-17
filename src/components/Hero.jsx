import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Navbar from "./Navbar";

const RotatingGlobe = () => {
  const globeRef = useRef(null);
  const meshRef = useRef(null);

  useEffect(() => {
    if (meshRef.current) {
      const loader = new THREE.TextureLoader();
      const earthTexture = loader.load("https://unpkg.com/three-globe/example/img/earth-day.jpg");
      const bumpTexture = loader.load("https://unpkg.com/three-globe/example/img/earth-topology.png");

      const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.05,
      });

      meshRef.current.material = material;
    }
  }, []);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.004;
    }
  });

  const createLightBeam = (start, end, color) => {
    const points = [];
    const numPoints = 50;

    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const x = start[0] + (end[0] - start[0]) * t;
      const y = start[1] + (end[1] - start[1]) * t + Math.sin(t * Math.PI) * 0.5;
      const z = start[2] + (end[2] - start[2]) * t;
      points.push(new THREE.Vector3(x, y, z));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.8 });

    return new THREE.Line(geometry, material);
  };

  const LightBeams = () => {
    const beamsRef = useRef(null);

    useEffect(() => {
      if (beamsRef.current) {
        beamsRef.current.clear();

        const beam1 = createLightBeam([1.2, 0.8, 0.5], [-1.2, 0.6, -0.8], "#00ffff");
        const beam2 = createLightBeam([0.8, -0.6, 1.0], [-0.9, -0.7, 0.6], "#ff00ff");
        const beam3 = createLightBeam([-0.5, 0.9, -1.1], [1.1, -0.4, 0.9], "#ffcc00");

        beamsRef.current.add(beam1);
        beamsRef.current.add(beam2);
        beamsRef.current.add(beam3);
      }
    }, []);

    useFrame((state) => {
      if (beamsRef.current) {
        beamsRef.current.children.forEach((beam, index) => {
          const line = beam;
          if (line.material) {
            line.material.opacity = 0.5 + 0.3 * Math.sin(state.clock.elapsedTime * 2 + index);
          }
        });
      }
    });

    return <group ref={beamsRef} />;
  };

  return (
    <group ref={globeRef}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial color="#4a90e2" />
      </mesh>

      <LightBeams />

      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#87CEEB"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const Hero = () => {
  return (
    <header className="globe-hero">
      <div className="globe-canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <RotatingGlobe />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>

      <div className="globe-overlay" />

      <div className="globe-navbar-wrapper">
        <Navbar />
      </div>

      <div className="globe-hero-content">
        <h1>Transforming Data into Environmental Solutions</h1>
        <p>Innovative GIS & Climate Solutions for a Sustainable Future</p>
        <div className="hero-cta-row">
          <button className="hero-btn">Learn More</button>
          <button className="hero-btn secondary">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
