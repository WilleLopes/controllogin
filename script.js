const ulBlock2 = document.querySelector("ul.block2");

for (let quadrado = 0; quadrado < 100; quadrado++){

const li = document.createElement("li");

const random = (min, max) => Math.random() * (max - min) + min

const size = Math.floor(random(30, 93));

const position = random(1, 99);

const delay = random(50, 0.1);
const duration = random(18, 12);


li.style.width = `${size}px`;
li.style.height = `${size}px`;
li.style.bottom = `-${size}px`;

li.style.right = `${position}%`;

li.style.animationDelay = `${delay}s`;
li.style.animationDuration = `${duration}s`;




ulBlock2.appendChild(li)
}