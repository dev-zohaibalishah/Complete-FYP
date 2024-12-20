import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section7.css";

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const canvasRef = useRef(null);
  const frameCount = 136;
  const images = useRef([]);
  const imageSeq = { frame: 0 };

  const getFilePath = (index) => `/assets/frame/${index + 1}.webp`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Function to handle canvas scaling based on device pixel ratio
    const resizeCanvas = () => {
      const scaleFactor = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Set canvas width and height according to the scale factor
      canvas.width = width * scaleFactor;
      canvas.height = height * scaleFactor;

      // Reset styles to match normal screen size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scale the context to the correct pixel ratio
      context.scale(scaleFactor, scaleFactor);
      render();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Call it once to set the initial size

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFilePath(i);
      images.current.push(img);
    }

    images.current[0].onload = render; // Start rendering once the first image is loaded

    // GSAP animation for frame sequence
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        trigger: "#section7",
        start: "top top",
        end: "250% top",
        pin: true,
      },
      onUpdate: render, // Update canvas on scroll
    });

    function render() {
      if (images.current[imageSeq.frame]) {
        scaleImage(images.current[imageSeq.frame], context);
      }
    }

    // Function to scale the image while keeping aspect ratio
    function scaleImage(img, ctx) {
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
    }

    // Circle animation using GSAP
    gsap.to(".section7-circle", {
      scrollTrigger: {
        trigger: ".section7-circle",
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
      scale: 1.75,
    });

    gsap.to(".section7-circle-inner", {
      scrollTrigger: {
        trigger: ".section7-circle-inner",
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
      backgroundColor: "#0b48ed90",
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="section7">
      <canvas ref={canvasRef}></canvas>
      <div className="section7-circle">
        <div className="section7-circle-inner">
          <div className="section7-content">
            <h2>42</h2>
            <h4>Programs</h4>
            <div className="section7-gap"></div>
            <h2>7692</h2>
            <h4>Students</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
