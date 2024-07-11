"use client"
import Image from "next/image"
import { Element } from "react-scroll"
import fotoJv from "@/../public/Foto.svg"
import Typewriter from "typewriter-effect"
import { GrDocumentPdf } from "react-icons/gr"
import { SocialIcons } from "./Icon"

export default function Hero() {
  return (
    <Element name="Inicio">
      <div className="bg-[#003366] w-full flex justify-center text-white">
        <div className="mt-20 w-full max-w-screen-2xl flex flex-col-reverse md:flex-row md:justify-between items-center py-20 px-8">
          <div className="mt-10">
            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
              <Typewriter
                options={{
                  strings: [
                    "Desenvolvedor Fullstack",
                    "Freelancer",
                    "Desenvolvedor Web",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>
            <p className="font-normal mt-4 max-w-md">
              Meu nome é João, um Desenvolvedor Web apaixonado por criar
              experiências digitais extraordinárias. Este é o meu playground
              virtual, onde a criatividade se encontra com a funcionalidade!
            </p>
            <p className="font-normal mt-6 max-w-md">
              Se você está em busca de um parceiro para transformar sua visão em
              realidade digital, você está no lugar certo. Vamos trabalhar
              juntos e fazer algo incrível acontecer!
            </p>
            <a href="/curriculo-joao.pdf" target="_blank">
              <button className="mt-10 p-2 font-medium border-2 border-white rounded-xl max-w-fit flex items-center gap-1  hover:scale-110 transition-all duration-300 ">
                Currículo
                <GrDocumentPdf />
              </button>
            </a>
          </div>
          <div className="flex flex-col items-center md:flex-row  ">
            <Image src={fotoJv} alt="foto jv" />
            <div className="flex gap-3 md:flex-col">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}
