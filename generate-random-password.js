const elPasswordOutput = document.getElementById('password')
const btnGeneratePassword = document.getElementById('generatePassword')

function getRandomInt(maxInt) {
    return Math.floor(
        Math.random() * Math.floor(maxInt)
    )
}

function generateRandomPassword() {
    let password = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    let randomChr
    let randomNum

    for (let i = 1; i < 21; i++) {
        if (i % 7 === 0) {
            randomChr = '-'
        } else {
            randomNum = getRandomInt(characters.length)
            randomChr = characters[randomNum]
        }
        password += randomChr
    }

    return password
}

function writePassword() {
    elPasswordOutput.innerText = generateRandomPassword()
}

btnGeneratePassword.addEventListener('click', writePassword)
document.addEventListener('DOMContentLoaded', writePassword)