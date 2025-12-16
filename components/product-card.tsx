"use client"

import { useEffect, useRef } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import VanillaTilt from 'vanilla-tilt';
import { useCursorStore } from '@/lib/cursor-store';

interface Product {
  name: string;
  image: string;
  description: string;
  bgColor: string;
  alt: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursorStore();

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
        gyroscope: false,
      });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = tiltNode.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        tiltNode.style.setProperty('--mouse-x', `${x}px`);
        tiltNode.style.setProperty('--mouse-y', `${y}px`);
      };

      tiltNode.addEventListener('mousemove', handleMouseMove);

      return () => {
        tiltNode.removeEventListener('mousemove', handleMouseMove);
        // @ts-ignore
        if (tiltNode.vanillaTilt) {
          // @ts-ignore
          tiltNode.vanillaTilt.destroy();
        }
      };
    }
  }, []);

  return (
    <motion.div
      ref={tiltRef}
      key={product.name}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`group relative rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/10 overflow-hidden ${product.bgColor}`}
      style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}
      onMouseEnter={() => setCursorState('text')}
      onMouseLeave={() => setCursorState('default')}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
          style={{ transform: 'translateZ(20px)' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ transform: 'translateZ(30px)' }}
        />
      </div>
      <div className="p-6" style={{ transform: 'translateZ(50px)' }}>
        <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-foreground/70">
          {product.description}
        </p>
      </div>
       <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%)',
                transform: 'translateZ(40px)'
            }}></div>
        </div>
        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[color:var(--green-neon)] transition-all duration-300 pointer-events-none" style={{ transform: 'translateZ(60px)' }}></div>
    </motion.div>
  );
}
