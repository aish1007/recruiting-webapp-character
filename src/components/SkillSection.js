import React from "react";
import { SKILL_LIST } from "../consts";
import {
  calculateModifier,
  calculateAvailableSkillPoints,
} from "../utils/calculations";

const SkillSection = ({ attributes, skills, setSkills }) => {
  const availableSkillPoints = calculateAvailableSkillPoints(
    attributes.Intelligence
  );

  const totalSkillSpentPts = Object.values(skills).reduce(
    (sum, points) => sum + points,
    0
  );

  const handleSkillChange = (skillName, value) => {
    const newSkillValue = Math.max(0, (skills[skillName] || 0) + value);
    if (totalSkillSpentPts + newSkillValue <= availableSkillPoints) {
      const newSkills = {
        ...skills,
        [skillName]: newSkillValue,
      };
      setSkills(newSkills);
    }
  };

  return (
    <div>
      <h2>
        Skills (Available Points: {availableSkillPoints - totalSkillSpentPts})
      </h2>
      {SKILL_LIST.map((skill) => {
        const modifier = calculateModifier(attributes[skill.attributeModifier]);
        const total = (skills[skill.name] || 0) + modifier;
        return (
          <div key={skill.name}>
            {skill.name} - Points: {skills[skill.name] || "0"}
            <button onClick={() => handleSkillChange(skill.name, 1)}>+</button>
            <button onClick={() => handleSkillChange(skill.name, -1)}>-</button>
            Modifier ({skill.attributeModifier}): {modifier}
            Total: {total}
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
