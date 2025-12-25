"use client"

import SnowParticles from "@/components/features/ParticleContainer"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { crazy } from "./page"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowUpRightFromSquareIcon, Home } from "lucide-react"

export default function PagaNotFund(){
    return(
        <div className="text-center w-full">
            <SnowParticles />
            <div className="mt-50 flex flex-col gap-4 items-center justify-center">
                <Card className="top-5 w-1/2">
                    <CardContent className="h-40 flex flex-col gap-2">
                        <CardTitle className={`${crazy.className}`}><h1 className="text-7xl">404 - not found</h1></CardTitle>
                        <CardDescription>Cette page n&apos;existe pas</CardDescription>
                    </CardContent>
                </Card>

                <Link href="/" className={buttonVariants({variant:"outline"})}>Portfolio <p> <ArrowUpRightFromSquareIcon/> </p></Link>
            </div>
        </div>
    )
}