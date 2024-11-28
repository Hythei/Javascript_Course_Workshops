"use strict";
function greet(name) {
    return `Hello, ${name}!`;
}
const appElement = document.getElementById('app');
if (appElement) {
    appElement.textContent = greet('TypeScript');
}
