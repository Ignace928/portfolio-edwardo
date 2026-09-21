// ===== Container.tsx =====
"use client"

import { useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
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
import { writer } from "@/app/page";
import { CalendarDaysIcon } from "lucide-react";
import { LettersPullUp } from "./LetterPullup";
import { ContactMe } from "./ContactMe";
import { SendButton } from "./SendMotion";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { TypingNoStep, TypingStep } from "./Typing";

export default function ContainerClient() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: scrollRef });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({behavior:"smooth"})
    }
    return (
        <div ref={scrollRef} className="h-screen overflow-y-auto mx-4 scrollbar-hide">

            <AnimatedProfile scrollContainer={scrollRef} />
            <motion.section 
                style={{opacity}} 
                className="border backdrop-blur-xl rounded-md m-2 sm:m-6 items-center text-center z-10"
            >
                <div className="flex justify-between">
                    <div className='w-2 h-2 rounded-full bg-primary relative mt-3 ml-2'></div>
                    <div className='w-2 h-2 rounded-full bg-primary relative mt-3 mr-2'></div>
                </div>

                <div className="flex h-auto px-6 items-center flex-col gap-10">
                    <h1><GradualSpacing text="Développeur fullstack"/></h1>
                    <TypingNoStep
                        startAt={100}
                        speed={50}
                        styling=""
                        message="Orienté en ingénierie logicielle, je conçois et implémente des solutions en appliquant les bonnes pratiques de conception. De l&apos;annalyse des besoins à la mise en production"
                    />
                                        
                </div>

                <div className="flex justify-between">
                    <div className='w-2 h-2 rounded-full bg-primary relative mb-4 ml-2'></div>
                    <div className='w-2 h-2 rounded-full bg-primary relative mb-4 mr-2'></div>
                </div>
            </motion.section>

            <div className="sticky top-2 z-20 px-0 my-2">
                <Card className="backdrop-blur-xl bg-card/50 p-4 flex flex-row justify-between">
                    <ThemeSwitcher />
                    <SectionTracker sections={sectionList} click={scrollToSection} />
                    <ModeRoundedSwitcher />
                </Card>
            </div>

            
            

            

            {/* Sections avec hauteur pour tester le scroll */}
                

            <Card
                className="min-h-screen mx-auto bg-card/0 border-0 flex items-center justify-center flex-col"
                id="parcours"
            >
                <CardTitle className="sticky top-21 bg-card py-2 px-6 w-full h-auto z-3">
                    <LettersPullUp text="Formations & diplômes"/>
                </CardTitle>
                
                {
                    formation.map((f) => {
                        return(
                            <AnimatePresence key={f.date}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{opacity:1, y:0}}
                                            transition={{
                                                duration: 0.2,
                                                delay:0.1
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

            <section
                className="min-h-screen flex flex-col gap-6 items-center justify-center pt-10"
                id="experience"
            >
                <CardTitle className="sticky top-21 bg-card py-2 w-full h-auto z-3">
                    <LettersPullUp text="Expériences "/>
                </CardTitle>
                
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                    {projets.map((project, index) => (
                        <ProjectCard
                        key={index}
                        title={project.title}
                        detail={project.detail}
                        images={project.images}
                        />
                    ))}
                    <Card className="p-1 hover:bg-primary transition-colors duration-100">

                        <ProjectCard
                            title="My ref"
                            detail="Simple projet personnelle (En cours ...🚩)"
                            images={["/ref_inscription.png", "/ref-playground.png", "/ref-todo.png","/ref_map.png"]}
                        />
                        <Button asChild>
                            <a
                                href="https://my-ref.vercel.app/login"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explorer
                            </a>
                        </Button>
                    </Card>
                </div>
            </section>

            <section className="min-h-screen flex flex-col gap-6 items-center justify-center pt-10">
                <CardTitle className="sticky top-21 bg-card py-2 px-6 w-full h-auto z-3">
                    <LettersPullUp text="Mon Stack"/>
                </CardTitle>

                <SuperMarquee>
                    {
                        skill.map((myStack) => {
                            return <MyStackCard key={myStack.tech} stack={myStack}/>
                        })
                    }
                </SuperMarquee>
                    <a
                        href="/IgnaceCV.pdf"
                        download={"Edwardo Ignace.pdf"}
                    >
                        <SendButton/>
                    </a>
            </section>

            

            <motion.section
                initial={{opacity:0}}
                whileInView={{
                    opacity:[0,1],
                    transition:{duration:0.5}
                }}
                className="rounded-md min-h-screen flex flex-col gap-6 items-center justify-center"
                id="contact"
            >
                <CardTitle className="bg-card py-2 px-6 w-full h-auto z-3">
                    <LettersPullUp text="Contact"/>
                </CardTitle>
                <Card className="z-40 w-70 sm:w-100 p-2 backdrop-blur-2xl ">
                    <ContactMe/>
                </Card>

            </motion.section>
            <DropdownMenuSeparator/>
            <p className={`px-10 mx-10 text-xs text-center ${writer.className}`}>© 2026 by Edwardo Ignace.</p>
        </div>
    );
}
