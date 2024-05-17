'use client'

import Image from "next/image"
import logoJv from "@/../public/logo-jv.svg"
import { CustomLink } from "./CustomLink";
import { IoIosMenu } from "react-icons/io";

//shadcn
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header(){
  const nav = ['Inicio', 'Habilidades', 'Projetos'];


  return(
      <div className="w-full h-[80px] p-1 px-7  bg-opacity-80 backdrop-blur-xl border-b shadow-md border-[#ffffff37] fixed z-50 top-0 bg-[#003366] text-white flex justify-center">
        <div className="w-full max-w-screen-2xl flex items-center justify-between">
          <Image src={logoJv} alt="logo jv" className="mt-[8px]"  />

          <div className="md:flex gap-4 text-lg hidden ">
            {nav.map((title) => (
              <CustomLink title={title} target={title} key={title} />
            ))}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger><IoIosMenu className="text-4xl"/></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col items-start text-lg text-black">
                    {nav.map((title) => (
                      <CustomLink title={title} target={title} key={title} />
                    ))}
                    <CustomLink title="teste" target="Inicio" />
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
  )
}