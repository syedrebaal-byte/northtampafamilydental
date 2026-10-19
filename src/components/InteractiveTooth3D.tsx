import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface InteractiveTooth3DProps {
  onLearnMore?: () => void;
}

export const InteractiveTooth3D: React.FC<InteractiveTooth3DProps> = ({ onLearnMore }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'crown' | 'enamel' | 'internal'>('crown');
  const [isRotating, setIsRotating] = useState(true);
  const sceneRef = useRef<{
    crownMesh: THREE.Mesh;
    dentinMesh: THREE.Mesh;
    pulpMesh: THREE.Mesh;
    baseMesh: THREE.Group;
    renderer: THREE.WebGLRenderer;
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 360;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer with antialias and alpha
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting: studio high-key dental lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf0fdfa, 2.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.2);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Group for the entire molar assembly
    const molarGroup = new THREE.Group();
    scene.add(molarGroup);

    // Procedural organic tooth crown geometry
    // Upper molar crown shape
    const crownShape = new THREE.CylinderGeometry(1.4, 1.1, 1.8, 32, 16);
    // Displace vertices to create natural dental cusps (4 anatomical cusps)
    const pos = crownShape.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);

      if (y > 0.3) {
        // Upper occlusal surface cusp sculpting
        const cusp = Math.sin(x * 2.8) * Math.cos(z * 2.8) * 0.35;
        const valley = (x * x + z * z) * -0.12;
        pos.setY(i, y + cusp + valley);
      }
    }
    crownShape.computeVertexNormals();

    // Material: Translucent medical ceramic with realistic subsurface sheen
    const crownMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfcfbfa,
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      transmission: 0.25,
      opacity: 0.96,
      transparent: true,
      reflectivity: 0.8,
    });
    const crownMesh = new THREE.Mesh(crownShape, crownMaterial);
    crownMesh.position.y = 0.6;
    molarGroup.add(crownMesh);

    // Root Structure (2 anatomical roots)
    const rootGroup = new THREE.Group();
    const rootMaterial = new THREE.MeshStandardMaterial({
      color: 0xfaebd7,
      roughness: 0.45,
      metalness: 0.02,
    });

    const rootGeo1 = new THREE.ConeGeometry(0.55, 2.2, 24);
    const rootMesh1 = new THREE.Mesh(rootGeo1, rootMaterial);
    rootMesh1.position.set(-0.55, -1.2, 0);
    rootMesh1.rotation.z = 0.15;
    rootMesh1.rotation.x = 3.14159;
    rootGroup.add(rootMesh1);

    const rootGeo2 = new THREE.ConeGeometry(0.55, 2.2, 24);
    const rootMesh2 = new THREE.Mesh(rootGeo2, rootMaterial);
    rootMesh2.position.set(0.55, -1.2, 0);
    rootMesh2.rotation.z = -0.15;
    rootMesh2.rotation.x = 3.14159;
    rootGroup.add(rootMesh2);

    molarGroup.add(rootGroup);

    // Internal Dentin layer
    const dentinGeo = new THREE.CylinderGeometry(1.15, 0.9, 1.4, 24, 8);
    const dentinMaterial = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.3,
      transparent: true,
      opacity: 0.85,
    });
    const dentinMesh = new THREE.Mesh(dentinGeo, dentinMaterial);
    dentinMesh.position.y = 0.55;
    dentinMesh.visible = false;
    molarGroup.add(dentinMesh);

    // Pulp canal layer
    const pulpGeo = new THREE.CylinderGeometry(0.4, 0.25, 2.2, 16);
    const pulpMaterial = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      roughness: 0.4,
      emissive: 0x9f1239,
      emissiveIntensity: 0.4,
    });
    const pulpMesh = new THREE.Mesh(pulpGeo, pulpMaterial);
    pulpMesh.position.y = -0.2;
    pulpMesh.visible = false;
    molarGroup.add(pulpMesh);

    // Store references
    sceneRef.current = {
      crownMesh,
      dentinMesh,
      pulpMesh,
      baseMesh: molarGroup,
      renderer,
    };

    // User drag interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
      setIsRotating(false);
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      prevMouseX = clientX;
      prevMouseY = clientY;

      molarGroup.rotation.y += deltaX * 0.015;
      molarGroup.rotation.x = Math.max(-0.6, Math.min(0.6, molarGroup.rotation.x + deltaY * 0.015));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onPointerDown);
    domEl.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // Animation loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (isRotating && !isDragging) {
        molarGroup.rotation.y += 0.008;
        molarGroup.position.y = Math.sin(elapsed * 1.5) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onPointerDown);
      domEl.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      cancelAnimationFrame(reqId);
      renderer.dispose();
      crownShape.dispose();
      crownMaterial.dispose();
      rootGeo1.dispose();
      rootGeo2.dispose();
      rootMaterial.dispose();
      dentinGeo.dispose();
      dentinMaterial.dispose();
      pulpGeo.dispose();
      pulpMaterial.dispose();
      if (domEl.parentNode) {
        domEl.parentNode.removeChild(domEl);
      }
    };
  }, []);

  // Handle Layer switching
  useEffect(() => {
    if (!sceneRef.current) return;
    const { crownMesh, dentinMesh, pulpMesh } = sceneRef.current;

    if (activeLayer === 'crown') {
      crownMesh.visible = true;
      (crownMesh.material as THREE.MeshPhysicalMaterial).opacity = 0.96;
      (crownMesh.material as THREE.MeshPhysicalMaterial).roughness = 0.18;
      dentinMesh.visible = false;
      pulpMesh.visible = false;
    } else if (activeLayer === 'enamel') {
      crownMesh.visible = true;
      (crownMesh.material as THREE.MeshPhysicalMaterial).opacity = 0.35;
      (crownMesh.material as THREE.MeshPhysicalMaterial).roughness = 0.05;
      dentinMesh.visible = true;
      pulpMesh.visible = true;
    } else if (activeLayer === 'internal') {
      crownMesh.visible = false;
      dentinMesh.visible = true;
      pulpMesh.visible = true;
    }
  }, [activeLayer]);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 text-white shadow-xl border border-neutral-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
        <div>
          <span className="text-xs uppercase tracking-wider text-teal-400 font-medium">Interactive 3D Technology</span>
          <h4 className="text-xl font-semibold text-white mt-0.5">CEREC® Digital Restoration Anatomy</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Drag to rotate 360° · Explore the ceramic crown, natural dentin, and canal layers
          </p>
        </div>

        {/* Layer Selector buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-800/80 rounded-lg border border-neutral-700/60">
          <button
            type="button"
            onClick={() => setActiveLayer('crown')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeLayer === 'crown'
                ? 'bg-teal-500 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Ceramic Crown
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('enamel')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeLayer === 'enamel'
                ? 'bg-teal-500 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Translucent View
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('internal')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeLayer === 'internal'
                ? 'bg-teal-500 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Pulp & Canal
          </button>
        </div>
      </div>

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-72 sm:h-80 cursor-grab active:cursor-grabbing relative flex items-center justify-center overflow-hidden rounded-xl bg-radial from-neutral-800/40 to-neutral-950/80"
        title="Click and drag to rotate the 3D model"
      >
        {/* Floating control badges */}
        <div className="absolute bottom-3 left-3 pointer-events-none flex items-center gap-2 text-[11px] text-neutral-400 bg-neutral-900/80 px-2.5 py-1 rounded-md border border-neutral-800 backdrop-blur-sm">
          <span>Mode: {activeLayer === 'crown' ? 'CEREC Porcelain Restoration' : activeLayer === 'enamel' ? 'Enamel Subsurface' : 'Internal Root & Canal'}</span>
        </div>

        <button
          type="button"
          onClick={() => setIsRotating((prev) => !prev)}
          className="absolute bottom-3 right-3 text-[11px] font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700 transition-colors"
        >
          {isRotating ? 'Pause Auto-Spin' : 'Resume Spin'}
        </button>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-300 inline-block"></span>
            Medical Grade Ceramic
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 inline-block"></span>
            Dentin Core
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
            Nerve Canal
          </span>
        </div>

        {onLearnMore && (
          <button
            type="button"
            onClick={onLearnMore}
            className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1 transition-colors"
          >
            Explore CEREC Single-Visit Process →
          </button>
        )}
      </div>
    </div>
  );
};
