# Adding/Updating Content
Content can be added directly on gitlab, but it should **ALWAYS** be added in the development branch. **NEVER** add new content to the master branch.

Before you add content make sure that you are on the development branch. After that you are safe to test the following:

## Updating Research Page
**MAKE SURE YOU READ THE SECTION ABOVE**

## Updating the Team Page
**MAKE SURE YOU READ THE SECTION ABOVE**

# dev.smallsat.uga.edu
This machine continuously deploys the development branch every few minutes

**USER:** `ssrl`

**PASS:** `tacobell;;`

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
