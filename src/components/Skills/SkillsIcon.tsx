"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Marquee from "react-fast-marquee"
import { SkillsIconProps } from "./@types"
import { SkillsIconData } from "./SkillsData"

export function SkillsIcon({ name, icon }: SkillsIconProps) {
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <motion.div
      whileHover={{ scale: 1.2, y: -20 }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="flex flex-col items-center overflow-visible z-50"
    >
      <Image src={icon} alt={name} width={80} />
      {isHover && (
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          {name}
        </motion.p>
      )}
    </motion.div>
  )
}

export function SkillsMarquee() {
  return (
    <div className="my-5 rounded-xl bg-slate-100 overflow-auto shadow-sm z-0">
      <Marquee
        speed={100}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={1}
        autoFill={true}
        className="overflow-visible"
      >
        <div className="flex justify-between items-center space-x-10 p-3 overflow-visible h-44">
          {SkillsIconData.map((icon) => (
            <SkillsIcon name={icon.name} icon={icon.icon} key={icon.name} />
          ))}
        </div>
      </Marquee>
    </div>
  )
}
