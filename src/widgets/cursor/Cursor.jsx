import React, { useContext, useEffect, useRef, useState } from 'react';
import "../../assets/style/cursor.css";
import { motion } from 'framer-motion';
import { MouseContext } from '@/context/mouseContext';
// import { MouseContext } from '@/context/mouseContext';

const CustomCursor = () => {
  const mouse = useRef({ x: 0, y: 0 }); // Track current mouse position
  const previousMouse = useRef({ x: 0, y: 0 }); // Store the previous mouse position
  const circle = useRef({ x: 0, y: 0 }); // Track the circle position
  const currentScale = useRef(0); // Track current scale value
  const currentAngle = useRef(0); // Track current angle value
  const cursorRef = useRef(null); // Ref to directly control the motion div

  let { cursorVariant } = useContext(MouseContext)
  

  const tick = () => {
    const speed = 0.10;

    // MOVE
    circle.current.x += (mouse.current.x - circle.current.x) * speed;
    circle.current.y += (mouse.current.y - circle.current.y) * speed;

    // SQUEEZE
    const deltaMouseX = mouse.current.x - previousMouse.current.x;
    const deltaMouseY = mouse.current.y - previousMouse.current.y;
    previousMouse.current.x = mouse.current.x;
    previousMouse.current.y = mouse.current.y;
    const mouseVelocity = Math.min(
      Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
      150
    );
    const scaleValue = (mouseVelocity / 150) * 0.5;
    currentScale.current += (scaleValue - currentScale.current) * speed;

    // ROTATE
    const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
    if (mouseVelocity > 20) {
      currentAngle.current = angle;
    }

    // Directly update motion.div transform via ref
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${circle.current.x}px, ${circle.current.y}px) 
                                           rotate(${currentAngle.current}deg) 
                                           scaleX(${1 + currentScale.current}) 
                                           scaleY(${1 - currentScale.current})`;
    }

    // Request the next frame to continue the animation
    window.requestAnimationFrame(tick);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Start the animation loop
    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  let variants = {
    default: {
      x: mouse.x - 16,
      y: mouse.y - 16,
    },
    text: {
      x: mouse.x ,
      y: mouse.y,
      height: 100,
      width: 100,
      backgroundColor:'white',
      mixBlendMode:"difference", 
    },
    default2: {
      x: mouse.x ,
      y: mouse.y,
      backgroundColor:'black',
    },
    text2: {
      x: mouse.x ,
      y: mouse.y,
      height: 100,
      width: 100,
      backgroundColor:'black',
      mixBlendMode:"difference", 
    },
  }
  
  // const textEnter = () => setCursorVariant("text")
  // const textLeave = () => setCursorVariant("default")

  return (
      <motion.div
        ref={cursorRef} 
        variants={variants}
        animate={cursorVariant}
        className="circle"

      />

  );
};

export default CustomCursor;
