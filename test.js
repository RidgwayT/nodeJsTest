const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
content.classList.add('para');
para.textContent = 'Hey I am red';
para.style.cssText = 'color: red';
container.appendChild(para);

const hThree = document.createElement('h3');
content.classList.add('hThree');
hThree.textContent = 'I am a blue H3';
hThree.style.cssText = 'color: blue';
container.appendChild(hThree);

const blackPink = document.createElement('div');
content.classList.add('blackPink');
blackPink.style.backgroundColor = 'pink';
blackPink.style.border = '2px solid black';


const hOne = document.createElement('h1');
content.classList.add('hOne');
hOne.textContent = 'I am in a div';


const lilPara = document.createElement('p');
content.classList.add('lilPara');
lilPara.textContent = 'ME TOO';

blackPink.appendChild(hOne);
blackPink.appendChild(lilPara);
container.appendChild(blackPink);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
})

function alertFunction() {
    alert("YAY! YOU DID IT!");
 }

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  })

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
button.addEventListener('click', () => {
    alert(button.id);
    });
});











 