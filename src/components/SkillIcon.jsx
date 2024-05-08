import React from "react";

const SkillIcon = ({ children, name }) => {
  return (
    <span class="flex justify-center items-center gap-2 py-2 px-4 text-[#292828] text-xs font-medium rounded-full border border-[#82807E]">
      {children}
      {name}
    </span>
  );
};

export default SkillIcon;
