var documents = [];

$(document).ready(function(){

  //TODO: get rid of this and do it with ejs and express same for team
  $.getJSON("/json/research.json",function(data){
    for (var i = 0; i < data.research.length; i++) {
      //console.log(data.research.length);
      var r = new createResearchLong(data.research[i])
      documents.push(r);
      //createResearch(data.research[i]);
      if(documents[i].year == "2021"){
        $("#documents2021").append(documents[i].doc);
      }
      if(documents[i].year == "2020"){
        $("#documents2020").append(documents[i].doc);
      }
      if(documents[i].year == "2019"){
        $("#documents2019").append(documents[i].doc);
      }
      if(documents[i].year == "2018"){
        $("#documents2018").append(documents[i].doc);
      }
      if(documents[i].year == "2017"){
        $("#documents2017").append(documents[i].doc);
      }
      if(documents[i].year == "2016"){
        $("#documents2016").append(documents[i].doc);
      }
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
    docInnerContainer.appendChild(docSubTitle);
    docInnerContainer.appendChild(docAuthors);
    docInnerContainer.appendChild(docTitle);

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

  function createResearchLong(d){
    this.year = d.year;
    this.tags = d.tags;
    this.doc = document.createElement("a");
    //let doca = document.createElement("a");
      let docInnerContainer = document.createElement("div");
      docInnerContainer.setAttribute("class","doc-flex");
      let docContent = document.createElement("div");
      docContent.setAttribute("class","content");
        let docImgContainer = document.createElement("div");
          docImgContainer.setAttribute("class","img-container");
          let grad = document.createElement("div");
          grad.setAttribute("class","gradient");
          let img = document.createElement("div");
          img.setAttribute("style","background-image:url(\"/images/documents/thumbnails/"+d.img+"\")");
          img.setAttribute("class","img");
        let docAuthors = document.createElement("div");
        let docTitle = document.createElement("h1");
        docTitle.setAttribute("class","title");
        let docLocDateFlex = document.createElement("div");
        docLocDateFlex.setAttribute("class","subtitle");
          let docLoc = document.createElement("div");
          let docDate = document.createElement("div");

    this.doc.setAttribute("class", "document");
    this.doc.setAttribute("href", d.src);
    this.doc.setAttribute("target","_blank");
    docAuthors.innerHTML = d.authors;
    docAuthors.setAttribute("class","document-author");
    docTitle.innerHTML = d.title;
    docLoc.innerHTML = d.subTitle;
    docDate.innerHTML = d.date;

    this.doc.appendChild(docInnerContainer);
    //docInnerContainer.appendChild(docImgContainer);
    docInnerContainer.appendChild(img);
      //docImgContainer.appendChild(img);
      //docImgContainer.appendChild(grad);
    docInnerContainer.appendChild(docContent);
    docContent.appendChild(docAuthors);
    docContent.appendChild(docTitle);
    docContent.appendChild(docLocDateFlex)
    docLocDateFlex.appendChild(docLoc);
    docLocDateFlex.appendChild(docDate);

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
