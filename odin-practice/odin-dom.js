//console.log('hello');
//const container = document.querySelector("#container");
////console.log(container);
//const newPar = document.createElement('p');
////console.log(newPar);
//newPar.textContent = 'Hey! I\'m red!';
//newPar.style.color = 'red';
//container.appendChild(newPar);
//const new_h3 = document.createElement('h3');
//new_h3.style.color = 'blue';
//new_h3.textContent = 'I\’m a blue h3!';
//container.appendChild(new_h3);
//const newDiv = document.createElement('div');
//newDiv.style.backgroundColor = 'pink';
//newDiv.style.border = 'solid 3px black';
//const new_h1 = document.createElement('h1');
//new_h1.textContent = 'I\'m in a div';
//const newPar2 = document.createElement('p');
//newPar2.textContent = 'ME TOO!';
//newDiv.appendChild(new_h1);
//newDiv.appendChild(newPar2);
//container.appendChild(newDiv);
//const button = document.querySelector("button");
////console.log(button);

//button.addEventListener('onmouseover', function (e) {
//  console.log(e);
//});

//button.addEventListener("mouseover", function () {
//  button.style.color = 'pink';
//  console.log('mouseover');
//});
//button.addEventListener("mouseout", function () {
//  button.style.color = 'black';
//  console.log('mouseleft');
//})

const container = document.querySelector('#container');

const children = container.children;
console.log(children);

Array.from(children).forEach((child) => { 
  child.addEventListener('mouseover', () => {
    child.style.backgroundColor = 'pink';
  });
});

Array.from(children).forEach((child) => { 
  child.addEventListener('mouseout', () => {
    child.style.backgroundColor = 'white';
  });
});


