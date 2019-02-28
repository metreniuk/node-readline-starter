let readline = require("readline")

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []

rl.on("line", line => {
  lines.push(line)
}).on("close", () => {
  main(lines)
})

// node index.js < a.in > a.out

function main(input) {
  console.log("hi ", input)
}
