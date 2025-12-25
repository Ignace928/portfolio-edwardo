"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { section as sectionList } from "@/lib/me";


export const SectionSpy = () => {
    const [activeSection, setActiveSection] = useState<string>('')

    useEffect(()=> {
        const observerOption: IntersectionObserverInit = {
            root:null,
            rootMargin:"-25% 0px -65% 0px", //  ↟  ↣  ↡  ↢
            threshold: 0,
        }

        const observerCall = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entri => {
                if(entri.isIntersecting){
                    setActiveSection(entri.target.id)
                }
            });
        }

        const observer = new IntersectionObserver(observerCall, observerOption)

        sectionList.forEach(s => {
            const element = document.getElementById(s.id);
            if(element) observer.observe(element);
        });

        observer.disconnect()

    },[])

    const scrollToSection = (id:string) => {
        const element = document.getElementById(id)
        if(element){
            const offset=80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }
    return(
        <nav className="hidden md:flex flex-col gap-8">
        {sectionList.map((s) => {
            const isActive = activeSection === s.id;

            return (
            <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="group relative flex items-center justify-end gap-4"
            >
                {/* Tooltip text - Apparaît au hover ou si actif */}
                <span
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-500 
                ${isActive 
                    ? "text-primary translate-x-0 opacity-100" 
                    : "text-gray-400 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
                >
                {s.title}
                </span>

                {/* Indicateur visuel */}
                <div className="relative flex items-center justify-center">
                {/* Cercle d'arrière-plan animé (LayoutId pour glissement fluide) */}
                <AnimatePresence>
                    {isActive && (
                    <motion.div
                        layoutId="active-pill"
                        className="absolute -inset-2 bg-primary/10 border border-primary/20 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                    )}
                </AnimatePresence>

                {/* Le point central */}
                <div
                    className={`h-2.5 w-2.5 rounded-full border-2 transition-all duration-500
                    ${isActive 
                    ? "bg-primary border-primary scale-125 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" 
                    : "bg-transparent border-gray-500 group-hover:border-primary group-hover:scale-110"
                    }`}
                />
                </div>
            </button>
            );
        })}
        </nav>
    )
}
