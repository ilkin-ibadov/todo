export const uniqid = length => {
  let chars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  let part1 = chars.sort(() => Math.random() - 0.5).join('');
  let part2 = chars.sort(() => Math.random() - 0.5).join('');
  return (part1 + part2).substring(5, length + 5);
};
