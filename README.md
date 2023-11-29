# Adding/Updating Content
This branch holds the static files that allow the site to be hosted on GitHub Pages. Html files are located in the root directory and control the views/layout. CSS and Javascript are in the stylesheet and javascripts directory respectively.

Deployments are made automatically with every commit to **the STATIC branch**

Content should **ALWAYS** be added in the static branch. **NEVER** add new content to the master branch.

Before you add content make sure that you are on the static branch

## Updating Research Page
**MAKE SURE YOU READ THE SECTION ABOVE**

**MAKE SURE YOU ARE ON DEVELOPMENT**

The research page is managed by a `.json` fine located in `/json`. When you open this you will see things in json format, with an element looking like:

```
{
  "title":"Design of a CubeSat Ready Hyperspectral Camera",
  "img":"ATL_Symposium_Presentation.jpg",
  "src":"/images/documents/presentations/ATL_Symposium_Presentation.pdf",
  "tags":"presentation",
  "subTitle":"location-date"
},
```

* To add another bit of research, add another section like the one above to the json
* You can replace the title within the right hand of the `title` section above
* You must adda thumbnail of the bit of research too. Simply screenshot it or something. This thumbnail must be stored in `/images/documents/thumbnails/` replace the right hand section of the `img` tag above with the file's name.
* the `src` section contains the path to the actual research paper or bit of research. This should be soted in `/images/documents/` [then you should put them in either the `papers`, `posters`, or `presentations` folder]
* you must tag the bit of research to either be a `paper`, `poster`, or `presentation`.
* you may add a subtitle, which can include in additional information you would like.

## Updating the Team Page
**MAKE SURE YOU READ THE SECTION ABOVE**

**MAKE SURE YOU ARE ON DEVELOPMENT**

The research page is managed by a `.json` fine located in `/json`. There are separate sections in the `.json` for **Leadership**,**Electronics**,**Mechanical**,**Missionops**,**Labops**, and **Faculty**. We still need to develop an alumni filter.

nested within each of those categories are entries for team memebers. An element looks like:

```
{
  "name":"Caleb Adams",
  "bio":"Caleb Adams, along with Hollis Neel and Ryan Babaie, began UGA's Small Satellite Research Laboritory after starting a small satellite project that would soon involve UGA faculty. Caleb lead the first team from UGA to win an MLH, nationally recognized, Hackathon by building a low cost remote-operated telescope. He has worked for NASA as a Core Flight Software developer on the Orion project and was a beta tester of Google Glass. He spoke at the TEDx UGA student idea showcase about the future of small satellites and citizen science. Caleb currently runs one of the most popular computer science blogs and one of the most popular astronomy blogs on the tumblr blogging platform, with an outreach of 200,000.",
  "major":"Computer Science",
  "img":"caleb.jpg",
  "id":"caleb",
  "role":"Program Manager & Co-Founder"
},
```

* the img is an image file located in `/images/team`, you should add this when changing this page
* the id tag **must be unique** for each member, so we cannot have two members with the same name share the same id. Keep this in mind when updating this section

## Editing HTML
the raw html of each page can also be edited. You will find this in the root dierctory. 


# smallsat.uga.edu
When the dev branch is merged into master this site will update every minutes.

request access

# Local Deploying, Programming, and Testing
if node and npm is not installed do that. the best way, i've found do this is first installing npm, then from that install n, then from that install node
the g tag install things globally.

```
$sudo apt-get install npm
$sudo npm install -g n
$sudo n latest
```
the site is completely static so using an html viewer in your browser is crucial.
Using an IDE like VS Code is reccomended because you may can use extensions like **Live Server** which opens a server in your browser under localhost:[port number] Using this extension you will be able to edit the static files on your local machine and see changes automatically populate in your browser.
