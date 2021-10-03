let rows = []
rows = prompt('Input a number between 1 and 10')
let columns = []
columns = prompt('Input a number between 1 and 10')
let string = ""
for(i = 0; i < rows; i++) { 
  for(j = 0; j < columns; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);