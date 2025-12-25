"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "../ui/card";

type AnimatedProfileProps = {
  scrollContainer: React.RefObject<HTMLDivElement | null>;
};

export default function AnimatedProfile({scrollContainer}: AnimatedProfileProps) {
    const { scrollYProgress } = useScroll({ container: scrollContainer });
    
    // Disparition et réduction de taille au scroll
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    
    // Réduction de la hauteur de la carte
    const top = useTransform(scrollYProgress, [0, 0.3], [0, -300]);

    return (
        <motion.div
            style={{ opacity }}
            className="sticky top-0 z-10"
        >
                <Card className="flex flex-col md:flex-row items-center justify-start gap-4 p-6 md:p-8 rounded-[0_0_80px_2px] shadow-[0_4px_5px_var(--color-primary)] overflow-hidden h-full">
                    {/* Image de profil à gauche */}
            <motion.div style={{ scale }}>
                    <div 
                        className="rounded-full h-32 w-32 xs:h-30 xs:w-30 md:h-45 md:w-45 bg-cover bg-center border-2 border-t-0 border-primary shrink-0"
                        style={{ backgroundImage: "url(https://vqtoojvjnpjulqlrtlgd.supabase.co/storage/v1/object/public/me/profile/ssdfh65984324sqsdfizdopi9556.jpg)" }}
                    />
            </motion.div>
                    
                    {/* Nom au centre */}

                    <motion.h1 style={{y:top}} className="font-bold text-lg md:text-2xl leading-tight text-center flex-1">
                        RAHARIMALALA Santatry Ny Aina Edwardo Ignace
                    </motion.h1>
                </Card>
        </motion.div>
    );
}