export const calculateModifier = (value) => {
  return Math.floor((value - 10) / 2);
};

export const calculateAvailableSkillPoints = (intelligence) => {
  return 10 + 4 * calculateModifier(intelligence);
};

export const MAX_TOTAL_ATTRIBUTES = 70;

export const calculateTotalAttributes = (attributes) => {
  return Object.values(attributes).reduce((sum, value) => sum + value, 0);
};

export const canIncreaseAttribute = (attributes) => {
  const totalAttributes = calculateTotalAttributes(attributes);
  return totalAttributes < MAX_TOTAL_ATTRIBUTES;
};

export const canDecreaseAttribute = (attributes, attribute) => {
  return attributes[attribute] > 1;
};
