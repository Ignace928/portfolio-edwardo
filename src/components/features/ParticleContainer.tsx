// components/SnowParticles.tsx
"use client";

import { Particles, initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useMemo } from "react";


const SnowParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // version légère & performante
    }).then(() => { setInit(true) });
  }, []);
  
  const snowOptions: ISourceOptions = useMemo(() => {
    return {

      fpsLimit: 60,

      detectRetina: true,

      background: {
        color: { value: "transparent" },
      },

      fullScreen: {
        enable: true,
        zIndex: -1, // rendu derrière le site
      },

      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.5,
            factor: 2, // vitesse de réaction
          },
        },
      },


      particles: {
        number: {
          value: 80
        },

        color: {
          value: "rgba(150,150,150,0.9)",
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: { min: 0.3, max: 0.9 },
        },

        size: {
          value: { min: 2, max: 5 },
        },

        move: {
          enable: true,
          direction: "bottom",
          speed: { min: 0.5, max: 2 },
          straight: false,
          outModes: { default: "out" },
          random: true, // vitesse aléatoire
          drift: 0, // déviation horizontale
        },
        links: { enable: false },
        shadow: {
          enable: true,
          color: "rgba(0,0,0,0.4)",
          blur: 2,
        },
        
      },



    };
  }, []);

  if (!init) return null;

  return <Particles id="tsparticles-snow" options={snowOptions} />;
};

export default SnowParticles;
