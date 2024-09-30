
const btn = document.getElementById("btn")

btn.addEventListener("click",() => {
const text_box = document.getElementById("textInput")
let listOfarrays = [];

if (text_box.value == "") {
    alert("Enter a word")
} else {

listOfarrays.push(text_box.value)
text_box.value = ""

let arrayOfitems = localStorage.setItem("arrayOfitems", JSON.stringify(listOfarrays))


let myListofItems = JSON.parse(localStorage.getItem("arrayOfitems"))
  console.log(myListofItems)
for (let i = 0; i < listOfarrays.length; i++) {
    const element = listOfarrays[i];
    console.log(element)
    
}

}

})
 
const user_name = document.getElementById("user_name");
user_name.innerHTML = 100;






/*

// Sample data for localStorage (this can be done once in the console or elsewhere in your code)
localStorage.setItem('item1', 'Apple');
localStorage.setItem('item2', 'Banana');
localStorage.setItem('item3', 'Cherry');

// Function to display items from localStorage
function displayItems() {
    const itemList = document.getElementById('itemList');
    
    // Clear the list before displaying
    itemList.innerHTML = '';

    // Iterate through localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        // Create a list item for each entry
        const listItem = document.createElement('li');
        listItem.textContent = ` ${value}`;
        
        // Append the list item to the ul
        itemList.appendChild(listItem);
    }
}

// Call the function to display items
displayItems();

*/