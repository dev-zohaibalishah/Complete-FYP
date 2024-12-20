import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./section5.css";

gsap.registerPlugin(ScrollTrigger);

const section5 = () => {
  const frameCount2 = 158; // Total number of frames (365 - 208 + 1)
  const images2 = useRef([]); // Use a ref to store images to persist across renders
  const imageSeq2 = { frame: 0 }; // Current frame (0-indexed)

  // Generate image file paths starting from frame 208
  const getFilePath2 = (index) =>
    `/assets/section2/frame_${String(index + 208).padStart(4, '0')}.jpeg`;

  useEffect(() => {
    const canvas = document.querySelector("#section5 > canvas");
    const context = canvas.getContext("2d");

    // Preload images
    for (let i = 0; i < frameCount2; i++) {
      const img = new Image();
      img.src = getFilePath2(i);
      img.onload = () => {
        images2.current[i] = img; // Store the image in the ref after it loads
        if (i === 0) render2(); // Render the first image
      };
      img.onerror = () => {
        console.error("Error loading image:", img.src); // Log an error if the image fails to load
      };
    }

    // Set up GSAP animation
    gsap.to(imageSeq2, {
      frame: frameCount2 - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 2, // Adjust scrub speed
        trigger: "#section5",
        start: "top top",
        end: "250% top",
        pin: true, // Pin the section during scrolling
      },
      onUpdate: render2, // Update the render on frame change
    });

    // Resize canvas based on device pixel ratio for high-DPI displays
    const resizeCanvas2 = () => {
      const scaleFactor = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Set canvas width and height according to the scale factor
      canvas.width = width * scaleFactor;
      canvas.height = height * scaleFactor;

      // Adjust styles to match the normal screen size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scale the context based on device pixel ratio
      context.scale(scaleFactor, scaleFactor);
      render2(); // Re-render the current frame on resize
    };

    window.addEventListener("resize", resizeCanvas2);
    resizeCanvas2(); // Initial call to set the canvas size

    return () => {
      window.removeEventListener("resize", resizeCanvas2);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up ScrollTrigger instances
    };
  }, []);

  // Render function to draw the current frame onto the canvas
  const render2 = () => {
    const canvas = document.querySelector("#section5 > canvas");
    const context = canvas.getContext("2d");

    if (images2.current[imageSeq2.frame] && images2.current[imageSeq2.frame].complete) {
      // Only render if the image is loaded
      scaleImage2(images2.current[imageSeq2.frame], context);
    } else {
      console.warn("Image not loaded:", imageSeq2.frame);
    }
  };

  // Scale image to fit the canvas while maintaining aspect ratio
  const scaleImage2 = (img, ctx) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  };

  return (
    <div id="section5">
      <canvas></canvas>
    </div>
  );
};

export default section5;
