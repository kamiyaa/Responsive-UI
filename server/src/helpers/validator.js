function isValidString(str) {
  return (
    undefined !== str &&
    null !== str &&
    "string" === typeof str &&
    0 < str.length
  );
}

module.exports = {
  isValidString,
};
