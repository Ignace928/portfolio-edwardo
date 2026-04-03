"use client"

import React from "react"
import { motion, useAnimationControls } from "framer-motion"
type props={
    children: React.ReactNode
}
export const SuperMarquee=({children}:props) => {
    const control = useAnimationControls()
    
    return(
        <div className="container overflow-hidden mx-auto">
            <div className="flex">
                <motion.div className="flex shrink-0"
                    initial={{ x:0 }}
                    animate={{
                            x: "-100%",
                            transition: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }
                        }}
                    
                >
                    { children }
                </motion.div>
                <motion.div className="flex shrink-0"
                    initial={{ x:0 }}
                    animate={{
                            x: "-100%",
                            transition: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }
                        }}
                >
                    { children }
                </motion.div>
            </div>
            
        </div>
    )
}