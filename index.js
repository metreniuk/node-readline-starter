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

let graph = {}

function main(input) {
  let photos = input.slice(1).map((x, id) => {
    let [orientation, tagsCount, ...tags] = x.split(" ")
    return {
      id,
      orientation,
      tagsCount,
      tags,
    }
  })
  console.log(photos)
}
