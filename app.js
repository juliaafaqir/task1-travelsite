'use strict';

function chooseTheme() {
    var color = prompt("What color would you like the site Theme to be?");
    switch (color){
        case 'red':
            document.querySelector(".top-footer").style.backgroundColor = '#DF3737';
            document.querySelector(".bottom-footer").style.backgroundColor = '#A70C0C';
            document.querySelector(".header").style.backgroundImage = "url(assets/images/red-bg.jpg)";
            break;

        case 'blue':
            document.querySelector(".top-footer").style.backgroundColor = '#6B94A0';
            document.querySelector(".bottom-footer").style.backgroundColor = '#92C9DA';
            document.querySelector(".header").style.backgroundImage = "url(assets/images/blue-bg.jpg)";

            break;

        case 'green':
            document.querySelector(".top-footer").style.backgroundColor = '#BCE8A0';
            document.querySelector(".bottom-footer").style.backgroundColor = '#5EA460';
            document.querySelector(".header").style.backgroundImage = "url(assets/images/green-bg.jpg)";

            break;  
            
        case 'purple':
            break;          

    }
    
  }

//   --------------------------------------------------
let bucketList=[];

function BucketList(itemName) {
  this.itemName = itemName;
  
  bucketList.push(this);
}

// render method
let container = document.getElementById("list-items");

let ulTag = document.createElement("ul");

container.appendChild(ulTag);

BucketList.prototype.render = function () {
  // create the li tag
  let itemTag = document.createElement("li");

  // append
  ulTag.appendChild(itemTag);

  // add text content
  itemTag.textContent = `${this.itemName}`;
};

let formTag = document.getElementById("form");

formTag.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.newItem.value);
  let itemName = event.target.newItem.value;
  let newItem = new BucketList(itemName);

  newItem.render();

  setItem(); 
}

function setItem() {
    let stringifiedArr= JSON.stringify(bucketList);

    localStorage.setItem("bucketList",stringifiedArr);
}

function getItem() {
    let data=localStorage.getItem("bucketList");

    let parsedArr= JSON.parse(data);

    for (let i = 0; i < parsedArr.length; i++) {
        const list = parsedArr[i];
        let newListInstance = new BucketList(list.item);
        newListInstance.render();
    }
}

getItem();




