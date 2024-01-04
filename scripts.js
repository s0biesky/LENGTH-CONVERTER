// Using a conversion table

function converter(id) {
  const units = [
    "millimeter",
    "centimeter",
    "meter",
    "kilometer",
    "inch",
    "foot",
    "yard",
    "mile",
  ];

  const conversionTable = {
    millimeter: {
      centimeter: 0.1,
      meter: 0.001,
      kilometer: 1e-6,
      inch: 0.0393701,
      foot: 0.00328084,
      yard: 0.00109361,
      mile: 6.2137e-7,
    },
    centimeter: {
      meter: 0.01,
      kilometer: 1e-5,
      millimeter: 10,
      inch: 0.393701,
      foot: 0.0328084,
      yard: 0.0109361,
      mile: 6.2137e-6,
    },
    meter: {
      centimeter: 100,
      kilometer: 0.001,
      millimeter: 1000,
      inch: 39.3701,
      foot: 3.28084,
      yard: 1.09361,
      mile: 0.000621371,
    },
    kilometer: {
      centimeter: 1e5,
      meter: 1000,
      millimeter: 1e6,
      inch: 39370.1,
      foot: 3280.84,
      yard: 1093.61,
      mile: 0.621371,
    },
    inch: {
      centimeter: 2.54,
      meter: 0.0254,
      kilometer: 2.54e-5,
      millimeter: 25.4,
      foot: 0.0833333,
      yard: 0.0277778,
      mile: 1.5783e-5,
    },
    foot: {
      centimeter: 30.48,
      meter: 0.3048,
      kilometer: 3.048e-4,
      millimeter: 304.8,
      inch: 12,
      yard: 0.333333,
      mile: 0.000189394,
    },
    yard: {
      centimeter: 91.44,
      meter: 0.9144,
      kilometer: 9.144e-4,
      millimeter: 914.4,
      inch: 36,
      foot: 3,
      mile: 0.000568182,
    },
    mile: {
      centimeter: 160934.4,
      meter: 1609.344,
      kilometer: 1.60934,
      millimeter: 1.60934e6,
      inch: 63360,
      foot: 5280,
      yard: 1760,
    },
  };

  let inputValue = parseFloat(document.getElementById(id).value);

  for (let unit of units) {
    if (unit.toLocaleLowerCase() !== id) {
      let result = inputValue * conversionTable[id][unit.toLocaleLowerCase()];
      document.getElementById(unit.toLocaleLowerCase()).value =
        result.toFixed(4);
    }
  }
}
