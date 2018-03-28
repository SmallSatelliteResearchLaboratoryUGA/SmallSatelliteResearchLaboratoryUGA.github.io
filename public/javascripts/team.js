$(document).ready(function(){
  //TODO: get rid of this and do it with ejs and express same for team
  $.getJSON("/json/team.json",function(data){
    console.log("test2");
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
    for (let i = 0; i < data.team.faculty.length; i++) {
      createMember(data.team.faculty[i], "#section-faculty");
    }
  });
});

function createMember(member, sectionid){
  var d = member;
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
  // var profileHeaderButton = document.createElement("button");
  // profileHeaderButton.setAttribute("type","button");
  // profileHeaderButton.setAttribute("class","btn btn_leader btn-lg");
  // profileHeaderButton.setAttribute("data-toggle","modal");
  // profileHeaderButton.setAttribute("data-target", "#" + d.id + "Modal");
  // profileHeaderButton.innerHTML = "See Bio";
  //append elements
  profileHeader.appendChild(profileHeaderImage);
  profileHeader.appendChild(profileHeaderName);
  if (!(d.role === "")) {
    let profileHeaderTitle = document.createElement("span");
    profileHeaderTitle.setAttribute("class", "title");
    profileHeaderTitle.innerHTML = d.role + '<br>';
    profileHeader.appendChild(profileHeaderTitle);
  }
  // profileHeader.appendChild(profileHeaderButton);
  $(sectionid).append(profileHeader);
  //
  // //body
  // var profileModal = document.createElement("div");
  // profileModal.setAttribute("class","modal fade");
  // profileModal.setAttribute("id", d.id + "Modal");
  // profileModal.setAttribute("role","dialog");
  // var profileModalDialog = document.createElement("div");
  // profileModalDialog.setAttribute("class","modal-dialog");
  // var profileModalContent = document.createElement("div");
  // profileModalContent.setAttribute("class","modal-content");
  // var profileModalHeader = document.createElement("div");
  // profileModalHeader.setAttribute("class","modal-header");
  // var profileModalHeaderButton = document.createElement("button");
  // profileModalHeaderButton.setAttribute("type", "button");
  // profileModalHeaderButton.setAttribute("class", "close");
  // profileModalHeaderButton.setAttribute("data-dismiss", "modal");
  // profileModalHeaderButton.innerHTML = "x";
  // var profileModalBody = document.createElement("div");
  // profileModalBody.setAttribute("class", "modal-body");
  // var profileModalBodyh1 = document.createElement("h1");
  // profileModalBodyh1.setAttribute("class", "align_center");
  // profileModalBodyh1.innerHTML = d.name;
  //
  // var profileModalBodyp = document.createElement("p");
  // profileModalBodyp.innerHTML = d.bio;
  //
  // profileModal.appendChild(profileModalDialog);
  // profileModalDialog.appendChild(profileModalContent);
  // profileModalContent.appendChild(profileModalHeader);
  // profileModalContent.appendChild(profileModalBody);
  // profileModalHeader.appendChild(profileModalHeaderButton);
  // profileModalBody.appendChild(profileModalBodyh1);
  // if (!(d.major === "")) {
  //   let profileModalBodyh3 = document.createElement("h3");
  //   profileModalBodyh3.setAttribute("class", "align_center");
  //   profileModalBodyh3.innerHTML = d.major;
  //   profileModalBody.appendChild(profileModalBodyh3);
  // }
  // profileModalBody.appendChild(profileModalBodyp);
  // $(sectionid).append(profileModal);
}
//'<div class="profile leader">
  //<img src="assets/SSRLProfiles/' + ___IMG___ + '.jpg" class="picture">'
  //<span class="name"> + ___NAME___ + </span>
  //<span class="title"> + __ROLE__ + <br>&amp; Co-Founder</span>
  //<button type="button" class="btn btn_leader btn-lg" data-toggle="modal" data-target="#calebModal">See Bio</button>
//</div
//<div class="modal fade" id="calebModal" role="dialog">
  //<div class="modal-dialog">
    //<!-- Modal content-->
    //<div class="modal-content">
      //<div class="modal-header">
        //<button type="button" class="close" data-dismiss="modal">×</button>
      //</div>
      //<div class="modal-body">
        //<h1 class="align_center">Caleb Adams</h1>
        //<h3 class="align_center">Computer Science / Astronomy and Physics</h3>
        //<p> + __BIO___ + </p>
      //</div>
    //</div>
  //</div>
//</div>'
