var addnotesplus = document.querySelector('.addnotes-button');
var popupoverlay= document.querySelector('.overlay');
var popupbox = document.querySelector('.popupbox');
addnotesplus.addEventListener("click",function(){
    popupoverlay.style.display='block';
    popupbox.style.display='block';
});

var cancelpopup = document.querySelector('.cancel-button');
cancelpopup.addEventListener("click",function(){
    popupoverlay.style.display='none';
    popupbox.style.display='none';
})

var title =document.querySelector('.title-box');
var notes= document.querySelector('.notes-box');
var addbutton = document.querySelector('.add-button');
var container = document.querySelector('.container');
addbutton.addEventListener("click",function(){
    var titlecontent= title.value;
    var notescontent = notes.value;
    var div=document.createElement("div");
    div.setAttribute("class","notesbox");
    div.innerHTML=`<h1>${titlecontent}</h1>
    <p>${notescontent}</p>
    <button class="del-button" onclick="deletenotes(event)">Delete</button>`
    container.append(div);
    popupoverlay.style.display='none';
    popupbox.style.display='none';
    var emptytitle = document.querySelector('.title-box');
    var emptynotes = document.querySelector('.notes-box');
    emptynotes.value="";
    emptytitle.value="";

})


function deletenotes(event){
    event.target.parentElement.remove();

}