import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, MapControls } from '@react-three/drei';
import Ajkkk2 from './Ajkkk2'; // Ensure this file exists and is correctly named
import { Physics } from '@react-three/cannon';
import './VirtualTour.css'

function VirtualTour() {
  // Define azimuth angles
  const minAzimuth = -Math.PI; // Example minimum azimuth angle (left)
  const maxAzimuth = Math.PI; // Example maximum azimuth angle (right)

  return (
    <>
      <div className="main-canvas">
        <Canvas>
          <ambientLight intensity={0.3} />
          <Suspense fallback={null}>
            <Physics>
              <Ajkkk2 />
            </Physics>
          </Suspense>
          <Sky distance={999999} />
          <MapControls
            minDistance={10} // Set the minimum distance (zoom limit)
            maxDistance={40} // Set the maximum distance (zoom limit)
            minPolarAngle={0} // Minimum vertical angle (to restrict looking up)
            maxPolarAngle={Math.PI / 2} // Maximum vertical angle (to restrict looking down)
            minAzimuthAngle={minAzimuth} // Minimum azimuth angle
            maxAzimuthAngle={maxAzimuth} // Maximum azimuth angle
            target={[13.618, 0, 13.346]} // Set the target point to look at
          />
        </Canvas>
      </div>
    </>
  );
}

export default VirtualTour;
