$(document).ready(function(){
  //TODO: get rid of this and do it with ejs and express same for team
  $.getJSON("/json/outreach.json",function(data){
    console.log("test2");
    //populate leadership
    for (let i = 0; i < data.events.length; i++){
      createEvent(data.events[i]);
    }
  });
});

function createEvent(eventObject){
  let e = eventObject;
  //create elements
  let rule = document.createElement("hr");
  let container = document.createElement("div");
  let title = document.createElement("h3");
  let subTitle = document.createElement("p");
  let descContainer = document.createElement("div");
  let imgContainer = document.createElement("div");
  let img = document.createElement("img");
  let description = document.createElement("p");
  //modify elements
  container.setAttribute("class","outreach");
  descContainer.setAttribute("class","description");
  imgContainer.setAttribute("class","outreach-img");
  img.setAttribute("src",e.img);
  title.innerHTML = e.title;
  description.innerHTML = e.description;
  subTitle.innerHTML = '<p class="sub-title">Date: </p> <p class="sub">' + e.date + '</p> <p class="sub-title">location: </p> <p class="sub">' + e.location +
    '</p> <p class="sub-title">age: </p> <p class="sub">' + e.age + '</p> <p class="sub-title">number of students: </p> <p class="sub">' + e.studentAmount + '</p>';
  //put things together
  container.appendChild(rule);
  container.appendChild(title);
  container.appendChild(subTitle);
  container.appendChild(descContainer);
  descContainer.appendChild(imgContainer);
  descContainer.appendChild(description);
  imgContainer.appendChild(img);
  $("#events").append(container);
}

function createMember(member){
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

  profileHeader.appendChild(profileHeaderImage);
  profileHeader.appendChild(profileHeaderName);
  if (!(d.role === "")) {
    let profileHeaderTitle = document.createElement("span");
    profileHeaderTitle.setAttribute("class", "title");
    profileHeaderTitle.innerHTML = d.role + '<br>';
    profileHeader.appendChild(profileHeaderTitle);
  }
  $("#events").append(profileHeader);
}
/*
<div class="outreach">
  <hr>
  <h3>Title of event</h3>
  <p>sub titiles</p>
  <div class="description">
    <div class="outreach-img">
      <img src="/images/documents/thumbnails/Everest-test.jpg" alt="">
    </div>
    <p>description</p>
  </div>
</div>
*/
