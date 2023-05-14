
//task1
books=[
  {title: "Lolita", author: "Vladimir Nabokov", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "In Search of Lost Time", author: "Marcel Proust", pages: 328},
  {title: "Ulysses", author: "James Joyce", pages: 224},
  {title: "Dubliners", author: "James Joyce", pages: 288},
  
]
//task2
books=[
  {title: "Lolita", author: "Vladimir Nabokov", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "In Search of Lost Time", author: "Marcel Proust", pages: 328},
  {title: "Ulysses", author: "James Joyce", pages: 224},
  {title: "Dubliners", author: "James Joyce", pages: 288},
  
]
for (let i=0;i<books.length;i++){
    console.log(books[i].title)
}
//task3
books=[
  {title: "Lolita", author: "Vladimir Nabokov", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "In Search of Lost Time", author: "Marcel Proust", pages: 328},
  {title: "Ulysses", author: "James Joyce", pages: 224},
  {title: "Dubliners", author: "James Joyce", pages: 288},
  
]
let sumpages=0
for (let i=0;i<books.length;i++){
    sumpages+=books[i].pages
}
 console.log("Summ of all pages="+sumpages)
//task4
books=[
  {title: "Lolita", author: "Vladimir Nabokov", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "In Search of Lost Time", author: "Marcel Proust", pages: 328},
  {title: "Ulysses", author: "James Joyce", pages: 224},
  {title: "Dubliners", author: "James Joyce", pages: 288},
  
]
let max=0
 let indexof_max_pages
for (let i=0;i<books.length;i++){
    if(books[i].pages>max){
        max=books[i].pages;
        indexof_max_pages=i;
    } 
}
console.log(books[indexof_max_pages].title)

//task5
books=[
  {title: "Lolita", author: "Vladimir Nabokov", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "In Search of Lost Time", author: "Marcel Proust", pages: 328},
  {title: "Ulysses", author: "James Joyce", pages: 224},
  {title: "Dubliners", author: "James Joyce", pages: 288},
  
]
 let min=(books[0].title).length
 let indexof_shortest_title=0
 for (let i=0;i<books.length;i++){
    if((books[i].title).length < min){
        min=(books[i].title).length;
        indexof_shortest_title=i;
    } 
}
console.log(books[indexof_shortest_title].title)

//task6
books=[
  {title: "Lolita", author: "Vladimir Nabokov", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "In Search of Lost Time", author: "Marcel Proust", pages: 328},
  {title: "Ulysses", author: "James Joyce", pages: 224},
  {title: "Dubliners", author: "James Joyce", pages: 288},
  []
]
for(let i=0;i<books.length-1;i++){
    books[books.length-1].push(books[i].title)
}
console.log(books)
//task7
books=[
  {title: "Lolita", author: "Vladimir Nabokov", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "In Search of Lost Time", author: "Marcel Proust", pages: 328},
  {title: "Ulysses", author: "James Joyce", pages: 224},
  {title: "Dubliners", author: "James Joyce", pages: 288},
  
]
function inarray(element, index, array) {
    if(element.name==xname){
        return true;
    }
    else{
        return false;
    }
}
authors=[]
let xname;
for(let i=0;i<books.length;i++){
    xname=books[i].author;
    if(authors.find(inarray)==undefined){
    
    authors.push({name:books[i].author,books:[]})
    for(let j=0;j<books.length;j++){
        if(books[j].author==books[i].author){
            authors[i].books.push(books[j].title)
        }
    }
    }
}
console.log(authors)
