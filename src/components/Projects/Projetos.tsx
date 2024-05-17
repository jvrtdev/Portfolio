import { Element } from "react-scroll"
import CardProject from "./CardProject"
import dataCards from "./data-cards"


export default function Projetos() {

  return(
    <Element name="Projetos" className="mt-10">
      <div className="w-full max-w-screen-2xl flex flex-col items-center py-20 px-8">
        <h1 className="font-bold text-3xl md:text-3xl xl:text-4xl mb-20 text-[#003366]">Projetos</h1>
        
          {dataCards.map((data,index) => (
            <CardProject
              key={index}
              align={index % 2 == 0 ? "self-start" : "self-end"}
              projeto={data.projeto}
              nome={data.nome}
              descricao={data.descricao}
              tecnologias={data.tecnologias}
              midia={data.midia}
              links={data.links}
            />
          ))}

      </div>


    </Element>
  )
}