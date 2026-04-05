$(function () {
	// handles menu toggle for who we are page (mobile = anything less than 700px wide)
	const mediaQuery = window.matchMedia("(max-width: 700px)");
	const mobileToggle = document.getElementById("toggle");
	let mobileMenu = document.getElementById("tab-container");

	function handleToggle() {
		console.log("button clicl");
		if (mobileMenu.style.display === "none") {
			mobileMenu.style.display = "flex";
		} else {
			mobileMenu.style.display = "none";
		}
	}

	if (mobileToggle) {
		mobileToggle.addEventListener("click", handleToggle);
	}

	//if screen size is no longer < 700px then show the the tabs
	mediaQuery.addEventListener("change", function () {
		if (!mediaQuery.matches) {
			mobileMenu.style.display = "flex";
		}
	});

	/* event listener for team's slide show that change
	   tab color based on selection */
	const myCarousel = document.getElementById("slideshow");
	const whichSlide = document.getElementById("selection"); //the text that shows next to the toggle on mobile

	function setTabStyles(activeIndex) {
		let allTabs = document.getElementsByClassName("team-tab");

		for (let i = 0; i < allTabs.length; i++) {
			allTabs[i].style.backgroundColor = "white";
			allTabs[i].style.color = "black";
			allTabs[i].classList.remove("active");
		}

		if (allTabs[activeIndex]) {
			allTabs[activeIndex].style.backgroundColor = "white";
			allTabs[activeIndex].style.color = "black";
			allTabs[activeIndex].classList.add("active");

			if (whichSlide) {
				whichSlide.innerHTML = allTabs[activeIndex].innerText;
			}
		}
	}

	if (myCarousel) {
		// after a page change; change tab colors to show active tab
		myCarousel.addEventListener("slide.bs.carousel", (event) => {
			setTabStyles(event.to);

			// auto close the mobile menu after switching slides
			if (mediaQuery.matches) {
				mobileMenu.style.display = "none";
			}
		});
	}

	// set default active tab on page load
	setTabStyles(0);

	$.getJSON("/json/team.json", function (data) {
		//populate principleinvestigators
		for (let i = 0; i < data.team.principleinvestigators.length; i++) {
			createMemberExtraContent(
				data.team.principleinvestigators[i],
				"#section-principleinvestigators"
			);
		}
		//populate labmanagers
		for (let i = 0; i < data.team.labmanagers.length; i++) {
			createMemberExtraContent(
				data.team.labmanagers[i],
				"#section-labmanagers"
			);
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
		//populate interns
		for (let i = 0; i < data.team.interns.length; i++) {
			createMember(data.team.interns[i], "#section-interns");
		}

		//populate data team leads
		for (let i = 0; i < data.team.dataTeam.length; i++) {
			createMemberExtraContent(data.team.dataTeam[i], "#section-dataLeads");
		}
		//populate data team members
		for (let i = 0; i < data.team.dataMembers.length; i++) {
			createMember(data.team.dataMembers[i], "#section-dataTeam");
		}

		//populate Learn leads
		for (let i = 0; i < data.team.LEARNSatTeam.length; i++) {
			createMemberExtraContent(data.team.LEARNSatTeam[i], "#section-LEARNSatTeam");
		}
		//populate Learn members
		for (let i = 0; i < data.team.LEARNSatMembers.length; i++) {
			createMember(data.team.LEARNSatMembers[i], "#section-LEARNSatMembers");
		}

		//populate faculty members
		for (let i = 0; i < data.team.associatedfaculty.length; i++) {
			createMember(
				data.team.associatedfaculty[i],
				"#section-associatedfaculty"
			);
		}
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
function createMemberExtraContent(member, sectionid) {
	var d = member;
	var profileBoi = document.createElement("span");

	var profileHeader = document.createElement("div");
	profileHeader.setAttribute("class", "profile");
	var profileHeaderImage = document.createElement("img");

	//get image, if none then use default
	if (d.img === "") {
		profileHeaderImage.setAttribute("src", "/images/SSRLProfiles/default.png");
	} else {
		profileHeaderImage.setAttribute("src", "/images/SSRLProfiles/" + d.img);
	}
	profileHeaderImage.setAttribute("alt", d.name + " headshot");

	var profileHeaderName = document.createElement("span");
	profileHeaderName.setAttribute("class", "name");
	profileHeaderName.innerHTML = d.name;

	//append elements
	profileHeader.appendChild(profileHeaderImage);
	profileHeader.appendChild(profileHeaderName);
	if (!(d.role === "")) {
		let profileHeaderTitle = document.createElement("span");
		profileHeaderTitle.setAttribute("class", "title");
		profileHeaderTitle.innerHTML = d.role + "<br><br>";
		// add the extra boi if it exists
		if (d.hasOwnProperty("link")) {
			var cvlink = document.createElement("a");
			cvlink.innerHTML += '<i class="far fa-file-alt"></i> - ';
			// because of grammar and spelling and stuff we have
			// to put the apostropheeee guy in the right spot
			var last = d.name[d.name.length - 1];
			if (last === "s" || last === "S") {
				cvlink.innerHTML += d.name + "' CV";
			} else {
				cvlink.innerHTML += d.name + "'s CV";
			}
			cvlink.setAttribute("href", d.link);
			cvlink.setAttribute("target", "_blank");
			profileHeaderTitle.appendChild(cvlink);
		}
		profileHeader.appendChild(profileHeaderTitle);
	}
	profileBoi.appendChild(profileHeader);
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
	profileHeaderImage.setAttribute("alt", d.name + " headshot");

	var profileHeaderName = document.createElement("span");
	profileHeaderName.setAttribute("class", "name");
	profileHeaderName.innerHTML = d.name;

	//append elements
	profileHeaderImage.innerHTML = "<div class ='crop'>";
	profileHeader.appendChild(profileHeaderImage);
	profileHeaderImage.setAttribute("class", "rounded");
	profileHeaderImage.innerHTML = "</div>";

	profileHeader.appendChild(profileHeaderName);

	if (!(d.role === "")) {
		let profileHeaderTitle = document.createElement("span");
		profileHeaderTitle.setAttribute("class", "title");
		profileHeaderTitle.innerHTML = d.role + "<br>";
		profileHeader.appendChild(profileHeaderTitle);
	}

	profilelink.appendChild(profileHeader);
	$(sectionid).append(profilelink);
}