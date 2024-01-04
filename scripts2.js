// Using a switch based on foot.
// Note: In order to work you have to add "this.value" before the unit when the function is called and change the src to scripts2.js in the HTML file.

let millimeter, centimeter, meter, kilometer, inch, yard, mile;

function converter(val, unit) {
  /*
        Convert from Feet to Meter	m=ft/3.2808
        Convert from Feet to Inch	in=ft*12
        Convert from Feet to Centimeter	cm=ft/0.032808
        Convert from Feet to Yard	yd=ft*0.33333
        Convert from Feet to Kilometer km=ft/3280.8
        Convert from Feet to Mile  mi=ft*0.00018939
        Convert from Feet to Millimeter  mm=ft/0.0032808
    */

  const value = +val;

  let foot;
  switch (unit) {
    case "millimeter":
      foot = value * 0.0032808;
      break;
    case "foot":
      foot = value;
      break;
    case "meter":
      foot = value * 3.2808;
      break;
    case "inch":
      foot = value / 12;
      break;
    case "centimeter":
      foot = value * 0.032808;
      break;
    case "yard":
      foot = value / 0.33333;
      break;
    case "kilometer":
      foot = value * 3280.8;
      break;
    case "mile":
      foot = value / 0.00018939;
      break;
    default:
  }

  meter = foot / 3.2808;
  inch = foot * 12;
  centimeter = foot / 0.032808;
  yard = foot * 0.33333;
  kilometer = foot / 3280.8;
  mile = foot * 0.00018939;
  millimeter = foot / 0.0032808;

  document.getElementById("foot").value = foot.toFixed(4);
  document.getElementById("meter").value = meter.toFixed(4);
  document.getElementById("inch").value = inch.toFixed(4);
  document.getElementById("centimeter").value = centimeter.toFixed(4);
  document.getElementById("yard").value = yard.toFixed(4);
  document.getElementById("kilometer").value = kilometer.toFixed(4);
  document.getElementById("mile").value = mile.toFixed(4);
  document.getElementById("millimeter").value = millimeter.toFixed(4);
}
