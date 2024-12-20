import React, { useState } from 'react';
import { useGLTF, Html,PerspectiveCamera } from '@react-three/drei';

const BotonyDepartment = ({ nodes, materials, position }) => {
  const [showCard, setShowCard] = useState(false);
  const toggleCard = () => setShowCard(!showCard);

  return (
    <group name="Botany" position={position} rotation={[1.56928, 0.01739, 0.08728]} scale={[0.12922, 0.14028, 0.12479]}>
      {showCard && (
       <Html position={[0, 1.75, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
       <div style={{ pointerEvents: 'auto' }}>
         <button onClick={toggleCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
         <h3 style={{ margin: '10px 0 5px 0' }}>Botany Department</h3> {/* Added margin for space */}
         <p style={{ margin: '5px 0' }}>Explore the world of plants and environmental sciences.</p>
         <button onClick={() => window.open('http://localhost:5173/botony', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Department</button>
       </div>
     </Html>
     
      )}
      {['Text014', 'Text014_1', 'Text014_2', 'Text014_3', 'Text014_4', 'Text014_5', 'Text014_6', 'Text014_7'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={toggleCard} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const Masjid = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);

  const handleCloseCard = () => setShowCard(false); // Close department card

  return (
    <group name="Masjid" position={[-2.22262, 1.51055, 8.08687]} rotation={[0, 0.34875, 0]} scale={[-0.55819, -0.56738, -0.54362]}>
      {showCard && (
        <Html position={[0, 1.75, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
  <div style={{ pointerEvents: 'auto' }}>
    <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
    <h3 style={{ margin: '10px 0 5px 0' }}>Masjid</h3>
    <p style={{ margin: '5px 0' }}>A place of worship and community.</p>
    <button onClick={handleCloseCard} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Masjid</button>
  </div>
</Html>
      )}
      {['Sphere', 'Sphere_1', 'Sphere_2', 'Sphere_3', 'Sphere_4', 'Sphere_5'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const EconomicDepartment = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="economic" position={[11.3, 0.3, 1.25]} rotation={[0, -0.03, 0]} scale={[-3.64, -2.83, -3.74]}>
      {showCard && (
        <Html position={[0, 0, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
  <div style={{ pointerEvents: 'auto' }}>
    <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
    <h3 style={{ margin: '10px 0 5px 0' }}>Economic Department</h3>
    <p style={{ margin: '5px 0' }}>Explore the world of economics and business.</p>
    <button onClick={() => window.open('http://localhost:5173/economics', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Economic Department</button>
  </div>
</Html>
    
      )}
      {['Plane001', 'Plane001_1', 'Plane001_2', 'Plane001_3', 'Plane001_4'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const EnglishDepartment = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);
  return (
    <group name="english" position={[12.01, 0.81, -5.53]} rotation={[0, 0, -Math.PI]} scale={[3.46, 3.00, 3.42]}>
      {showCard && (
       <Html position={[0, 0, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
       <div style={{ pointerEvents: 'auto' }}>
         <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
         <h3 style={{ margin: '10px 0 5px 0' }}>English Department</h3>
         <p style={{ margin: '5px 0' }}>Explore literature and language studies.</p>
         <button onClick={() => window.open('http://localhost:5173/english', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit English Department</button>
       </div>
     </Html>     
      )}
      {['Plane004', 'Plane004_1', 'Plane004_2', 'Plane004_3', 'Plane004_4'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};

const Library = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="library" position={[7.21, 1.20, 6.50]} rotation={[0, Math.PI / 2, 0]} scale={[4.40, 2.42, 2.10]}>
      {showCard && (
      <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
      <div style={{ pointerEvents: 'auto' }}>
        <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
        <h3 style={{ margin: '10px 0 5px 0' }}>Library</h3>
        <p style={{ margin: '5px 0' }}>A treasure trove of knowledge.</p>
        <button onClick={handleCloseCard} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Library</button>
      </div>
    </Html>
    
      )}
      {['Plane003', 'Plane003_1', 'Plane003_2', 'Plane003_3', 'Plane003_4', 'Plane003_5', 'Plane003_6'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const CSDepartment = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="CS" position={[-4.7, 1.2, -11.3]} rotation={[0, -Math.PI / 2, 0]} scale={[3, 2.7, 2.6]}>
      {showCard && (
       <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
       <div style={{ pointerEvents: 'auto' }}>
         <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
         <h3 style={{ margin: '10px 0 5px 0' }}>Computer Science</h3><p style={{ margin: '5px 0' }}>Empowering the future with innovation.</p>
         <button onClick={() => window.open('http://localhost:5173/cs', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Computer Science</button>
       </div>
     </Html>
     
      )}
      {['Plane002', 'Plane002_1', 'Plane002_2', 'Plane002_3', 'Plane002_4', 'Plane002_5', 'Plane002_6', 'Plane002_7'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};

const Canteen = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="canteen" position={[15.9, 0.6, -3.8]} rotation={[0, Math.PI / 2, 0]} scale={[3.6, 6.4, 2]}>
      {showCard && (
        <Html position={[0, 0.5, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0 5px 0' }}>Canteen</h3><p style={{ margin: '5px 0' }}>A place to relax and enjoy refreshments.</p>
        </div>
      </Html>
      
      )}
      {['Plane', 'Plane_1', 'Plane_2', 'Plane_3'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};

const Geology = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="geology" position={[-16.7, 0.8, 2.7]} rotation={[0, Math.PI / 2, 0]} scale={[-4.8, -4.0, -5.5]}>
      {showCard && (
        <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0 5px 0' }}>Geology</h3>
          <p style={{ margin: '5px 0' }}>Explore the science of Earth's structure.</p>
          <button onClick={() => window.open('http://localhost:5173/geology', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Geology</button>
        </div>
      </Html>
      
      )}
      {['Cube072', 'Cube072_1', 'Cube072_2', 'Cube072_3', 'Cube072_4', 'Cube072_5', 'Cube072_6', 'Cube072_7'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const MathDepartment = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false); // Close card

  return (
    <group name="math" position={[-8.56288, 0.7907, 9.85811]} rotation={[0, 0, Math.PI]} scale={[-5.46975, -5.53748, -6.74061]}>
      {showCard && (
        <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0 5px 0' }}>Mathematics Department</h3>
          <p style={{ margin: '5px 0' }}>A place to explore the beauty of numbers and logic.</p>
          <button onClick={() => window.open('http://localhost:5173/maths', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer' }}>Learn More</button>
        </div>
      </Html>
      
      )}

      {['Cube066', 'Cube066_1', 'Cube066_2', 'Cube066_3', 'Cube066_4', 'Cube066_5', 'Cube066_6'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const Shed4 = ({ nodes, materials }) => {
  return (
    <group
      name="shed_4"
      position={[-15.31994, 0.20421, -4.4483]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.14432}>
      <mesh
        name="Cube013"
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube013_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube013_1.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube013_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube013_2.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};
const Cafe = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="cafe" position={[-3.18717, 1.24545, 11.15981]} rotation={[0, Math.PI / 2, 0]} scale={[0.19728, 0.37363, 0.32602]}>
      {showCard && (
        <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0 5px 0' }}>Café</h3>
          <p style={{ margin: '5px 0' }}>A place to relax and enjoy your favorite drinks.</p>
          <button onClick={(handleCloseCard)} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Café</button>
        </div>
      </Html>
      
      )}
      {['Cube012', 'Cube012_1', 'Cube012_2', 'Cube012_3', 'Cube012_4', 'Cube012_5'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const Auditorium = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="auditorium" position={[2.01473, 0.7049, 9.30206]} rotation={[0, -Math.PI / 2, 0]} scale={[1.13223, 0.07784, 0.07898]}>
      {showCard && (
        <Html
        position={[0, 1, 0]}
        style={{
          color: 'white',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          padding: '15px',
          textAlign: 'center',
          minWidth: '200px',
          maxWidth: '300px',
          position: 'absolute',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0 5px 0' }}>Auditorium</h3>
          <p style={{ margin: '5px 0' }}>A venue for lectures and events.</p>
          <button onClick={() => window.open('#', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Auditorium</button>
        </div>
      </Html>
      
      )}
      {['Cube011', 'Cube011_1', 'Cube011_2', 'Cube011_3', 'Cube011_4', 'Cube011_5', 'Cube011_6'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};
const Admin = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);

  return (
    <group name="admin" position={[14.23641, 1.06026, 7.07108]} rotation={[Math.PI, -0.03123, Math.PI]} scale={[0.09794, 0.12876, 0.1363]}>
      {showCard && (
       <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
  <div style={{ pointerEvents: 'auto' }}>
    <button onClick={handleCloseCard} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
    <h3 style={{ margin: '10px 0 5px 0' }}>Administration Building</h3>
    <p style={{ margin: '5px 0' }}>The hub for university administration and support.</p>
  </div>
</Html>

      )}
      {['Cube010', 'Cube010_1', 'Cube010_2', 'Cube010_3'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};

const Shed1 = ({ nodes, materials }) => {
  return (
    <group
      name="shed1"
      position={[-9.63068, 0.19997, 4.16086]}
      rotation={[0, Math.PI / 2, 0]}
      scale={0.13628}
    >
      <mesh
        name="Cube009"
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube009_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube009_1.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube009_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube009_2.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};

const Shed3 = ({ nodes, materials }) => {
  return (
    <group
      name="shed_3"
      position={[-11.76287, 0.39187, 1.47464]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={0.11438}
    >
      <mesh
        name="Cube008"
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube008_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube008_1.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube008_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube008_2.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};

const Shed2 = ({ nodes, materials }) => {
  return (
    <group
      name="shed_2"
      position={[-9.39376, 0.44347, 1.24]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.11725}
    >
      <mesh
        name="Cube007"
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube007_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube007_1.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube007_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube007_2.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};

const Shed6 = ({ nodes, materials }) => {
  return (
    <group
      name="shed_6"
      position={[-7.02714, 0.26638, -5.2304]}
      rotation={[0, Math.PI / 2, 0]}
      scale={0.1559}
    >
      <mesh
        name="Cube006"
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube006_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube006_1.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube006_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube006_2.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};
const Chemistry = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <group name="Chemistry" position={[0.92, 0.83, -9.6]} rotation={[0, Math.PI / 2, 0]} scale={[0.03, 0.03, 0.03]}>
      {showCard && (
    <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
    <div style={{ pointerEvents: 'auto' }}>
      <button onClick={() => setShowCard(false)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
      <h3 style={{ margin: '10px 0 5px 0' }}>Chemistry Department</h3>
      <p style={{ margin: '5px 0' }}>Understanding matter and its interactions.</p>
      <button onClick={() => window.open('http://localhost:5173/chemistry', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Chemistry Department</button>
    </div>
  </Html>
  
      )}
      {['Cube002', 'Cube002_1', 'Cube002_2', 'Cube002_3', 'Cube002_4', 'Cube002_5', 'Cube002_6', 'Cube002_7'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} />
      ))}
    </group>
  );
};

const Physics = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <group name="Physics" position={[0.63, 0.80, -1.86]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.03, -0.03, -0.03]}>
      {showCard && (
        <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <button onClick={() => setShowCard(false)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0 5px 0' }}>Physics Department</h3>
          <p style={{ margin: '5px 0' }}>Exploring the fundamental principles of nature.</p>
          <button onClick={() => window.open('http://localhost:5173/physics', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', border: 'none', borderRadius: '5px', color: 'white', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Physics Department</button>
        </div>
      </Html>
      
      )}
      {['Cube004', 'Cube004_1', 'Cube004_2', 'Cube004_3', 'Cube004_4', 'Cube004_5', 'Cube004_6', 'Cube004_7'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name].geometry} material={materials[nodes[name].material.name]} onClick={() => setShowCard(true)} />
      ))}
    </group>
  );
};

const Statistics = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <group name="Statistics" position={[-14.95, 0.81, 9.38]} rotation={[-Math.PI, 0, -Math.PI]} scale={[6.2, 5.8, 6.2]}>
      {showCard && (
        <Html position={[0, 1, 0]} style={{ color: 'white', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', textAlign: 'center', minWidth: '200px', maxWidth: '300px', position: 'absolute' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <button onClick={() => setShowCard(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', color: '#ff4757', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0 5px 0' }}>Statistics Department</h3>
          <p style={{ margin: '5px 0' }}>Analyzing data to provide insights and decision-making support.</p>
          <button onClick={() => window.open('http://localhost:5173/statistics', '_blank')} style={{ marginTop: '10px', padding: '10px 20px', background: 'linear-gradient(90deg, #56ccf2, #2f80ed)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Visit Department</button>
        </div>
      </Html>
      
      )}
      {['Cube001', 'Cube001_1', 'Cube001_2', 'Cube001_3', 'Cube001_4', 'Cube001_5', 'Cube001_6'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name]?.geometry} material={materials[nodes[name]?.material.name]} onClick={() => setShowCard(true)} />
      ))}
    </group>
  );
};


const Shed5 = ({ nodes, materials }) => {
  return (
    <group
      name="shed_5"
      position={[-3.49453, 0.20178, -5.06588]}
      rotation={[0, Math.PI / 2, 0]}
      scale={0.15684}
    >
      <mesh
        name="Cube005"
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube005_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube005_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};

const Cube003 = ({ nodes, materials }) => {
  return (
    <group
      name="Cube003"
      position={[14.70976, 0.21095, -5.53792]}
      rotation={[0, -0.00791, 0]}
      scale={[0.12879, 0.24721, 0.10819]}
    >
      <mesh
        name="Cube003_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube003_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_2.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube003_3"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_3.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};

const Shed7 = ({ nodes, materials }) => {
  return (
    <group
      name="shed_7"
      position={[15.96083, 0.34484, 1.59398]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[0.12879, 0.24721, 0.19729]}
    >
      <mesh
        name="Cube014"
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['building color']}
      />
      <mesh
        name="Cube014_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube014_1.geometry}
        material={materials['Stylised wood 2']}
      />
      <mesh
        name="Cube014_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube014_2.geometry}
        material={materials['grill.007']}
      />
    </group>
  );
};
const DirectionalLight = () => {
  return (
    <directionalLight
      name="Sun"
      intensity={6.72964}
      decay={2}
      position={[-3.72762, 13.9082, -0.27391]}
      rotation={[-1.38312, -0.73346, 0.07227]}
    />
  );
};
const Zoology = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <group
      name="Zoology"
      position={[-4.69287, 0.97784, 1.04429]}
      rotation={[Math.PI / 2, 0, Math.PI]}
      scale={0.1694}
    >
      {showCard && (
        <Html
          position={[0, 1, 0]}
          style={{
            color: 'white',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '15px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            minWidth: '200px',
            maxWidth: '300px',
            position: 'absolute',
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <button
              onClick={() => setShowCard(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                color: '#ff4757',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
            <h3 style={{ margin: '10px 0', fontSize: '1.5em', fontWeight: 'bold' }}>
              Zoology Department
            </h3>
            <p style={{ margin: '10px 0', fontSize: '1em' }}>
              Studying animal biology and behavior.
            </p>
            <button
              onClick={() => window.open('http://localhost:5173/zoology', '_blank')}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                background: 'linear-gradient(90deg, #56ccf2, #2f80ed)',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1em',
                transition: 'background-color 0.3s',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#0056b3')}
              onMouseLeave={(e) =>
                (e.target.style.background = 'linear-gradient(90deg, #56ccf2, #2f80ed)')
              }
            >
              Visit Department
            </button>
          </div>
        </Html>
      )}
      {[
        'Text001',
        'Text001_1',
        'Text001_2',
        'Text001_3',
        'Text001_4',
        'Text001_5',
        'Text001_6',
        'Text001_7',
      ].map((name, index) => (
        <mesh
          key={index}
          name={name}
          castShadow
          receiveShadow
          geometry={nodes[name]?.geometry}
          material={materials[nodes[name]?.material?.name]}
          onClick={() => setShowCard(true)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </group>
  );
};
const Camera = () => {
  return (
    <PerspectiveCamera
      name="Camera"
      makeDefault={true}
      far={1000}
      near={0.1}
      fov={50}
      position={[13.61791, 13.34631, -41.30987]}
      rotation={[-2.87048, 0.19574, 3.08759]}
    />
  );
};
const SecurityOffice = ({ nodes, materials }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <group name="SecurityOffice" position={[9.35667, 0.23021, -9.29588]} scale={[0.30794, 0.30794, 0.61407]}>
      {showCard && (
        <Html position={[0, 1, 0]} style={{ color: '#f8f9fa', background: 'rgba(0, 0, 0, 0.8)', padding: '15px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <button onClick={() => setShowCard(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', color: '#ff4757', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
          <h3 style={{ margin: '10px 0', fontSize: '1.5em', fontWeight: 'bold' }}>Security Office</h3>
          <p style={{ margin: '10px 0', fontSize: '1em' }}>Ensuring safety and security on campus.</p>
        </Html>
      )}
      {['Cube', 'Cube_1'].map((name, index) => (
        <mesh key={index} name={name} castShadow receiveShadow geometry={nodes[name]?.geometry} material={materials[nodes[name]?.material.name]} onClick={() => setShowCard(true)} style={{ cursor: 'pointer' }} />
      ))}
    </group>
  );
};

const Node0004 = ({ nodes, materials }) => {
  return (
    <group
      name="Node_0004"
      position={[-5.89477, 0, 8.0355]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.55031}
    >
      <group name="Assembly-2004" scale={0.0254}>
        <mesh
          name="Mesh_1001"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1001.geometry}
          material={materials.Material}
        />
        <mesh
          name="Mesh_1001_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1001_1.geometry}
          material={materials['Material.014']}
        />
        <mesh
          name="Mesh_1001_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1001_2.geometry}
          material={materials['Stylised wood 2']}
        />
      </group>
    </group>
  );
};

const Node0007 = ({ nodes, materials }) => {
  return (
    <group
      name="Node_0007"
      position={[-5.73229, -4.16588, 7.72084]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.53005}
    >
      <group name="Assembly-2006" scale={0.0254}>
        <mesh
          name="3DGeom-2002"
          castShadow
          receiveShadow
          geometry={nodes['3DGeom-2002'].geometry}
          material={materials['Teddy_BookCover.001']}
          position={[63.32037, 146.27071, 4.00452]}
        />
      </group>
    </group>
  );
};

const CylinderMesh = ({ nodes }) => {
  return (
    <mesh
      name="Cylinder"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder.geometry}
      material={nodes.Cylinder.material}
      position={[8.53177, -0.04898, -12.12674]}
      scale={0.00611}
    />
  );
};

const Node0 = ({ nodes, materials }) => {
  return (
    <group name="Node_0" rotation={[-Math.PI / 2, 0, 0]}>
      <group name="Assembly-2" scale={0.0254}>
        <mesh
          name="3DGeom-1"
          castShadow
          receiveShadow
          geometry={nodes['3DGeom-1'].geometry}
          material={materials.road}
          position={[-10.792, 0.27448, -2.97103]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1.52797, -1.52797, -0.11952]}
        />
      </group>
    </group>
  );
};
export default function Model(props) {
  const { nodes, materials } = useGLTF('/AJKKK2.glb');

  return (
    <group {...props} dispose={null}>
      <BotonyDepartment nodes={nodes} materials={materials} position={[-11.67923, 0.72277, -7.0394]} />
      <Masjid nodes={nodes} materials={materials} />
      <EconomicDepartment nodes={nodes} materials={materials} />
      <EnglishDepartment nodes={nodes} materials={materials} />
      <Library nodes={nodes} materials={materials} />
      <CSDepartment nodes={nodes} materials={materials} />
      <Canteen nodes={nodes} materials={materials} />
      <Geology nodes={nodes} materials={materials} />
      <MathDepartment nodes={nodes} materials={materials} />
      <Shed4 nodes={nodes} materials={materials} />
      <Cafe nodes={nodes} materials={materials} />
      <Auditorium nodes={nodes} materials={materials} />
      <Admin nodes={nodes} materials={materials} />
      <Shed1 nodes={nodes} materials={materials} />
      <Shed3 nodes={nodes} materials={materials} />
      <Shed2 nodes={nodes} materials={materials} />
      <Shed6 nodes={nodes} materials={materials} />
      <Physics nodes={nodes} materials={materials} />
      <Chemistry nodes={nodes} materials={materials} />
      <Statistics nodes={nodes} materials={materials} />
      <Shed5 nodes={nodes} materials={materials} />
      <Cube003 nodes={nodes} materials={materials} />
      <Shed7 nodes={nodes} materials={materials} />
      <directionalLight/>
      <Zoology nodes={nodes} materials={materials} /> 
      <Camera /> 
      <SecurityOffice  nodes={nodes} materials={materials} /> 
      <Node0004 nodes={nodes} materials={materials} />
      <Node0007 nodes={nodes} materials={materials} />
      <CylinderMesh nodes={nodes} />
      <Node0 nodes={nodes} materials={materials} />
    </group>
  );
}
