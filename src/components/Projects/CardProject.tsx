import Image from "next/image"
import { dataCardsProps } from "./data-cards"

//shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import Link from "next/link"

export default function CardProject({
  projeto,
  nome,
  descricao,
  tecnologias,
  midia,
  align,
  links,
}: dataCardsProps) {
  return (
    <div
      className={`w-full xl:max-w-max shadow-xl border border-slate-400 rounded-3xl p-10 ${align} mb-20`}
    >
      <div
        className={`flex flex-col md:flex-row justify-beetween ${
          align == "self-end" ? "flex-row-reverse" : ""
        }`}
      >
        <div>
          <h1 className="font-bold text-xl md:text-2xl xl:text-3xl text-[#003366]">
            {projeto}
          </h1>
          <h2 className="text-md font-medium md:text-xl">{nome}</h2>
          <p className="md:text-xl mt-2 max-w-md">{descricao}</p>
          <div className="flex text-4xl gap-2 my-3 text-[#003366] ">
            {tecnologias}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Carousel className="max-w-[600px]">
            <CarouselContent className="flex items-center">
              <CarouselItem>
                <Image
                  src={`${midia.principal}`}
                  alt={midia}
                  width={600}
                  height={600}
                  className=""
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`${midia.desktop}`}
                  alt={midia}
                  width={600}
                  height={600}
                  className=""
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`${midia.gifs[1]}`}
                  alt={midia}
                  width={600}
                  height={600}
                  className="m-auto"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`${midia.mobile[0]}`}
                  alt={midia}
                  width={200}
                  height={200}
                  className="m-auto"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`${midia.mobile[1]}`}
                  alt={midia}
                  width={200}
                  height={200}
                  className="m-auto"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`${midia.gifs[0]}`}
                  alt={midia}
                  width={200}
                  height={200}
                  className="m-auto"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex gap-2 max-w-max mt-5">
            <Button>
              <Link href={links.github} target="_blank">
                GitHub
              </Link>
            </Button>
            <Button>
              <Link href={links.demo} target="_blank">
                Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
