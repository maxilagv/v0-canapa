"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMouse } from '@uidotdev/usehooks';
import { useCursorStore } from '@/lib/cursor-store';

export function CustomCursor() {
  const [mouse, ref] = useMouse();
  const { cursorState } = useCursorStore();

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
    },
    hover: {
      width: 50,
      height: 50,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
    },
    text: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        mixBlendMode: 'normal',
    }
  };
  
  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 z-50 rounded-full pointer-events-none flex items-center justify-center"
      animate={cursorState}
      variants={variants}
      style={{
        translateX: mouse.x - (cursorState === 'default' ? 10 : cursorState === 'hover' ? 25 : 40),
        translateY: mouse.y - (cursorState === 'default' ? 10 : cursorState === 'hover' ? 25 : 40),
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
        {cursorState === 'text' && <span className="text-black font-bold text-sm">Ver más</span>}
    </motion.div>
  );
}
