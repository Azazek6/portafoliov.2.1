import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { SiShadcnui } from "react-icons/si";
import { SiAstro } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiChakraui } from "react-icons/si";
import SkillIcon from "../SkillIcon";

const Skill = () => {
  return (
    <section className="m-[0_auto] w-[85%] sm:w-[70%] md:w-[50%] mt-5">
      <h1 className="text-[#292828] text-lg sm:text-3xl underline font-semibold tracking-wide">
        Habilidades
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 sm:mt-5">
        <SkillIcon name="Html">
          <AiOutlineHtml5 size={20} color="#DD4B25" />
        </SkillIcon>
        <SkillIcon name="JavaScript">
          <RiJavascriptLine size={20} color="#ECBA30" />
        </SkillIcon>
        <SkillIcon name="Tailwind">
          <SiTailwindcss size={20} color="#36B7F0" />
        </SkillIcon>
        <SkillIcon name="Shadcn/ui">
          <SiShadcnui size={15} color="#000000" />
        </SkillIcon>
        <SkillIcon name="Chakra UI">
          <SiChakraui size={15} color="#3ac7bd" />
        </SkillIcon>
        <SkillIcon name="React">
          <BiLogoReact size={20} color="#8BDCF4" />
        </SkillIcon>
        <SkillIcon name="Astro">
          <SiAstro size={15} color="#e2398b" />
        </SkillIcon>
        <SkillIcon name="Next JS">
          <TbBrandNextjs size={20} color="#000000" />
        </SkillIcon>
        <SkillIcon name="Node JS">
          <RiNodejsFill size={20} color="#6AA05C" />
        </SkillIcon>
        <SkillIcon name="MySQL">
          <DiMysql size={20} color="#00718B" />
        </SkillIcon>
        <SkillIcon name="PostgreSQL">
          <BiLogoPostgresql size={25} color="#31648c" />
        </SkillIcon>
        <SkillIcon name="MongoDB">
          <BiLogoMongodb size={25} color="#00ee64" />
        </SkillIcon>
      </div>
    </section>
  );
};

export default Skill;
