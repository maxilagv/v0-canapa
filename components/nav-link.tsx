"use client"

import { motion } from "framer-motion"
import { useCursorStore } from "@/lib/cursor-store"

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

export function NavLink({ href, label, isScrolled }: NavLinkProps) {
  const { setCursorState } = useCursorStore();

  return (
    <a 
      href={href} 
      className="relative group"
      onMouseEnter={() => setCursorState('hover')}
      onMouseLeave={() => setCursorState('default')}
    >
      <span className={`text-base font-medium transition-colors hover:text-primary ${
        isScrolled ? "text-foreground" : "text-white"
      }`}>
        {label}
      </span>
      <motion.div
        className="absolute bottom-[-4px] left-0 h-0.5 bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </a>
  );
}
