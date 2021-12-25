function writeTextToClipboard(element) {
    const textToCopy = document.getElementById(element).innerText

    navigator.clipboard.writeText(textToCopy).then(() => {
        console.info(`'${textToCopy}' written to clipboard`)
    }, () => {
        console.warn(`Text (${textToCopy}) couldn't be written to clipboard`);
    })
}

function writeTextToClipboardClickHandler() {
    writeTextToClipboard('password')
}

const btnCopyPassword = document.getElementById('copyPassword')

btnCopyPassword.addEventListener('click', writeTextToClipboardClickHandler)