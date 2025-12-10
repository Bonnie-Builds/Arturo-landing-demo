import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Float, Stars, Grid, Line, Sphere, Icosahedron, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

// --- Constants from Design Spec ---
const PRIMARY_COLOR = "#C7FF69" // Lime Green
const SECONDARY_COLOR = "#FFFFFF"
const BG_COLOR = "#050505"

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  
  useFrame(() => {
    // Subtle camera parallax based on mouse position
    camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, 8), 0.05)
    camera.lookAt(0, 0, 0)
  })
  return null
}

function ConnectionLines({ count = 20, radius = 6 }) {
  const lines = useMemo(() => {
    return new Array(count).fill(0).map(() => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * radius * 2,
        (Math.random() - 0.5) * radius * 2,
        (Math.random() - 0.5) * radius * 2
      ).normalize().multiplyScalar(radius)
      
      const end = new THREE.Vector3(0, 0, 0) // Converge to center
      return { start, end, speed: 0.2 + Math.random() * 0.5, offset: Math.random() * 100 }
    })
  }, [count, radius])

  return (
    <group>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color={PRIMARY_COLOR}
          opacity={0.05}
          transparent
          lineWidth={1}
        />
      ))}
      {lines.map((line, i) => (
        <DataPacket key={`packet-${i}`} path={[line.start, line.end]} speed={line.speed} offset={line.offset} />
      ))}
    </group>
  )
}

function DataPacket({ path, speed, offset }: { path: THREE.Vector3[], speed: number, offset: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  const [start, end] = path
  
  useFrame((state) => {
    const t = (state.clock.getElapsedTime() * speed + offset) % 1
    // Linear interpolation
    ref.current.position.lerpVectors(start, end, t)
    // Scale down as it gets closer to center (absorption effect)
    const scale = 1 - t * 0.8
    ref.current.scale.setScalar(scale * 0.06)
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={PRIMARY_COLOR} transparent opacity={0.8} />
    </mesh>
  )
}

function NeuralCore() {
  const groupRef = useRef<THREE.Group>(null!)
  const outerWireRef = useRef<THREE.Mesh>(null!)
  const innerSolidRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.1
    groupRef.current.rotation.z = t * 0.05
    
    // Counter-rotation for complexity
    outerWireRef.current.rotation.x = t * 0.2
    outerWireRef.current.rotation.y = t * 0.1
    
    innerSolidRef.current.rotation.x = -t * 0.2
    
    // Pulse effect
    const pulse = 1 + Math.sin(t * 2) * 0.05
    innerSolidRef.current.scale.setScalar(pulse)
  })

  return (
    <group ref={groupRef}>
      {/* Outer Tech Wireframe */}
      <Icosahedron args={[1.2, 1]} ref={outerWireRef}>
        <meshBasicMaterial 
          color={PRIMARY_COLOR} 
          wireframe 
          transparent 
          opacity={0.1}
        />
      </Icosahedron>

      {/* Inner Core */}
      <Icosahedron args={[0.8, 0]} ref={innerSolidRef}>
        <meshStandardMaterial 
          color="#111" 
          emissive={PRIMARY_COLOR}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
      
      {/* Occlusion / Glow halo */}
      <Sphere args={[0.6, 16, 16]}>
        <meshBasicMaterial color={PRIMARY_COLOR} transparent opacity={0.1} />
      </Sphere>
    </group>
  )
}

function FloatingAgent({ position, delay }: { position: [number, number, number], delay: number }) {
  const ref = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Bobbing motion
    ref.current.position.y = position[1] + Math.sin(t * 0.5 + delay) * 0.3
    // Slow rotation
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.z = t * 0.2
  })

  return (
    <group ref={ref} position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial 
            color="#333" 
            emissive={SECONDARY_COLOR} 
            emissiveIntensity={0.2} 
            wireframe
          />
        </mesh>
        <mesh scale={0.5}>
           <octahedronGeometry args={[0.25, 0]} />
           <meshBasicMaterial color={PRIMARY_COLOR} />
        </mesh>
      </Float>
    </group>
  )
}

function SceneContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <Rig />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={1} color={PRIMARY_COLOR} />
      <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.5} penumbra={1} color={PRIMARY_COLOR} />

      {/* Main Elements */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2} position={[0, 0, -1]}>
        <NeuralCore />
        <ConnectionLines count={25} radius={8} />
      </Float>

      {/* Floating Agents - "Satellites" */}
      <FloatingAgent position={[-4, 1.5, -2]} delay={0} />
      <FloatingAgent position={[4, -1.5, -1]} delay={2} />
      <FloatingAgent position={[-2, 3, -3]} delay={1} />
      <FloatingAgent position={[3, 2.5, -2]} delay={3} />
      <FloatingAgent position={[-3, -2.5, 0]} delay={4} />
      <FloatingAgent position={[0, -3.5, 2]} delay={5} />

      {/* Atmosphere */}
      <Sparkles 
        count={50} 
        scale={12} 
        size={3} 
        speed={0.4} 
        opacity={0.5} 
        color={PRIMARY_COLOR}
        noise={0.2}
      />
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      
      {/* Floor */}
      <Grid 
        position={[0, -4, 0]} 
        args={[30, 30]} 
        cellSize={0.5} 
        cellThickness={1} 
        cellColor="#1a1a1a" 
        sectionSize={2.5} 
        sectionThickness={1.2} 
        sectionColor={PRIMARY_COLOR} 
        fadeDistance={25} 
        fadeStrength={1.5} 
      />
      
      <fog attach="fog" args={[BG_COLOR, 5, 30]} />

      {/* Post Processing */}
      <EffectComposer enableNormalPass={false}>
        <Bloom 
          luminanceThreshold={0.15} 
          mipmapBlur 
          intensity={0.4} 
          radius={0.6}
        />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
