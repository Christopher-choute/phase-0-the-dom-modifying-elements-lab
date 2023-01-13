// Write your code here
main.remove()

const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent = "Chris is the champion"

const evenNewerHeader = document.getElementById('victory');
evenNewerHeader.innerHTML = 'Chris is the champion';

console.log(evenNewerHeader)