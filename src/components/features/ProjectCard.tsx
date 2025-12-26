// components/project/ProjectCard.tsx
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { DropdownMenuSeparator } from "../ui/dropdown-menu";

type ProjectCardProps = {
  title: string;
  detail: string;
  images: string[];
  footer?: React.ReactNode;
};

export function ProjectCard({
  title,
  detail,
  images,
  footer,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] flex flex-col overflow-hidden">
        {/* Carousel */}
        <Carousel className="w-full">
            <CarouselContent>
            {
              images.map((img, index) => (
                  <CarouselItem key={index}>
                  <div className="relative w-full aspect-4/3 md:aspect-video lg:aspect-video overflow-hidden">
                      <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover"
                      />
                  </div>
                  </CarouselItem>
              ))
            }
            </CarouselContent>
            <CarouselPrevious className="left-2 primary" />
            <CarouselNext className="right-2" />
        </Carousel>

      {/* Header */}
      <CardHeader className="pb-3 pt-4 space-y-3">
        <CardTitle className="text-base leading-tight">
          {title}
        </CardTitle>
        <DropdownMenuSeparator />
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 pt-0 pb-4">
        <CardDescription className="text-sm leading-relaxed line-clamp-4">
          {detail}
        </CardDescription>
      </CardContent>

      {/* Footer */}
      {footer && (
        <CardFooter className="pt-0 pb-4 px-6 flex justify-end">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
