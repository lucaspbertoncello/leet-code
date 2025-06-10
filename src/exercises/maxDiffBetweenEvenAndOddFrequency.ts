function maxDifference(s: string) {
  const repeatedStrings = {};
  let odd = null;
  let even = null;

  for (const string of s) {
    if (!repeatedStrings[string]) {
      repeatedStrings[string] = 1;
    } else {
      repeatedStrings[string] += 1;
    }
  }

  for (const key in repeatedStrings) {
    if (!even && repeatedStrings[key] % 2 === 0) {
      even = repeatedStrings[key];
    }

    if (!odd && repeatedStrings[key] % 2 !== 0) {
      odd = repeatedStrings[key];
    }
  }

  return odd - even;
}
