// <<<<<<<   START OF 1ST VIDEO - DOM BASICS >>>>>>>

// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// document.title = 123;
// console.log(document.title);
// console.log(document.head);
//console.log(document.all);

// // console.log(document.all[10]);
// // console.log(document.forms);
// // console.log(document.links);

// // <<< GET ELEMENT BY ID >>>
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // DIFFERENCE BETWEEN .innerText & .innerHTML
// // console.log(headerTitle.innerText);
// // console.log(headerTitle.innerHTML);
// // headerTitle.innerHTML = '<h3>Hello</h3>'; // changes header to Hello
// // header.style.borderBottom = 'solid 3px #000';

// // <<< GETTING ELEMENTS BY CLASS NAME >>> 
// const items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // items[1].textContent = 'Hello 2'; // changes item 2 to 'Hello 2'
// // items[1].style.backgroundColor = 'yellow'; // changes bkg color to yellow

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// // <<< GETTING ELEMENTS BY TAG NAME >>>

// const li = document.getElementsByClassName('list-group-item');
// for(let i = 0; i < li.length; i++){
//     items[i].style.color = 'red'; // changes the color of text for Items
// }

// <<< QUERY SELECTORS >>>

// querySelector only grabs the first matching element (default behaviour),
// ingoring the other matches
// const header = document.querySelector('h1');
// header.textContent = 'Changed by using querySelector'; 

// const header1 = document.querySelector('#main-header'); // - header element selected by ID of 'main-header' as indicated by #
// header1.style.borderBottom = 'solid 4px #ccc'; // - adds the gray bottom border to the header box

// const input = document.querySelector('input');
// input.value = 'Hello world';
// // querySelector works with any CSS property
// const submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"; // changes value of submit button to SEND

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // - changes the text of first Item to red
// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'; // color of last Item was changed to blue
//                                // by using a pseudoselector to target it
// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'; // color of second Item was changed to coral
                                  // by using a nth-child pseudoselector 
// <<< QUERY SELECTOR ALL >>> 
// const titles = document.querySelectorAll('.title');
// console.log(titles); // - returns a NodeList collection
//                      // - Array methods can be applied to a NodeList
// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'; // changes bkg color of 
//                                               // ODD Items to grey
//     even[i].style.backgroundColor = 'coral'; // changes bkg color of 
//                                              // EVEN Items to coral
     
// } 

// <<<<<<< END OF 1ST VIDEO - DOM BASICS  >>>>>>>

// <<<<<<< START OF 2ND VIDEO - TRAVERSING THE DOM >>>>>>>

const itemList = document.querySelector('#items');
// PARENTS 

// parentNode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode); // - nodes can be chained 
// to access the parent nodes of the currect parent

// parentElement 
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement);
// parentNode and parentElement are functionally interchangeable

// CHILDREN

// Child Nodes  
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
//console.log(itemList.firstChild);
// this gives us a text node 
// same as child nodes this will include all the whitespaces
// so its not recommended for use 

// firstElementChild
//console.log(itemList.firstElementChild);
// This one only returns the element
// preferred way to work with child nodes 

// lastChild 
// returns the last child along with whitespases 
//console.log(itemList.lastChild);

// lastElementChild 
// returns the last child element only 
//console.log(itemList.lastElementChild);

// SIBLINGS

//nextSibling 
//returns the next sibling along wth all whitespaces
//console.log(itemList.nextSibling);

// nextElementSibling
// only returns the next sibling element
//console.log(itemList.nextElementSibling);

//previousSibling
// returns previous sibling element along with whitespaces
//console.log(itemList.previousSibling);

// previosElementSibling 
// returns only previous sibling element
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

// CREATING DOM ELEMENTS 

// createElement
// lets create a div 
//const newDiv = document.createElement('div');

// adding a class to the new element 
//newDiv.className = 'hello';

// adding an id to a new element 
//newDiv.id = 'hello1';

// adding attribute 
//newDiv.setAttribute('title', 'hello div');

// Creating a text node 
//const newDivText = document.createTextNode('Hello world');

// Adding a text node to a a newly created element
//newDiv.appendChild(newDivText);

// Appending a new element into the actual DOM 
// lets put it right above the <div> with 'container' class in our HTML 
// first we need to create variables that will select the header with 
// container class and we also need to select the h1 child element of that
// same <div>

  
//const container = document.querySelector('header .container'); 
//const h1 = document.querySelector('header h1');
// now we have valiable to work with 

// insertBefore
// this method takes the element to-be-inserted as a first agrument, and element before which to insert as a second one. 
// this is why we needed the <h1> 

//container.insertBefore(newDiv, h1);
// now we successfully added a new element to HTML tree
//console.log(newDiv);

// EVENTS 

// adding the event listener 
// but first we will add a new button under the <ul>
//const button = document
  //.getElementById('button')
  //.addEventListener('click', buttonClick);
// event functions can be both names and unnamed 

//function buttonClick(e){
  //console.log('Button clicked!');
  //document.getElementById('header-title').textContent = 'Changed';
  //document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  ////console.log(e);
  //console.log(e.target); // .target method gives us the input instead of the element
  //console.log(e.target.id);
  //console.log(e.target.className);
  ////console.log(e.target.classList);
  //console.log(e.type); // tell us what type of the event that is 
  //console.log(e.clientX); // position calculated from the browser window by X axis
  //console.log(e.clientY); // same for Y axis
  //console.log(e.altKey); // gives tru of false dependidng on whether an ALT key is pressed 
//}

// e - is our event parameter 

// Keyboard Events 



// Click Events 
//const button = document.getElementById('button');
//button.addEventListener('mousedown', runEvent)
//function runEvent(e){
//  console.log('EVENT TYPE: '+e.type);
//}
//


