import React, { useState } from "react";
import { CLASS_LIST } from "../consts";

const ClassSection = ({ attributes }) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const isClassAvailable = (className) => {
    return Object.entries(CLASS_LIST[className]).every(
      ([attr, minValue]) => attributes[attr] >= minValue
    );
  };

  return (
    <div>
      <h2>Classes</h2>
      {Object.keys(CLASS_LIST).map((className) => (
        <div
          key={className}
          style={{ color: isClassAvailable(className) ? "green" : "red" }}
          onClick={() => setSelectedClass(className)}
        >
          {className}
        </div>
      ))}
      {selectedClass && (
        <div>
          <h3>{selectedClass} Requirements:</h3>
          {Object.entries(CLASS_LIST[selectedClass]).map(([attr, value]) => (
            <div key={attr}>
              {attr}: {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassSection;
