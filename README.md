# Adding/Updating Content
This site was built using [GitHub Pages](https://pages.github.com/) and the built in static site generator Jekyll.

This branch holds the static files that allow the site to be hosted on GitHub Pages. HTML files are located in the root directory and control the layout. CSS and Javascript are in the stylesheet and javascripts directory respectively.

Content should **ALWAYS** be added in the ***DEVELOPMENT*** branch. **NEVER** add new content to the master branch.
## Adding New Pages and Resources
> [!Note]
> If you have a view that was previously an generated using Express/ejs. You will need to convert that view to html. This can be done using a script to take out the embedded javascript HOWEVER in many cases (like this site) where the site doesn't utilize server requests it's likely easier to manually remove any embedded javascript like `<%= exampleVar = 45 %>` from the EJS view/file.

> ### Pages

If you would like to add a new page you will need to create a new HTML file locally where you will define the layout of the new page with HTML markup. Each HTML file should have relative links to CSS files that provide styling and/or Javascript files that provide any necessary functionality. If the page will make use of Jekyll variables defined in the _config.yml file then you will need to add [Front Matter](https://jekyllrb.com/docs/front-matter/) to the page.

To maintain cohesiveness, we reccommend you use the style elements (color, fonts, image styles, etc) already used for the site. 

Please include the current Navbar, Header, and Footer in your new html file to keep the same displays throughout the site. They are located in /views/partials and can be copied and pasted into your new html file. 

> ### Resources
Please place any new resources in the correct directory.

- New Images -> /images directory
> [!Important]
> Headshots are located in SSRLProfiles ( all of the js is based on headshots being in this folder; **DO NOT** move unless you're ready to change **ALL** team and alumni js)
- New CSS -> /stylesheets directory
- New JS -> /javascripts directory
> ### Links

Links that are change like the ***lab application link*** are saved as variables in the _config.yml file and are referenced using Jekyll syntax.
i.e)  For the variable lab_app_link it would be referenced in the html as `<a src= "{{ site.lab_app_link }}"></a>`

Read more on Jekyll syntax for variables and liquid templating [here](https://jekyllrb.com/docs/liquid/)

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

The team page is managed by a `.json` fine located in `/json`. There are separate sections in the `.json` for **Each Mission (members and leaders)**,**LabOps**,**Grad Students**,**Interns**, and **Faculty**. 

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
The raw html of each page can also be edited. You will find these in the root directory.

**Jekyll**:
This website has a special `_config.yml` file used to customize the build for our gh pages site. Currently, this file is used to update the biannual lab application link, but feel free to explore more configurations [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)


# smallsat.uga.edu
When the development branch recieves a new commit the site will update and deploy automatically

# Local Deploying, Programming, and Testing
## Deploying
Set your local branch to track changes from the remote development branch (here) with `git branch -u origin/development`. Now any commits you push will be pushed to github.
## Testing
> ### Reccommended Software
- Visual Studio Code
- Jekyll/Ruby
- Live Server (VS Code extension)
- Git Bash
  
In order to test new features you are implementing create your own local branch using `git branch -b <branch name`. You're free to edit and commit to this local branch as you like. You may choose to set the testing branch as an upstream branch to your local branch if you want to push your changes without affecting the live site.

The site is completely static so using an html viewer in your browser is crucial.
> VS Code

Using an IDE like VS Code is reccomended because you may can use extensions like **Live Server** which opens a server in your browser under `localhost:[port number]` Using this extension you will be able to edit the static files on your local machine and see changes automatically populate in your browser. This method is best when making simple changes to the html and js.
> Jekyll

**For the most accurate representation of the live site** I recccomend [Downloading Jekyll](https://jekyllrb.com/docs/installation/) and following this [GitHub Local Testing Tutorial](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) if you want to see exactly how the site will look after making any changes (especially css). 

Once your changes are finalized and thoroughly tested you may push your committed changes to the development branch.

Deployments are made automatically with every commit to **the DEVELOPMENT branch**. Github Pages watches and deploys from **DEVELOPMENT** as of 2/21/2024


