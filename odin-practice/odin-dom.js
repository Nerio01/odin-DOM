//console.log('hello');
const container = document.querySelector("#container");
//console.log(container);
const newPar = document.createElement('p');
//console.log(newPar);
newPar.textContent = 'Hey! I\'m red!';
newPar.style.color = 'red';
container.appendChild(newPar);
const new_h3 = document.createElement('h3');
new_h3.style.color = 'blue';
new_h3.textContent = 'I\’m a blue h3!';
container.appendChild(new_h3);
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'pink';
newDiv.style.border = 'solid 3px black';
const new_h1 = document.createElement('h1');
new_h1.textContent = 'I\'m in a div';
const newPar2 = document.createElement('p');
newPar2.textContent = 'ME TOO!';
newDiv.appendChild(new_h1);
newDiv.appendChild(newPar2);
container.appendChild(newDiv);

///
//a <div> with a black border and pink background color with the following elements inside of it:
//
//    another <h1> that says “I’m in a div”
//    a <p> that says “ME TOO!”
//    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
//
//

