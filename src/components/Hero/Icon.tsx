'use client'
import { IconNetwork } from "./@types";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const IconsData: IconNetwork[] = [
  {
    link: "https://github.com/jvrtdev",
    icon: <FaGithub />
  },
  {
    link: "https://www.linkedin.com/in/jvrtdev",
    icon: <FaLinkedinIn />
  },
  {
    link: "https://wa.me/+5521998344311",
    icon: <FaWhatsapp />
  },
  {
    link: "mailto:jvrtdev@gmail.com",
    icon: <MdEmail />
  },
]

export const Icon = ({link, icon}: IconNetwork ) => {
  return(
    <div>
      <a href={link} target="_blank">
        <div className="cursor-pointer text-3xl lg:text-4xl xl:text-5xl hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110">
          {icon}
        </div>
      </a>
    
    </div>
  )
}

export function SocialIcons() {
  return(
    <>
      {IconsData.map((icon, index) => (
        <Icon link={icon.link} icon={icon.icon} key={index} />
      ))}
    </>
  )
}