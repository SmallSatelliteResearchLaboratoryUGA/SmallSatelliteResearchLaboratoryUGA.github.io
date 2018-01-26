var documents = [];

$(document).ready(function(){
  //console.log("test");
  $.getJSON("research.json",function(data){
    console.log("test2");
    for (var i = 0; i < data.research.length; i++) {
      console.log(data.research.length);
      var r = new createResearch(data.research[i])
      documents.push(r);
      //createResearch(data.research[i]);
      $("#container-documents").append(documents[i].doc);
      console.log("appended");
    }
  });
  document.getElementById("filter-select").onchange = function(){
    var val = document.getElementById("filter-select");
    val = val.options[val.selectedIndex].value;
    filterDocuments(val);
  };

  function createResearch(d){
    this.tags = d.tags;
    this.doc = document.createElement("div");
    let doca = document.createElement("a");
    let docInnerContainer = document.createElement("div");
    let docTitle = document.createElement("h4");
    let docImg = document.createElement("img");
    let docImgContainer = document.createElement("div");

    this.doc.setAttribute("class", "document");
    doca.setAttribute("href",d.src);
    doca.setAttribute("target","_blank");
    docImg.setAttribute("src","assets/images/documents/"+d.img);
    docTitle.innerHTML = d.title;
    docImgContainer.setAttribute("class", "img-container");

    this.doc.appendChild(doca);
    doca.appendChild(docInnerContainer);
    docImgContainer.appendChild(docImg);
    docInnerContainer.appendChild(docImgContainer);
    docInnerContainer.appendChild(docTitle);

  }
  function filterDocuments(type){
    if(type == "all"){
      documents.forEach(function(d){
        d.doc.setAttribute("class", "document");
      });
    }else {
      documents.forEach(function(d){
        if (d.tags.includes(type)) {
          d.doc.setAttribute("class", "document");
        }else{
          d.doc.setAttribute("class", "document-hidden");
        }
      });
    }
  }
});
