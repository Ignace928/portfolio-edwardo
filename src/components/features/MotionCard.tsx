import React, { type ReactNode } from 'react'
import { motion } from "framer-motion"

interface smoothCardProps{
    children:ReactNode
    style: string
    staggerChildren?: number
    delay?:number
}

export function SmoothCard({children, style, staggerChildren=1, delay=1}:smoothCardProps) {
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren, delayChildren:delay }  }
    }
  return (
            <motion.section variants={container} initial="hidden" animate='visible'>
                <div className={`${style}`}>
                    {children}
                </div>
            </motion.section>
  )
}
