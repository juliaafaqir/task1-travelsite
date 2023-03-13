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

const itemInput = document.getElementById("new-item");
const addButton = document.getElementsByTagName("button")[0];
const incompleteItemsHolder = document.getElementById("incomplete-items"); 
const completedItemsHolder = document.getElementById("complete-items");

function createNewItemElement(itemString) {

    const listItem = document.createElement("li");

    const checkBox = document.createElement("input");

    const label = document.createElement("label");

    const editInput = document.createElement("input");

    const editButton = document.createElement("button");

    const deleteButton = document.createElement("button");
  

    
  checkBox.type = "checkBox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = itemString;
  
  //appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

	return listItem;
}


//Add a new item
function addItem() {
  console.log("Add Item...");
  const listItem = createNewItemElement(itemInput.value);

  incompleteItemsHolder.appendChild(listItem);
  bindItemEvents(listItem, itemCompleted);
  itemInput.value = "";
}

//Edit an existing item
const editItem = function() {
    console.log("Edit Item...");
  
const listItem = this.parentNode;
  
const editInput = listItem.querySelector("input[type=text]");
const label = listItem.querySelector("label");
 
const containsClass = listItem.classList.contains("editMode");
  
  
  if (containsClass) {
      label.innerText = editInput.value;
  } else {
     	editInput.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}

//Delete an existing item
function deleteItem() {
    console.log("Delete Item...");

    const listItem = this.parentNode;
    const ul = listItem.parentNode;
  
  	ul.removeChild(listItem);
}

//Mark a item as complete
function itemCompleted() {
   console.log("Item Complete...");


   const listItem = this.parentNode;
   completedItemsHolder.appendChild(listItem);
   bindItemEvents(listItem, itemIncomplete);
}


//Mark a item as incomplete
const itemIncomplete = function() {
  console.log("Item Incomplete...");

  const listItem = this.parentNode;
  incompleteItemsHolder.appendChild(listItem);
  bindItemEvents(listItem, itemCompleted);
}


//Set the click handler to the addItem function
addButton.addEventListener("click", addItem); 


const bindItemEvents = function(itemListItem, checkBoxEventHandler) {
  	console.log("Bind List item events");
  	// select listitems chidlren
  	const checkBox = itemListItem.querySelector('input[type="checkbox"]');
    const editButton = itemListItem.querySelector("button.edit");
    const deleteButton = itemListItem.querySelector("button.delete");
		//bind editItem to edit button
  	editButton.onclick = editItem;
		//bind deleteItem to delete button
 		deleteButton.onclick = deleteItem;
		//bind checkBoxEventHandler to checkbox
  	checkBox.onchange = checkBoxEventHandler;
  
}

//cycle over incompleteItemHolder ul list items
for (var i = 0; i < incompleteItemsHolder.children.length; i ++) {
  //bind events to list item's children (itemCompleted)	
  bindItemEvents(incompleteItemsHolder.children[i], itemCompleted);
}

//cycle over completedItemHolder ul list items
for (var i = 0; i < completedItemsHolder.children.length; i ++) {
  //bind events to list item's children (itemCompleted)	
  bindItemEvents(completedItemsHolder.children[i], itemIncomplete);
}


// const listItems = [];

//   function addListItem() {
//     console.log("submitted");
//   }

//   function deleteListItem(deleteItem) {
 

//   }

//   function updateDisplay(listItems){

//   }



