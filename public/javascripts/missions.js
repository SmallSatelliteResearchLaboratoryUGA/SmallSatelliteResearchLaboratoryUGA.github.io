$(document).ready(function(){
  //add buttons to list
  var satButtons = [];
  var missions = [];
  satButtons.push(g("Sat-button-0"));
  satButtons.push(g("Sat-button-1"));
  satButtons.push(g("Sat-button-2"));
  missions.push(g("Mission-0"));
  missions.push(g("Mission-1"));
  missions.push(g("Mission-2"));

  g("Sat-button-0").addEventListener("click",function(){
    buttonStuff(0);
  });

  g("Sat-button-1").addEventListener("click",function(){
    buttonStuff(1);
  });

  g("Sat-button-2").addEventListener("click",function(){
    buttonStuff(2);
  });

  function buttonStuff(x){
    satButtons.forEach(function(el) {
      el.setAttribute("class", "sat-button-unselected");
    });
    satButtons[x].setAttribute("class", "sat-button-selected");
    missions.forEach(function(el) {
      el.setAttribute("class", "mission-panel out");
    });
    missions[x].setAttribute("class", "mission-panel in");
  }

})


function g(id){
  return document.getElementById(id);
}
