$(document).ready(function(){
  //TODO: get rid of this and do it with ejs and express same for team
  $.getJSON("/json/team.json",function(data){
    //populate principleinvestigators
    for (let i = 0; i < data.team.principleinvestigators.length; i++) {
      createMember(data.team.principleinvestigators[i], "#section-principleinvestigators");
    }
    //populate graduatestudents
    for (let i = 0; i < data.team.graduatestudents.length; i++) {
      createMember(data.team.graduatestudents[i], "#section-graduatestudents");
    }
    //populate leadership
    for (let i = 0; i < data.team.leadership.length; i++) {
      createMember(data.team.leadership[i], "#section-leadership");
    }
    //populate electronics members
    for (let i = 0; i < data.team.electronics.length; i++) {
      createMember(data.team.electronics[i], "#section-electronics");
    }
    for (let i = 0; i < data.team.mechanical.length; i++) {
      createMember(data.team.mechanical[i], "#section-mechanical");
    }

    for (let i = 0; i < data.team.labops.length; i++) {
      createMember(data.team.labops[i], "#section-labops");
    }
    for (let i = 0; i < data.team.missionops.length; i++) {
      createMember(data.team.missionops[i], "#section-missionops");
    }
    for (let i = 0; i < data.team.associatedfaculty.length; i++) {
      createMember(data.team.associatedfaculty[i], "#section-associatedfaculty");
    }
    for (let i = 0; i < data.team.intern.length; i++) {
    createMember(data.team.intern[i], "#section-intern");
    }
    // populate alumni
    // populate alumni
    for (let i = 0; i < data.team.alumni2019.length; i++) {
      createMember(data.team.alumni2019[i], "#section-alumni2019");
    }
    for (let i = 0; i < data.team.alumni2018.length; i++) {
      createMember(data.team.alumni2018[i], "#section-alumni2018");
    }
    for (let i = 0; i < data.team.alumni2017.length; i++) {
      createMember(data.team.alumni2017[i], "#section-alumni2017");
    }
  });
});

function createMember(member, sectionid){
  var d = member;
  var profilelink = document.createElement("a");

  //set link if json has 'link' key
  if (d.hasOwnProperty("link")) {
    profilelink.setAttribute("href",d.link);
  }

  var profileHeader = document.createElement("div");
  profileHeader.setAttribute("class", "profile");
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
  profileHeader.appendChild(profileHeaderImage);
  profileHeader.appendChild(profileHeaderName);
  if (!(d.role === "")) {
    let profileHeaderTitle = document.createElement("span");
    profileHeaderTitle.setAttribute("class", "title");
    profileHeaderTitle.innerHTML = d.role + '<br>';
    profileHeader.appendChild(profileHeaderTitle);
  }

  profilelink.appendChild(profileHeader);
  $(sectionid).append(profilelink);

}
