function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch(e) {
    return undefined;
  }
}

export default parseJson;