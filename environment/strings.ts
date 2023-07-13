
// transfer any character to c1 exclude c2
export function convertSpecialCharacters(str : string,  c1 : string, c2 : string) {
  return str.replace(/[^A-Za-z0-9.]+/g, function (match ) {
    if (match.indexOf(c2) !== -1) {
      return match;
    } else {
      return c1;
    }
  });
}
