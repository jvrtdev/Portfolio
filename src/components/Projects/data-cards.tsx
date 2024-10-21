import { ReactNode } from "react"
import { FaAngular, FaPhp } from "react-icons/fa"
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri"
import {
  SiFirebase,
  SiIonic,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
} from "react-icons/si"
export interface dataCardsProps {
  projeto: string
  nome: string
  descricao: string
  tecnologias: ReactNode[]
  midia: any
  links: any
  align?: string
}

export const dataCards: dataCardsProps[] = [
  {
    projeto: "Locadora de veículos",
    nome: "Vrum-Drive",
    descricao:
      "Conquistei nesse projeto a habilidade melhorada de trabalhar em grupo, conceitos do desenvolvimento Backend e Frontend. Esse projeto consiste em uma locadora de veículos, trabalhei no Frontend e no Backend. No Frontend, fui responsável pela implementação da parte lógica como a autenticação do usuário, tratamento de erros dentro de uma página e implementação visual e lógica das regras de negócio da aplicação. No Backend, fui responsável por implementar padrões de arquitetura limpa, modelagem do banco de dados e hospedagem do servidor usando a AWS.",
    tecnologias: [
      <SiTypescript key={1} />,
      <IoLogoReact key={2} />,
      <SiNextdotjs key={3} />,
      <RiTailwindCssFill key={4} />,
      <FaPhp key={5} />,
      <SiMysql key={6} />,
    ],
    midia: {
      principal: "/projetos/vrumdrive/home-pc.png",
      desktop: "/projetos/vrumdrive/home-desktop-dark.png",
      mobile: [
        "/projetos/vrumdrive/home-mobile.png",
        "/projetos/vrumdrive/home-mobile-dark.png",
      ],
      gifs: [
        "/projetos/vrumdrive/home-mobile-video.gif",
        "/projetos/vrumdrive/home-desktop-video.gif",
      ],
    },
    links: {
      github: "https://github.com/cplxx/vrum-drive",
      demo: "https://vrum-drive.vercel.app/",
    },
  },
  {
    projeto: "Pokedex API",
    nome: "Pokemon-World.API",
    descricao: "Um projeto focado em praticar chamada de API's.",
    tecnologias: [
      <IoLogoJavascript key={7} />,
      <IoLogoReact key={8} />,
      <SiVite key={9} />,
      <RiTailwindCssFill key={10} />,
      <SiStyledcomponents key={11} />,
    ],
    midia: {
      principal: "/projetos/pokeapi/aboutpokemon-desktop.png",
      desktop: "/projetos/pokeapi/home-desktop.png",
      mobile: [
        "/projetos/pokeapi/home-mobile.png",
        "/projetos/pokeapi/aboutpokemon-mobile.png",
      ],
      gifs: ["/projetos/pokeapi/mobile.gif", "/projetos/pokeapi/desktop.gif"],
    },
    links: {
      github: "https://github.com/jvrtdev/pokeapijs",
      demo: "https://pokedex-world.vercel.app/",
    },
  },
  // {
  //   projeto: "Gerenciador de Eventos de TI e Rede social",
  //   nome: "eventNet",
  //   descricao:
  //     "O eventNet é um aplicativo mobile completo para gestão de eventos, permitindo que os usuários criem eventos, inscrevam-se e interajam com outros participantes através de chat em tempo real. Nesse projeto adquiri conhecimento em Ionic + Angular na parte do desenvolvimento mobile. No backend adquiri conhecimento em novos padrões de arquitetura, padrões criacionais, websockets e boas práticas de código limpo.",
  //   tecnologias: [
  //     <SiTypescript key={12} />,
  //     <FaAngular key={13} />,
  //     <SiIonic key={14} />,
  //     <RiTailwindCssFill key={15} />,
  //     <SiNestjs key={16} />,
  //     <SiPostgresql key={17} />,
  //     <SiPrisma key={18} />,
  //     <SiFirebase key={19} />,
  //   ],
  //   midia: {
  //     principal: "/projetos/eventnet/photo1.png1 ",
  //     desktop: "/projetos/eventnet/photo2.png1",
  //     mobile: [
  //       "/projetos/eventnet/photo3.png",
  //       "/projetos/eventnet/photo4.png",
  //     ],
  //     gifs: ["/projetos/eventnet/photo5.png", "/projetos/eventnet/photo6.png"],
  //   },
  //   links: {
  //     github: "https://github.com/jvrtdev/eventNet",
  //     demo: "",
  //   },
  // },
]

export default dataCards
