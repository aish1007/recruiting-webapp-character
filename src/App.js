import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, SKILL_LIST } from "./consts.js";
import CharacterSheet from "./components/CharacterSheet";

function App() {
  const [characters, setCharacters] = useState([]);

  const getSkills = () => {
    const skillList = {};
    SKILL_LIST.forEach((skill) => (skillList[skill.name] = 0));
    return skillList;
  };

  const getAttributes = () => {
    const attributesList = {};
    ATTRIBUTE_LIST.forEach((attribute) => (attributesList[attribute] = 10));
    return attributesList;
  };

  const updateCharacter = (id, updatedFields) => {
    setCharacters((prevCharacters) => {
      const newCharacters = prevCharacters.map((char) =>
        char.id === id ? { ...char, ...updatedFields } : char
      );
      console.log("New characters state:", newCharacters);
      return newCharacters;
    });
  };

  const addCharacter = () => {
    const newCharacter = {
      id: Date.now(),
      name: `Character ${characters.length + 1}`,
      attributes: getAttributes(),
      skills: getSkills(),
    };

    setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
    console.log("character!", characters);
  };

  const handleSave = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          {characters.map((character) => (
            <CharacterSheet
              key={character.id}
              character={character}
              updateCharacter={updateCharacter}
            />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            <button style={{ margin: 20 }} onClick={addCharacter}>
              Add New Character
            </button>
            <button style={{ margin: 20 }} onClick={handleSave}>
              Save Character
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
