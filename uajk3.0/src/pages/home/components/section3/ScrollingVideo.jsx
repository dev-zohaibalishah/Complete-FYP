import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollingVideo.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollingVideo = () => {
  const frameCount = 556; // Total number of frames
  const images = useRef([]); // Use a ref to store images to persist across renders
  const imageSeq = { frame: 0 }; // Current frame (0-indexed)

  // Generate image file paths
  const getFilePath = (index) => 
    `/assets/section1/frame_${String(index + 1).padStart(4, '0')}.jpeg`;

  useEffect(() => {
    const canvas = document.querySelector("#section3 > canvas");
    const context = canvas.getContext("2d");

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFilePath(i);
      img.onload = () => {
        images.current[i] = img; // Store the image in the ref after it loads
        if (i === 0) render(); // Render the first image once it loads
      };
      img.onerror = () => {
        console.error("Error loading image:", img.src); // Log an error if the image fails to load
      };
    }

    // Resize canvas based on device pixel ratio for high-DPI displays
    const resizeCanvas = () => {
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
      render(); // Re-render the current frame on resize
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial call to set the canvas size

    // GSAP animation for scrolling frame sequence
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 2, // Adjust scrub speed
        trigger: "#section3",
        start: "top top",
        end: "700% top",
        pin: true, // Pin the section during scrolling
      },
      onUpdate: render, // Update the render on frame change
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up ScrollTrigger instances
    };
  }, []);

  // Render function to draw the current frame onto the canvas
  const render = () => {
    const canvas = document.querySelector("#section3 > canvas");
    const context = canvas.getContext("2d");

    if (images.current[imageSeq.frame] && images.current[imageSeq.frame].complete) {
      // Only render if the image is loaded
      scaleImage(images.current[imageSeq.frame], context);
    } else {
      console.warn("Image not loaded:", imageSeq.frame);
    }
  };

  // Scale image to fit the canvas while maintaining aspect ratio
  const scaleImage = (img, ctx) => {
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
    <div id="section3">
      <canvas></canvas>
    </div>
  );
};

export default ScrollingVideo;
