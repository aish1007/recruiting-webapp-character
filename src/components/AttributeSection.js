import React, { useEffect, useState } from "react";
import {
  calculateModifier,
  canIncreaseAttribute,
  canDecreaseAttribute,
  calculateTotalAttributes,
  MAX_TOTAL_ATTRIBUTES,
} from "../utils/calculations";

const AttributeSection = ({ attributes, setAttributes }) => {
  const totalAttributes = calculateTotalAttributes(attributes);

  const handleAttributeChange = (attribute, value) => {
    const newAttributes = { ...attributes };
    newAttributes[attribute] += value;

    if (calculateTotalAttributes(newAttributes) <= MAX_TOTAL_ATTRIBUTES) {
      setAttributes(newAttributes);
    }
  };

  return (
    <div>
      <h2>
        Attributes (Total: {totalAttributes}/{MAX_TOTAL_ATTRIBUTES})
      </h2>
      {Object.keys(attributes).map((attr) => (
        <div key={attr}>
          <span>
            {attr}: {attributes[attr]} (Modifier:{" "}
            {calculateModifier(attributes[attr])})
          </span>
          <button
            onClick={() => handleAttributeChange(attr, 1)}
            disabled={!canIncreaseAttribute(attributes, attr)}
          >
            +
          </button>
          <button
            onClick={() => handleAttributeChange(attr, -1)}
            disabled={!canDecreaseAttribute(attributes, attr)}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default AttributeSection;
