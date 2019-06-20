$(document).ready(function(){
  //TODO: get rid of this and do it with ejs and express same for team
  $.getJSON("/json/team.json",function(data){
    //populate principleinvestigators
    for (let i = 0; i < data.team.principleinvestigators.length; i++) {
      createMemberExtraContent(data.team.principleinvestigators[i], "#section-principleinvestigators");
    }
    //populate graduatestudents
    for (let i = 0; i < data.team.graduatestudents.length; i++) {
      createMemberExtraContent(data.team.graduatestudents[i], "#section-graduatestudents");
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
    for (let i = 0; i < data.team.alumni2016.length; i++) {
      createMember(data.team.alumni2016[i], "#section-alumni2016");
    }
  });
});

// this creates a member and also contains extra
// content about the member. This will have a CV
// link and
// This is expected to be done for faculty and grad students.
function createMemberExtraContent(member, sectionid){
  var d = member;
  var profileBoi = document.createElement("span")
  // var profilelink = document.createElement("a");
  //
  // //set link if json has 'link' key
  // if (d.hasOwnProperty("link")) {
  //   profilelink.setAttribute("href",d.link);
  // }

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
    profileHeaderTitle.innerHTML = d.role + '<br><br>';
    // add the extra boi if it exists
    if (d.hasOwnProperty("link")) {
      var cvlink = document.createElement("a");
      cvlink.innerHTML += '<i class="far fa-file-alt"></i> - ';
      // because of grammar and spelling and stuff we have
      // to put the apostropheeee guy in the right spot
      var last = d.name[d.name.length -1];
      if (last === "s" || last === "S") {
        cvlink.innerHTML += d.name + '\' CV'
      } else {
        cvlink.innerHTML += d.name + '\'s CV'
      }
      cvlink.setAttribute("href",d.link);
      cvlink.setAttribute("target",'_blank');
      profileHeaderTitle.appendChild(cvlink)
    }
    profileHeader.appendChild(profileHeaderTitle);
  }
  profileBoi.appendChild(profileHeader)
  // profilelink.appendChild(profileHeader);
  $(sectionid).append(profileBoi);

}

// this function is a standard member
// this does not include any extra links
// or any extra content about said member
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
