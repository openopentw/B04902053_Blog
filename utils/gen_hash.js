const bcrypt = require('bcrypt')
const readline = require('readline')

const saltRounds = 10

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Input your password: ', (answer) => {
  bcrypt.hash(answer, saltRounds).then((hash) => {
    console.log(`Now you get your hash: ${hash}`)
  })
  rl.close()
})
