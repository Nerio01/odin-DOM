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
// // parentNode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// parentElement 
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement);