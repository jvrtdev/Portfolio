import { Element } from "react-scroll";
import { SkillsMarquee } from "./SkillsIcon";


export default function Habilidades() {

  return(
    <Element name="Habilidades">
      <div className="w-full flex justify-center">
        <div className="mt-20 w-full max-w-screen-2xl flex flex-col  pb-10 px-8">
          <h1 className="font-bold text-3xl xl:text-4xl text-[#003366]">Habilidades</h1>
          <p className="font-normal mt-4 max-w-md md:max-w-xl">Como desenvolvedor fullstack, estou constantemente expandindo meu conjunto de habilidades para oferecer soluções digitais eficientes e inovadoras. Estou sempre em busca de aprender algo novo,e aperfeiçoar com aprendizado continuo.</p>
          <SkillsMarquee />
          
        </div>
      </div>
    </Element>
  )
}