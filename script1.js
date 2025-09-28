const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function identifiers(name, place) {
  console.log(`Hello, I am ${name} and I am from ${place}.`)
}

// identifiers("Emma", "London")

rl.question("Please tell us your name: ", (name) => {
  rl.question("Please tell us where you are from: ", (place) => {
    identifiers(name, place)
    rl.close()
  })
})