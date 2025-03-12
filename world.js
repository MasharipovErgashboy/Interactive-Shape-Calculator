      // Shape Calculations
      function calculateShape() {
        const shape = document.getElementById("shape-selector").value;
        const radius = parseFloat(document.getElementById("radius").value);
        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);
        const side = parseFloat(document.getElementById("side").value);

        let output = "";

        if (shape === "circle") {
          if (!isNaN(radius)) {
            output = `Circle: Area = ${(Math.PI * Math.pow(radius, 2)).toFixed(
              2
            )}, Perimeter = ${(2 * Math.PI * radius).toFixed(2)}`;
          } else {
            output = "Please enter a valid radius.";
          }
        } else if (shape === "rectangle") {
          if (!isNaN(width) && !isNaN(height)) {
            output = `Rectangle: Area = ${(width * height).toFixed(
              2
            )}, Perimeter = ${(2 * (width + height)).toFixed(2)}`;
          } else {
            output = "Please enter valid width and height.";
          }
        } else if (shape === "square") {
          if (!isNaN(side)) {
            output = `Square: Area = ${(side * side).toFixed(
              2
            )}, Perimeter = ${(4 * side).toFixed(2)}`;
          } else {
            output = "Please enter a valid side.";
          }
        }

        document.getElementById("shape-output").innerText = output;
      }
