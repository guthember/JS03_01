let inputNameFilter = document.getElementById("nameFilter");
let listItemList = document.getElementById("itemList");

let nameFilter = "";
let itemList = [
    "Raging Bull",
    "Aliens",
    "Reservoir Dogs",
    "WALL-E",
    "The Treasure of the Sierra Madre",
    "Whiplash",
    "Some Like It Hot",
    "Double Indemnity",
    "Taxi Driver",
    "Vertigo",
    "On the Waterfront",
    "Saving Private Ryan",
    "Inception",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Silence of the Lambs"
];


itemList.sort((a, b) => { return a.localeCompare(b); })
//createList();

RenderList();

function createList() {
    for (let i = 0; i < itemList.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(itemList[i]));
        listItemList.appendChild(li);
    }
}

function RenderList() {
    listItemList.innerText = "";
    itemList.forEach( (item, index) => { RenderListItem(item); });
}

function RenderListItem(text) {
    let newListItem = document.createElement("li");
    newListItem.innerText = text;
    listItemList.appendChild(newListItem);
}

