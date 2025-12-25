"use client"
import { mountainsOfChristmas } from "@/app/page";
interface props {
    sections : {
        id : string;
        title:string;
    }[]
    click : (id:string) => void
}

export const SectionTracker = ({sections, click} : props) => {
    return(
      <div>

        <section className={`${mountainsOfChristmas.className} hidden md:flex items-center gap-10`}>
          {
            sections?.map((section) => (
              <button
                key={section.id}
                onClick={() => click(section.id)}
                className="capitalize text-2xl hover:text-primary cursor-pointer"
              >
                {section.title}
              </button>
            ))
          }
        </section>
        <section>

        </section>
      </div>
    )
}