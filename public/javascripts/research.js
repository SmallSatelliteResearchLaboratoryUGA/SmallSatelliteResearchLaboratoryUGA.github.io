var documents = [];

$(document).ready(function(){

  //TODO: get rid of this and do it with ejs and express same for team
  $.getJSON("/json/research.json",function(data){
    for (var i = 0; i < data.research.length; i++) {
      //console.log(data.research.length);
      var r = new createResearch(data.research[i])
      documents.push(r);
      //createResearch(data.research[i]);
      $("#container-documents").append(documents[i].doc);
      //console.log("appended");
    }
  });
  document.getElementById("filter-select").onchange = function(){
    var val = document.getElementById("filter-select");
    val = val.options[val.selectedIndex].value;
    filterDocuments();
  };

  function createResearch(d){
    this.tags = d.tags;
    this.doc = document.createElement("div");
    let doca = document.createElement("a");
    let docInnerContainer = document.createElement("div");
    let docAuthors = document.createElement("h5");
    let docTitle = document.createElement("h4");
    let docSubTitle = document.createElement("h5");
    let docImg = document.createElement("img");
    let docImgContainer = document.createElement("div");

    this.doc.setAttribute("class", "document");
    doca.setAttribute("href", d.src);
    doca.setAttribute("target","_blank");
    docImg.setAttribute("src","/images/documents/thumbnails/"+d.img);
    docAuthors.innerHTML = d.authors;
    docAuthors.setAttribute("class","document-author");
    docTitle.innerHTML = d.title;
    docSubTitle.innerHTML = d.subTitle + ", " + d.date;
    docImgContainer.setAttribute("class", "img-container");

    this.doc.appendChild(doca);
    doca.appendChild(docInnerContainer);
    docImgContainer.appendChild(docImg);
    if(!(screen.width <= 699))docInnerContainer.appendChild(docImgContainer);
    docInnerContainer.appendChild(docAuthors);
    docInnerContainer.appendChild(docTitle);
    docInnerContainer.appendChild(docSubTitle);

    this.hidden = false;

    //functions
    this.show = function(b){
      if(b){
        this.doc.setAttribute("class","document");
        this.hidden = false;
      }else{
        this.doc.setAttribute("class","document-hidden");
        this.hidden = true;
      }
    };

  }

  // TODO: re filter with keyword after changin tags
  //filter by tag
  function filterDocuments(){

    //filter tags
    let tagged = [];

    var type = document.getElementById("filter-select");
    type = type.options[type.selectedIndex].value;

    if(type == "all"){
      documents.forEach(function(d){
        //d.show(true);
        tagged.push(d);
      });
    }else {
      documents.forEach(function(d){
        if (d.tags.includes(type)) {
          //d.show(true);
          tagged.push(d);
        }else{
          d.show(false);
        }
      });
    }

    //filter key
    let val = document.getElementById("filter-select");
    val = val.options[val.selectedIndex].value;
    let filter = document.getElementById("filter-search").value.toUpperCase();
    tagged.forEach(function(d){
      if (d.doc.innerHTML.toUpperCase().indexOf(filter) > -1) {
        d.show(true);
        console.log("doc contains");
      }else{
        d.show(false);
      }
    });

  }

  function updateKey(){
    let val = document.getElementById("filter-select");
    val = val.options[val.selectedIndex].value;
    let filter = document.getElementById("filter-search").value.toUpperCase();
    documents.forEach(function(d){
      if (d.doc.innerHTML.toUpperCase().indexOf(filter) > -1) {
        d.show(true);
        console.log("doc contains");
      }else{
        d.show(false);
      }
    });
    console.log("update");
  }

  document.getElementById("filter-search").addEventListener("input",function(){
    filterDocuments();
  });

  function showAll(){
    documents.forEach(function(d){
      d.show(true);
    });
  }
    //filterDocuments(val);
  });
