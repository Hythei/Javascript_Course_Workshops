function greet(name: string): string { 
    return `Hello, ${name}!`; 
} 

const appElement = document.getElementById('app'); 
if (appElement) { 
    appElement.textContent = greet('TypeScript');
}
