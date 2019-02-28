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

let graph = []

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
}

// function createPath(graph) {
//   let stack = []
//   while(stack.length > 0) {

//   }
// }

function getQuality(obj1, obj2) {
  let res = []
  let d1 = difference(obj1.tags, obj2.tags)
  let d2 = difference(obj2.tags, obj1.tags)
  let i = intersection(obj1.tags, obj2.tags)
  res.push(d1.length)
  res.push(d2.length)
  res.push(i.length)
  return Math.min(...res)
}

function intersection(aa, bb) {
  let a = new Set(aa)
  let b = new Set(bb)
  return [...new Set([...a].filter(x => b.has(x))).values()]
}

function difference(aa, bb) {
  let a = new Set(aa)
  let b = new Set(bb)
  return [...new Set([...a].filter(x => !b.has(x))).values()]
}
