import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output })

async function identifiers(name, place) {
  console.log(`Hi, I'm ${name} and I'm from ${place}.`);
}

async function main() {
  try {
    const name = await rl.question("Please enter your name: ");
    const place = await rl.question("Please enter where you are from: ");
    identifiers(name, place);
  } finally {
    rl.close()
  }
}

main();