const shell = require("shelljs")
const prompt = require("prompt-sync")()
const os = require("os")

const HOMEPATH = os.homedir()

module.exports = {
    HOMEPATH,
    weather,
    newfolder,
    calc,
    curl
}

function weather() {
    let city = prompt("Enter your city: ")

    shell.exec(`curl wttr.in/${city}`)
}

function newfolder() {
    let folder_name = prompt("Enter a folder name without spaces: ")
    
    shell.mkdir(`${HOMEPATH}/Desktop/${folder_name}`)
}

function calc() {
    let n1 = prompt("Enter number 1: ")
    let n2 = prompt("Enter number 2: ")


    if (Number.parseFloat(n1) && Number.parseFloat(n2)) {
        console.log("Addition: ", Number(n1) + Number(n2))
        console.log("Subtraction: ", Number(n1) - Number(n2))
        console.log("Multipliation: ", Number(n1) * Number(n2))
        console.log("Division: ", Number(n1) / Number(n2))
        console.log("Modulus: ", Number.parseInt(n1) % Number.parseInt(n2))
        console.log("Power: ", Math.pow(Number(n1), Number(n2)))
    }
}

function curl() {
    let url = prompt("Lets cURL it! Enter a URL: ")

    shell.exec(`curl ${url}`)
}