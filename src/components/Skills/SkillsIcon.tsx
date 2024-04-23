import Image from "next/image";
import { SkillsIconProps } from "./@types";
import Marquee from "react-fast-marquee";
import { SkillsIconData } from "./SkillsData";





export function SkillsIcon({name, icon}: SkillsIconProps) {
  return(
    <div className="flex flex-col items-center">
      <Image src={icon} alt={name} width={80} />
      <p>{name}</p>
    </div>
  )
}

export function SkillsMarquee() {
  return(
    <div className="my-5 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
      <Marquee speed={60}>
        <div className="flex gap-10 md:gap-20 p-3">
          {SkillsIconData.map((icon) => (
            <SkillsIcon name={icon.name} icon={icon.icon} key={icon.name} />
          ))}
        </div>
      </Marquee>
    </div>
  )
}
