var profiles = [];
var buttons = [];
$(document).ready(function(){

    buttons.push(document.getElementById("Everyone"));
    buttons.push(document.getElementById("2020"));
    buttons.push(document.getElementById("2019"));
    buttons.push(document.getElementById("2018"));
    buttons.push(document.getElementById("2017"));
    buttons.push(document.getElementById("2016"));

    buttons[0].addEventListener("click", function(){
        filterMembers("Everyone")
    });
    buttons[1].addEventListener("click", function(){
        filterMembers("2020")
    });
    buttons[2].addEventListener("click", function(){
        filterMembers("2019")
    });
    buttons[3].addEventListener("click", function(){
        filterMembers("2018")
    });
    buttons[4].addEventListener("click", function(){
        filterMembers("2017")
    });
    buttons[5].addEventListener("click", function(){
        filterMembers("2016")
    });

    //TODO: get rid of this and do it with ejs and express same for team
    $.getJSON("/json/team.json",function(data){
    // populate alumni
    for (let i = 0; i < data.team.alumni2020.length; i++) {
      let m = new createMember(data.team.alumni2020[i], "#section-alumni");
      m.tag = "2020";
      profiles.push(m);
    }
    for (let i = 0; i < data.team.alumni2019.length; i++) {
      let m = new createMember(data.team.alumni2019[i], "#section-alumni");
      m.tag = "2019";
      profiles.push(m);
    }
    for (let i = 0; i < data.team.alumni2018.length; i++) {
      let m = new createMember(data.team.alumni2018[i], "#section-alumni");
      m.tag = "2018";
      profiles.push(m);
    }
    for (let i = 0; i < data.team.alumni2017.length; i++) {
      let m = new createMember(data.team.alumni2017[i], "#section-alumni");
      m.tag = "2017";
      profiles.push(m);
    }
    for (let i = 0; i < data.team.alumni2016.length; i++) {
      let m = new createMember(data.team.alumni2016[i], "#section-alumni");
      m.tag = "2016";
      profiles.push(m);
    }
  });

  function filterMembers(year){
    buttons.forEach(function(d){
      d.setAttribute("class", "");
    });
    document.getElementById(year).setAttribute("class", "selected");
    
    //filter tags
    let tagged = [];

    if(year == "Everyone"){
      profiles.forEach(function(d){
        d.show(true);
      });
    }else {
      profiles.forEach(function(d){
        if (d.tag.includes(year)) {
          d.show(true);
        }else{
          d.show(false);
        }
      });
    }

  }

});

// this function is a standard member
// this does not include any extra links
// or any extra content about said member
function createMember(member, sectionid){
    this.tag = "";
    var d = member;
    var profilelink = document.createElement("a");

  //set link if json has 'link' key
  if (d.hasOwnProperty("link")) {
    profilelink.setAttribute("href",d.link);
  }

  this.profileHeader = document.createElement("div");
  this.profileHeader.setAttribute("class", "profile");
  var profileHeaderImage = document.createElement("img");

  //get image, if none then use default
  if (d.img === "") {
    profileHeaderImage.setAttribute("src", "/images/SSRLProfiles/default.png");
  }else {
    profileHeaderImage.setAttribute("src", "/images/SSRLProfiles/" + d.img);
  }

  var profileHeaderName = document.createElement("span");
  profileHeaderName.setAttribute("class", "name");
  profileHeaderName.innerHTML = d.name;

  //append elements
  this.profileHeader.appendChild(profileHeaderImage);
  this.profileHeader.appendChild(profileHeaderName);
  if (!(d.role === "")) {
    let profileHeaderTitle = document.createElement("span");
    profileHeaderTitle.setAttribute("class", "title");
    profileHeaderTitle.innerHTML = d.role + '<br>';
    this.profileHeader.appendChild(profileHeaderTitle);
  }

  profilelink.appendChild(this.profileHeader);
  $(sectionid).append(profilelink);

   //functions
   this.show = function(b){
    if(b){
      this.profileHeader.setAttribute("class","profile");
      this.hidden = false;
    }else{
      this.profileHeader.setAttribute("class","profile hidden");
      this.hidden = true;
    }
  };

}
