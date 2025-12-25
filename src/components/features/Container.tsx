// ===== Container.tsx =====
"use client"

import { useRef } from "react";
import { animate, AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion'
import AnimatedProfile from "./AnimatedProfile";
import { Card, CardContent, CardTitle } from "../ui/card";
import ThemeSwitcher from "./themeSwitcher";
import ModeRoundedSwitcher from "./modeChooseRound";
import { SectionTracker } from "./SectionTracker";
import { formation, projets, section as sectionList } from "@/lib/me";
import { MyStackCard } from "./MyStackCard";
import { skill } from "@/lib/me";
import { SuperMarquee } from "./CoolMarquee";
import { ProjectCard } from "./ProjectCard";
import { GradualSpacing } from "./GradualSpacing";
import { notoSans } from "@/app/page";
import { TypingNoStep } from "./Typing";
import { CalendarDaysIcon } from "lucide-react";
import { LettersPullUp } from "./LetterPullup";

export default function ContainerClient() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: scrollRef });
    const opacity = useTransform(scrollYProgress, [0, 0.1], [7, 0]);
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({behavior:"smooth"})
    }
    return (
        <div ref={scrollRef} className="h-screen overflow-y-auto mx-4 scrollbar-hide">

            <AnimatedProfile scrollContainer={scrollRef} />

            <div className="sticky top-2 z-20 px-4 m-2">
                <Card className="backdrop-blur-xl bg-card/50 p-4 flex flex-row justify-between">
                    <ThemeSwitcher />
                    <SectionTracker sections={sectionList} click={scrollToSection} />
                    <ModeRoundedSwitcher />
                </Card>
            </div>

            <motion.section 
                style={{opacity}} 
                className="border backdrop-blur-xl rounded-md m-6 items-center text-center sticky top-0"
            >
                <div className="flex justify-between">
                    <div className='w-2 h-2 rounded-full bg-primary relative mt-3 ml-2'></div>
                    <div className='w-2 h-2 rounded-full bg-primary relative mt-3 mr-2'></div>
                </div>

                <div className="flex h-auto items-center flex-col gap-10">
                    <h1><GradualSpacing text="Développeur fullstack"/></h1>
                        <TypingNoStep
                            styling={`${notoSans.className} w-1/2 text-center`}
                            startAt={2500}
                            speed={60}
                            message="Orienté en ingénierie logicielle, je conçois et implémente des solutions en appliquant les bonnes pratiques de conception. De l&apos;annalyse des besoins à la mise en production"
                        />
                </div>

                <div className="flex justify-between">
                    <div className='w-2 h-2 rounded-full bg-primary relative mb-4 ml-2'></div>
                    <div className='w-2 h-2 rounded-full bg-primary relative mb-4 mr-2'></div>
                </div>
            </motion.section>
            

            

            {/* Sections avec hauteur pour tester le scroll */}
                

            <Card
                className="min-h-screen mx-auto bg-card/0 border-0 flex items-center justify-center flex-col"
                id="parcours"
            >
                <CardTitle className="sticky top-22 bg-card py-10 w-full z-3">
                    <LettersPullUp text="Formations & diplôme"/>
                </CardTitle>
                
                {
                    formation.map((f) => {
                        return(
                            <AnimatePresence key={f.date}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{opacity:1, y:0}}
                                            transition={{
                                                duration: 0.8,
                                                delay:0.5
                                            }}
                                        >

                                            <Card className="bg-card/50 mx-6 border border-b-chart-1 border-l-chart-2 border-t-chart-3 border-r-chart-4">
                                                        <CardTitle className="mx-6 text-center flex gap-4">
                                                            <CalendarDaysIcon/>
                                                            <h2> {f.date} </h2>
                                                        </CardTitle>
                                                        <CardContent>
                                                            {f.details}
                                                        </CardContent>
                                            </Card>
                                        </motion.div>                            
                            </AnimatePresence>
                        )
                    })
                }
                
            </Card>

            <SuperMarquee>
                {
                    skill.map((myStack) => {
                        return <MyStackCard key={myStack.tech} stack={myStack}/>
                    })
                }
            </SuperMarquee>
            <section
                className="min-h-screen bg-linear-to-b from-blue-500 to-indigo-500 flex flex-col items-center justify-center"
                id="experience"
            >
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {projets.map((project, index) => (
                        <ProjectCard
                        key={index}
                        title={project.title}
                        detail={project.detail}
                        images={project.images}
                        />
                    ))}
                </div>
            </section>
            <section className=" flex m-4 p-4 bg overflow-hidden">
            </section>

            <section
                className="min-h-screen bg-linear-to-b from-green-500 to-emerald-500 flex items-center justify-center"
                id="contact"
            >
                <h2 className="text-4xl font-bold text-white">Contact</h2>
                <MyStackCard stack={
                    
                {
                    tech: "Python",
                    image:"/python.jpg",
                    niveau:"Intermédaire",
                    description: "Langage polyvalent (interpreté) utilisé pour le backend, l’automatisation et le traitement de données, apprécié pour sa lisibilité et son écosystème riche."
                }
                }/>
            </section>
        </div>
    );
}