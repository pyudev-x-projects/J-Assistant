const shell = require("shelljs")
const prompt = require("prompt-sync")()
const funcs = require("./funcs")
const { exit } = require("process")

const commands = [
    "exit",
    "help",
    "weather",
    "newfolder",
    "calc"
]

console.log("Welcome to JAssistant! Enter 'help' for more a list of commands.")

while (1=="1" /* we all love JS *totally* */) {
    let cmd = prompt("Console command: ").toLowerCase()

    switch (cmd) {
        case "exit":
            exit(0)


        case "help":
            console.log("Commands: ")

            commands.forEach((v) => {
                console.log(v)
            })

            break

        case "weather":
            funcs.weather()
            break

        case "newfolder":
            funcs.newfolder()
            break

        case "calc":
            funcs.calc()
            break


        default:
            console.log("Invalid command.")
            break
    }
}

