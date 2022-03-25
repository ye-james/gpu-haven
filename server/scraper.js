const puppeteer = require('puppeteer');
const HTMLParser = require('node-html-parser');

const url = 'https://www.newegg.com/p/pl?Submit=StoreIM&Category=38&Depa=1';

async function scrape() {
  try {
    // set up browser
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page
      .goto(url, {
        waitUntil: 'networkidle2',
      })
      .catch(e => void 0);

    // grab html for all item containers
    const containers = await page.$$eval('.item-container', e => {
      return e.map(el => el.outerHTML);
    });
    console.log(containers.length);

    // grab all the data for gpus
    parseHTMLForGPUs(containers);

    await browser.close();
  } catch (err) {
    console.log(err.message);
  }
}

function parseHTMLForGPUs(containers) {
  const gpus = [];

  for (const container of containers) {
    const root = HTMLParser.parse(container);

    // take the comma out of the text string
    let price = '';
    if (root.querySelector('.price-current > strong').text.includes(',')) {
      const text = root.querySelector('.price-current > strong').text;
      const a = text.split(',');
      price = a.join('');
    } else {
      price = root.querySelector('.price-current > strong').text;
    }

    const gpu = {
      name: root.querySelector('.item-title').text,
      price,
      img: root.querySelector('.checkedimg2.checkedimg').attributes.src,
    };

    gpus.push(gpu);
  }

  console.log(gpus);

  return gpus;
}

scrape();
