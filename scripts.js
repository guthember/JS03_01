// elemek összegyűjtése

let inputNameFilter = document.getElementById('nameFilter');
let resultList = document.getElementById('resultList');

// változók
let nameFilter = '';
let list = [
  'Get Out',
  'Dunkirk',
  'Lady Bird',
  'Blade Runner 2049',
  'A Ghost Story',
  'The Florida Project',
  'Phantom Thread',
  'Call Me By Your Name',
  'Raw',
  'The Shape of Water',
  'Okja',
  'Personal Shopper',
  'It Comes at Night',
  'Good Time',
  'Star Wars: The Last Jedi',
];

// adatok rendezése
list.sort(function(a, b) {
  return a.localeCompare(b);
});

// lista kiírása
RenderList();

//////////////////////////////////////////////////

// feliratkozás
inputNameFilter.addEventListener('keyup', UpdateFilter);

//////////////////////////////////////////////////

// lista renderelés

function AddListItem(text){
    let newItem = document.createElement('li');
    newItem.innerText = text;
    resultList.appendChild(newItem);
}

function RenderList(){
    // reset
    ResetList();
    
    // filter
    let filteredList = list.filter(function(item){
        if(nameFilter == ''){
            return true;
        }
        
        // pozíció megállapítása
        let position = item.toLowerCase().indexOf(nameFilter.toLowerCase());
        
        return position != -1;
    });

    // render
    filteredList.forEach(function(item){
        AddListItem(item);
    });
}

function ResetList(){
    resultList.innerText = '';
}

// filter frissítése

function UpdateFilter(){
    
    // adatok átadása
    nameFilter = this.value

    // lista kiírása
    RenderList();
}