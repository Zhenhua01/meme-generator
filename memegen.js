"use strict";

let memes = [];

function showMemes(){
  let memeArea = document.getElementById("memes");
  let html = "";

  for (let i=0; i<memes.length; i++) {
    let meme = memes[i];
    let img = `<img src="${meme.imageurl}">`;
    let toptext = `<p>${meme.toptext}</p>`;
    let bottomtext = `<p>${meme.bottomtext}</p>`;
    let deleteBtn = `<button id="delete-${i}">Remove Meme</button>`
    html += `
  <div id="meme-${i}" class="meme">
    <div class="image">${img} </div>
    <div class="toptext"> ${toptext} </div>
    <div class="bottomtext"> ${bottomtext} </div>
    <div class="deletebtn"> ${deleteBtn} </div>
  </div>`;
  }
  memeArea.innerHTML = html;
}

function handleButton(event){
  if(event.target.id.startsWith("delete-")){
    let memeId = Number(event.target.id.replace("delete-", ""));
    deleteMeme(memeId);
  }
  showMemes();
}

function deleteMeme(id){
  memes.splice(id, 1);
}

function handleSubmit(event){
  event.preventDefault();

  let form = document.getElementById("meme-form");
  let imageurl = form.imageurl.value;
  let toptext = form.toptext.value;
  let bottomtext = form.bottomtext.value;

  addMeme(imageurl, toptext, bottomtext);
  showMemes();

  document.getElementById("imageurl").value='';
  document.getElementById("toptext").value='';
  document.getElementById("bottomtext").value='';
}

function addMeme(imageurl, toptext, bottomtext){
  memes.push({
    imageurl: imageurl,
    toptext: toptext,
    bottomtext: bottomtext,
  });
}

document.getElementById("memes").addEventListener("click", handleButton);
document.getElementById("meme-form").addEventListener("submit", handleSubmit);