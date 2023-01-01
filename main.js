let li = document.getElementsByClassName("items");
let searsh = document.getElementById("searsh");
let range = document.getElementById("range");
let div = document.getElementById("container")
var courses = [{
    image: 'images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: 'images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: 'images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: 'images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: 'images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: 'images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: 'images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: 'images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: 'images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: 'images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: 'images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: 'images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: 'images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: 'images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: 'images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: 'images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: 'images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: 'images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: 'images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]
 for ( let i = 0 ; i< courses.length ; i++){ //for loop
    div.innerHTML +=`
    <div class = "crd">
        <div >
           <img src= "${courses[i].image}" class="imge" alt="">
        </div>
        <div class="detail">
        <p class = "title">${courses[i].title}</p>
        <span >$</span> 
        <p class = "price">${courses[i].price}</p>
        </div>
    </div>`;
} ;
range.addEventListener("change", (e) => {
    for (var i = 0; i < courses.length; i++) {
      div.children[i].style.display = "block";
    }
    for (var i = 0; i < courses.length; i++) {
      let text = div.children[i].children[1].children[2].outerText;
      let x = text.slice(0,text.length-1)
      if (+x > e.target.value) {
        div.children[i].style.display = "none";
      }
    }
    range.nextElementSibling.innerHTML = `valeur : ${e.target.value}$`;
  });

for (var i = 0; i < 5; i++) {
    li[i].addEventListener("click", (e) => {
      if (e.target.innerText !== "All") {
        for (var i = 0; i < courses.length; i++) {
          div.children[i].style.display = "block";
        }
        for (var i = 0; i < courses.length; i++) {
          if (!div.children[i].children[1].children[0].outerText.includes(e.target.innerText)) {
            div.children[i].style.display = "none";
          }
        }
      } else {
        for (var i = 0; i < courses.length; i++) {
          div.children[i].style.display = "block";
        }
      }
    });
  }

  searsh.addEventListener("input", (e) => {
    if (div.getElementsByClassName("empty").length > 0) {
      div.removeChild(p);
    }
  
    for (var i = 0; i < courses.length; i++) {
      div.children[i].style.display = "block";
    }
    for (var i = 0; i < courses.length; i++) {
      var text = e.target.value;
      if (!div.children[i].children[1].children[0].outerText.includes(text)) {
        div.children[i].style.display = "none";
      }
    }
    if (displayedElements() === 0) {
      div.appendChild(p);
    }
  });
