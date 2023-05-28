const shell = require("shelljs")
const prompt = require("prompt-sync")()
const os = require("os")

const HOMEPATH = os.homedir()

module.exports = {
    HOMEPATH,
    weather,
    newfolder
}

function weather() {
    let city = prompt("Enter your city: ")

    shell.exec(`curl wttr.in/${city}`)
}

function newfolder() {
    let folder_name = prompt("Enter a folder name without spaces: ")
    
    shell.mkdir(`${HOMEPATH}/Desktop/${folder_name}`)
}