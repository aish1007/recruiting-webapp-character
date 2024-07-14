import React, { Fragment, useEffect } from "react";
import AttributeSection from "./AttributeSection";
import ClassSection from "./ClassSection";
import SkillSection from "./SkillSection";

const CharacterSheet = ({ character, updateCharacter }) => {
  const handleAttributeChange = (attributes) => {
    updateCharacter(character.id, { attributes });
  };

  const handleSkillChange = (newSkills) => {
    updateCharacter(character.id, { skills: newSkills });
  };

  return (
    <Fragment>
      <div>
        <h2>{character.name}</h2>
        <input
          type="text"
          value={character.name}
          onChange={(e) =>
            updateCharacter(character.id, { name: e.target.value })
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid black",
          borderRadius: 10,
          padding: 20,
          margin: 50,
        }}
      >
        <AttributeSection
          attributes={character.attributes}
          setAttributes={handleAttributeChange}
        />
        <ClassSection attributes={character.attributes} />
        <SkillSection
          attributes={character.attributes}
          skills={character.skills}
          setSkills={handleSkillChange}
        />
      </div>
    </Fragment>
  );
};

export default CharacterSheet;
