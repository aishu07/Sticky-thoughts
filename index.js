var popupitem=document.querySelector(".popupitem")
var popupbox=document.querySelector(".popupbox")
var addpop=document.getElementById("popup")
addpop.addEventListener("click",function(){
    popupitem.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancelthought")
var additem=document.getElementById("addthought")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupitem.style.display="none"
    popupbox.style.display="none"

})

//book,add,title,author,thoughts
var books=document.querySelector(".container")
var title=document.getElementById("title")
var author=document.getElementById("author")
var thoughts=document.getElementById("thoughts")



additem.addEventListener("click",function(event){
    event.preventDefault()
    var divi=document.createElement("div")
    divi.setAttribute("class","book")
    divi.innerHTML=`<h1>${title.value}</h1>
    <h2>${bookauthor.value}</h2>
    <p>${thoughts.value}</p>
    <button onclick="deleteitem(event)">delete</button>`
    books.append(divi)
    popupbox.style.display="none"
    popupitem.style.display="none"
})


function deleteitem(event){
    event.target.parentElement.remove()
}