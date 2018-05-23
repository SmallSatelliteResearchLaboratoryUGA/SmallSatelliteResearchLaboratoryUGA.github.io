# Adding/Updating Content
Content can be added directly on gitlab, but it should **ALWAYS** be added in the development branch. **NEVER** add new content to the master branch.

Before you add content make sure that you are on the development branch. This section should say development:
![alt text](public/images/etc/readme_branches2.png)

you change change branches with a drop down menu:
![alt text](public/images/etc/readme_branches1.png)

## Updating Research Page
**MAKE SURE YOU READ THE SECTION ABOVE**

**MAKE SURE YOU ARE ON DEVELOPMENT**

The research page is managed by a `.json` fine located in `/public/json`. When you open this you will see things in json format, with an element looking like:

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
* You must adda thumbnail of the bit of research too. Simply screenshot it or something. This thumbnail must be stored in `public/images/documents/thumbnails/` replace the right hand section of the `img` tag above with the file's name.
* the `src` section contains the path to the actual research paper or bit of research. This should be soted in `public/images/documents/` [then you should put them in either the `papers`, `posters`, or `presentations` folder]
* you must tag the bit of research to either be a `paper`, `poster`, or `presentation`.
* you may add a subtitle, which can include in additional information you would like.

## Updating the Team Page
**MAKE SURE YOU READ THE SECTION ABOVE**

**MAKE SURE YOU ARE ON DEVELOPMENT**

The research page is managed by a `.json` fine located in `/public/json`. There are separate sections in the `.json` for **Leadership**,**Electronics**,**Mechanical**,**Missionops**,**Labops**, and **Faculty**. We still need to develop an alumni filter.

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

* the img is an image file located in `public/images/team`, you should add this when changing this page
* the id tag **must be unique** for each member, so we cannot have two members with the same name share the same id. Keep this in mind when updating this section

# dev.smallsat.uga.edu
Should automatically update every minute. This machine continuously deploys the development branch every minute.

**USER:** `ssrl`

**PASS:** `tacobell;;`

the default user for git is: `sitebot` with the same password as above. this is the account that constantly pulls changes

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

after node and npm is installed navigate to the project root directory and install all the plugins from package.json

```
$sudo npm install
```

to run the node server in your session:

```
$sudo node app.js
```

to run it as a service use forever

```
$sudo forever start app.js
```

if it says forever is not installed then install it using npm

```
$sudo npm install -g forever
```

TO RUN

check if server is already running
```
$sudo forever list
```

to start server go to project root:

```
$sudo forever start app.js
```
