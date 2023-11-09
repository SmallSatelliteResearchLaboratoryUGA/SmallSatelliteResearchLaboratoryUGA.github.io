const puppeteer = require('puppeteer');
var fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const ejsFiles = fs.readdirSync('views');

  for (const ejsFile of ejsFiles) {
    const htmlFile = ejsFile.replace('.ejs', '.html');
    await page.goto(`file://${process.cwd()}/views/${ejsFile}`);
    const html = await page.content();

    if (!fs.existsSync(`${process.cwd()}/pre-render/${htmlFile}`)) {
        try {
            await fs.promises.writeFile(`${process.cwd()}/pre-render/${htmlFile}`, '');
        } catch (error) {
            console.log("ERROR CREATING", error)
        }


    }    
    try{
        fs.writeFileSync(`${process.cwd()}/pre-render/${htmlFile}`, html);
    } catch(err) {
        console.log(err)

    }
} //for every ejs file


  await browser.close();
})();