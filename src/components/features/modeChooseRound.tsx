"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/themeStore";
import { Moon, Sun, SunMoon } from "lucide-react";

import { Button, buttonVariants } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { motion } from "framer-motion";
import { SmoothCard } from "./MotionCard";

//type Mode = "light" | "dark" | "system";

const enfant = {
    hidden: { scale:0, y: 1 },
    visible: {
       scale:1, y: 0, 
       transition: { staggerChildren: 0}
    }
}
export default function ModeRoundedSwitcher() {
  const { mode, setMode, applyTheme } = useThemeStore();
  const [systemMode, setSystemMode] = useState<"light" | "dark">("light");

  // 🔹 Détecter le mode système
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemMode(mql.matches ? "dark" : "light");

    update(); // valeur initiale
    mql.addEventListener("change", update);

    return () => mql.removeEventListener("change", update);
  }, []);

  // 🔹 Appliquer le thème à chaque changement
  useEffect(() => {
    applyTheme();
  }, [mode, systemMode, applyTheme]);

  return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full cursor-pointer w-10 h-10" variant={"outline"}>
              {mode === 'light' ? (<Sun/>) : mode === 'dark' ? (<Moon/>) : (<SunMoon/>)}
            </Button>
      
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <SmoothCard staggerChildren={0.1} delay={0.1} style="items-center justify-center flex flex-col">


              <DropdownMenuGroup className="flex flex-col items-center gap-1">

                <motion.div variants={enfant}>
                  <DropdownMenuItem className={buttonVariants({variant:"outline", class:"cursor-pointer rounded-full w-10 h-10 animate-accordion-down"})} onClick={() => setMode("light")}>
                      <Sun/>
                  </DropdownMenuItem>
                </motion.div>

                <motion.div variants={enfant}>  
                  <DropdownMenuItem className={buttonVariants({variant:"outline", class:"cursor-pointer rounded-full w-10 h-10 animate-accordion-down"})} onClick={() => setMode("dark")}>
                    <Moon/>
                  </DropdownMenuItem>
                </motion.div>

              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <motion.div className="" variants={enfant}>
                <DropdownMenuItem className={buttonVariants({variant:"outline", class:"cursor-pointer"})} onClick={() => setMode("system")}>
                    Système
                </DropdownMenuItem>
              </motion.div>
                
                


          </SmoothCard>
          </DropdownMenuContent>
        </DropdownMenu>
  );
}
