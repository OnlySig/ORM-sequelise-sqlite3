module.exports = (text) => {
  const newRegex = new RegExp(text, "i");
  return newRegex;
} 