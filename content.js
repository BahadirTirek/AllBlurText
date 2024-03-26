//content.js
function blurText(node) {
    node.style.color = 'transparent';
    node.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';
}


function removeBlurText(node) {
    node.style.color = '';
    node.style.textShadow = '';
}

function blurAllText() {
    var allTextNodes = document.querySelectorAll('body *');
    allTextNodes.forEach(blurText);
}

function removeBlurFromAllText() {
    var allTextNodes = document.querySelectorAll('body *');
    allTextNodes.forEach(removeBlurText);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'blurText') {
        blurAllText();
    } else if (message.action === 'removeBlurText') {
        removeBlurFromAllText();
    }
});