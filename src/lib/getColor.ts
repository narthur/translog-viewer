// source: https://github.com/Elerium/flati/blob/master/src/flati.js

const hash = function (str: string): number {
  let result = 1;
  for (let i = 0; i < str.length; i++) {
    result += Math.sqrt(str.charCodeAt(i) * (i + 1));
  }

  return result % 1;
};

const hsl2rgb = function (h: number, s: number, l: number) {
  function hue(h: number): number {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    if (h * 6 < 1) {
      return m1 + (m2 - m1) * h * 6;
    } else if (h * 2 < 1) {
      return m2;
    } else if (h * 3 < 2) {
      return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    } else {
      return m1;
    }
  }

  h = (h % 360) / 360;
  const m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  const m1 = l * 2 - m2;

  return {
    r: Math.round(hue(h + 1 / 3) * 255),
    g: Math.round(hue(h) * 255),
    b: Math.round(hue(h - 1 / 3) * 255),
    toString: function () {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    },
  };
};

export default function getColor(
  seed: { toString: () => string },
  i: number = 0
) {
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const hue = ((hash(seed.toString()) + i * goldenRatio) % 1) * 360;
  return hsl2rgb(hue, 0.5, 0.6);
}
