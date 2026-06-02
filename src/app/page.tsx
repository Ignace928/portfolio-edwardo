

import localFont from "next/font/local";
import ContainerClient from "@/components/features/Container";
import SnowParticles from "@/components/features/ParticleContainer";
import { Metadata } from "next";

const mountainsOfChristmas = localFont({
  src:"./font/moutnain_of_christmas/MountainsofChristmas-Regular.ttf",
  variable: "--font-christmas",
  weight:"400 700"
})
const inter = localFont({
  src:"./font/normi/NotoSansSymbols-Regular.ttf",
  variable: "--font-inter",
  weight:"400 500 600 700 800 900"
})
const crazy = localFont({
  src:"./font/moutnain_of_christmas/AreYouSerious-Regular.ttf",
  weight:"100 700"
})
const notoSans = localFont({
  src:"./font/normi/NotoSansSymbols-Regular.ttf",
  weight:"400 500 600 700 800 900",
})
const writer = localFont({
  src:"./font/normi/PlaywriteIN-VariableFont_wght.ttf",
  weight:"400 500 600 700 800 900",
})
export const metadata:Metadata={
  openGraph:{
    title:"Ingénieur Developpeur fullstack malagasy",
    description:"Contacter un ingénieur Developpeur fullStakc JS malagasy",
    siteName:"https://edwardo-portfolio.netlify.app",
    locale:"",
    type:"profile",
  },
  robots:{
    index:true,
    follow:true,
    nocache:false,
    googleBot:{
      index:true,
      follow:true,
      "max-snippet":-1,
      // "max-image-preview":"large",
      // "max-video-preview":-1
    }
  }
};

export default function MyHome() { 
  return (
      <div className="w-full">
        <div className="z-100">
          <SnowParticles />
        </div>
          <ContainerClient/>
      </div>
  );
}

export {
  mountainsOfChristmas,
  inter,
  crazy,
  notoSans,
  writer
}