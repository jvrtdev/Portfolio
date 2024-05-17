import { ReactNode } from "react";
import { FaPhp } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";

export interface dataCardsProps{
  projeto: string;
  nome: string;
  descricao:string;
  tecnologias: ReactNode[];
  midia: any;
  links: any;
  align?: string;
}

export const dataCards:dataCardsProps[] = [
  {
    projeto: "Locadora de veículos",
    nome: "Vrum-Drive",
    descricao: "Um projeto que está sendo desenvolvido em grupo para a faculdade. Nesse projeto contribuí para o Front-end e Back-end utilizando Next.js e PHP.",
    tecnologias: [<IoLogoReact />,<SiNextdotjs />,<RiTailwindCssFill /> ,<FaPhp />, <SiMysql /> ],
    midia: {
      principal: "/projetos/vrumdrive/home-pc.png",
      desktop: "/projetos/vrumdrive/home-desktop-dark.png",
      mobile:  ["/projetos/vrumdrive/home-mobile.png","/projetos/vrumdrive/home-mobile-dark.png"],
      gifs: ["/projetos/vrumdrive/home-mobile-video.gif", "/projetos/vrumdrive/home-desktop-video.gif"]
    },
    links: {
      github: "https://github.com/cplxx/vrum-drive",
      demo: "https://vrum-drive.vercel.app/"
    }

  },
  {
    projeto: "Pokedex API",
    nome: "Pokemon-World.API",
    descricao: "Um projeto focado em praticar chamada de API's.",
    tecnologias: [<IoLogoJavascript />, <SiVite />, <RiTailwindCssFill />, <SiStyledcomponents />],
    midia: {
      principal: "/projetos/pokeapi/aboutpokemon-desktop.png",
      desktop: "/projetos/pokeapi/home-desktop.png",
      mobile:  ["/projetos/pokeapi/home-mobile.png","/projetos/pokeapi/aboutpokemon-mobile.png"],
      gifs: ["/projetos/pokeapi/mobile.gif", "/projetos/pokeapi/desktop.gif"] 
    },
    links: {
      github: "https://github.com/jvrtdev/pokeapijs",
      demo: "https://pokedex-world.vercel.app/"
    }
  },
]

export default dataCards;