$(document).ready(function () {
    /*event listener for team's slide show that change
      tab color based on selection */
    const myCarousel = document.getElementById('slideshow')

    //after a page change; chnage tab colors to show active tab
    myCarousel.addEventListener('slide.bs.carousel', event => {
      let allTabs = document.getElementsByClassName('team-tab');
      let currentTab = allTabs[event.to];
      let prevTab = allTabs[event.from];
      currentTab.style.backgroundColor = "goldenrod";
      prevTab.style.backgroundColor = "gray";
    })
    
  $.getJSON("/json/team.json", function (data) {
    //populate principleinvestigators
    for (let i = 0; i < data.team.principleinvestigators.length; i++) {
      createMemberExtraContent(data.team.principleinvestigators[i], "#section-principleinvestigators");
    }
    //populate labmanagers
    for (let i = 0; i < data.team.labmanagers.length; i++) {
      createMemberExtraContent(data.team.labmanagers[i], "#section-labmanagers");
    }
    //populate MEMESAT-1 Leaders
    for (let i = 0; i < data.team.memeSat.length; i++) {
      createMemberExtraContent(data.team.memeSat[i], "#section-memesat");
    }
    //populate memesat members
    for (let i = 0; i < data.team.memeSatMembers.length; i++) {
      createMember(data.team.memeSatMembers[i], "#section-memeMembers");
    }

    //populate MOCI Leads
    for (let i = 0; i < data.team.moci.length; i++) {
      createMember(data.team.moci[i], "#section-moci");

    }
    //populate moci members
    for (let i = 0; i < data.team.mociMembers.length; i++) {
      createMember(data.team.mociMembers[i], "#section-mociMembers");
    }
    //populate COSMO Leads
    for (let i = 0; i < data.team.cosmo.length; i++) {
      createMember(data.team.cosmo[i], "#section-cosmo");
    }
    //populate COSMO members
    for (let i = 0; i < data.team.cosmoMembers.length; i++) {
      createMember(data.team.cosmoMembers[i], "#section-cosmoMembers");
    }
    //populate T-MIBE members/Leads
    for (let i = 0; i < data.team.tmibe.length; i++) {
      createMember(data.team.tmibe[i], "#section-tmibe");
    }
    
    //populate labops leads
    for (let i = 0; i < data.team.labops.length; i++) {
      createMember(data.team.labops[i], "#section-labops");
    }
     //populate labops members
     for (let i = 0; i < data.team.labopsMembers.length; i++) {
      createMember(data.team.labopsMembers[i], "#section-labopsMembers");
    }
     //populate R&D leads
     for (let i = 0; i < data.team.rnd.length; i++) {
      createMember(data.team.rnd[i], "#section-rnd");
    }
     //populate R&D members
     for (let i = 0; i < data.team.rndMembers.length; i++) {
      createMember(data.team.rndMembers[i], "#section-rndMembers");
    }
    //populate graduate students
    for (let i = 0; i < data.team.graduatestudents.length; i++) {
      createMember(data.team.graduatestudents[i], "#section-graduatestudents");
    }
    
    
   
    //populate faculty members
    for (let i = 0; i < data.team.associatedfaculty.length; i++) {
      createMember(data.team.associatedfaculty[i], "#section-associatedfaculty");
    }
    //populate intern members
    //for (let i = 0; i < data.team.intern.length; i++) {
    //  createMember(data.team.intern[i], "#section-intern");
    // }
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

function changeTabColor() {


}

// this creates a member and also contains extra
// content about the member. This will have a CV
// link and
// This is expected to be done for faculty and grad students.
function createMemberExtraContent(member, sectionid) {
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
  } else {
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
      var last = d.name[d.name.length - 1];
      if (last === "s" || last === "S") {
        cvlink.innerHTML += d.name + '\' CV'
      } else {
        cvlink.innerHTML += d.name + '\'s CV'
      }
      cvlink.setAttribute("href", d.link);
      cvlink.setAttribute("target", '_blank');
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
function createMember(member, sectionid) {
  var d = member;
  var profilelink = document.createElement("a");

  //set link if json has 'link' key
  if (d.hasOwnProperty("link")) {
    profilelink.setAttribute("href", d.link);
  }

  var profileHeader = document.createElement("div");
  profileHeader.setAttribute("class", "profile");
  var profileHeaderImage = document.createElement("img");

  //get image, if none then use default
  if (d.img === "") {
    profileHeaderImage.setAttribute("src", "/images/SSRLProfiles/default.png");
  } else {
    profileHeaderImage.setAttribute("src", "/images/SSRLProfiles/" + d.img);
  }

  var profileHeaderName = document.createElement("span");
  profileHeaderName.setAttribute("class", "name");
  profileHeaderName.innerHTML = d.name;

  //append elements
  //let profileHeaderImage = document.createElement("span")
  profileHeaderImage.innerHTML = "<div class ='crop'>"
  profileHeader.appendChild(profileHeaderImage);
  profileHeaderImage.setAttribute("class", "rounded");
  profileHeaderImage.innerHTML = "</div>"

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
