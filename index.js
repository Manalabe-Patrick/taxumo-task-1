const tempp = document.getElementById("temp");

//returns an array of strings with the output [generate "Ay", "Ax", Az" "By" Bx" "Bz" "Cy" "Cx",Cz"]
function generateStrings() {
  const letters = ["A", "B", "C"];
  const axes = ["y", "x", "z"];
  const strings = [];

  //Concatinate string on the letters and axes array
  for (const letter of letters) {
    for (const axis of axes) {
      strings.push(`${letter}${axis}`);
    }
  }
  return strings;
}

//generate the array of string
const strings = generateStrings();
//display the array on the console
console.log(strings);
tempp.innerHTML = strings;
