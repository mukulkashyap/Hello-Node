const file = require("fs");
console.log("Welcome Mukul");
console.log(math.addFn(2, 4));
//console.log(file.readFileSync("./readme.txt","utf-8"));
file.readFile("./readme.txt", "utf8", (err, result) => {
  if (err) {
  } else {
    console.log(result);
  }
});

