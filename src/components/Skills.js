import { Icon } from "@iconify/react";
import "../App.css";

const Skills = () => {
  const technicalSkills = [
    { skill: "Java", icon: "logos:java" },
    { skill: "HTML", icon: "logos:html-5" },
    { skill: "CSS", icon: "vscode-icons:file-type-css" },
    { skill: "JavaScript", icon: "logos:javascript" },
    { skill: "Node.js", icon: "logos:nodejs" },
    { skill: "React", icon: "logos:react" },
    { skill: "Next.js", icon: "logos:nextjs" },
    { skill: "Lua", icon: "logos:lua" },
    { skill: "Roblox Studio", icon: "simple-icons:roblox" },
    { skill: "Python", icon: "logos:python" },
    { skill: "C", icon: "logos:c" },
    { skill: "C++", icon: "logos:c-plusplus" },
    { skill: "C#", icon: "logos:c-sharp" },
    { skill: "Unity", icon: "logos:unity" },
    { skill: "Github", icon: "akar-icons:github-fill" },
    { skill: "Solidity", icon: "logos:solidity" },
  ];
  
  const otherSkills = [
    { skill: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
    { skill: "Adobe Lightroom", icon: "logos:adobe-lightroom" },
    { skill: "Adobe Premiere Pro", icon: "logos:adobe-premiere" },
    { skill: "Adobe After Effects", icon: "logos:adobe-after-effects" },
    { skill: "Blender", icon: "logos:blender" },
    { skill: "Microsoft Excel", icon: "vscode-icons:file-type-excel" },
  ];

  return (
    <div className="aboutpage" id="skills">
      <h1>- Skills -</h1>
      <h2 className="sectionTitle">Technical Skills</h2>
      <div className="skills">
        {technicalSkills.map((skill) => (
          <div className="skill" key={"key1"}>
            <Icon icon={skill.icon} height="50" />
            <br />
            <span>{skill.skill}</span>
          </div>
        ))}
      </div>

      <h2 className="sectionTitle">Other Skills</h2>
      <div className="skills">
        {otherSkills.map((skill) => (
          <div className="skill" key={"key1"}>
            <Icon icon={skill.icon} height="50" />
            <br />
            <span>{skill.skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
