const puppeteer = require('puppeteer');
const HTMLParser = require('node-html-parser');

const url = 'https://www.newegg.com/p/pl?Submit=StoreIM&Category=38&Depa=1';
// const testLink1 =
//   'https://www.newegg.com/gigabyte-radeon-rx-6600-gv-r66eagle-8gd/p/N82E16814932481?Item=N82E16814932481&quicklink=true';
// const testLink2 =
//   'https://www.newegg.com/asrock-radeon-rx-6700-xt-rx6700xt-cld-12g/p/N82E16814930056?Item=N82E16814930056';
// const testLink3 =
//   'https://www.newegg.com/asus-geforce-rtx-3050-ph-rtx3050-8g/p/N82E16814126558?Item=N82E16814126558';

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

    // grab html for all gpu containers
    const containers = await page.$$eval('.item-container', e => {
      return e.map(el => el.outerHTML);
    });
    
    console.log('Starting webscraper...');
    console.log(`# of GPUs detected: ${containers.length}`);

    const gpus = {};
    // grab all the data for gpus
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

      // get the url for that gpu
      const url = root.querySelector('.item-title').attributes.href;
      const subpage = await browser.newPage();
      await subpage
        .goto(url, {
          waitUntil: 'networkidle2',
        })
        .catch(e => void 0);

      const gpu = {
        name: root.querySelector('.item-title').text,
        price,
        productDetails: await getProductDetails(subpage),
        specs: await getTechSpecs(subpage),
        img: root.querySelector('.checkedimg2.checkedimg').attributes.src,
      };

      gpus.push(gpu);
    }

    console.log(gpus);
    console.log('Webscraping complete!');
    await browser.close();
  } catch (err) {
    console.log(err.message);
  }
}

async function getProductDetails(page) {
  // get the product details
  const productDetailsContainer = await page.$$eval('.product-bullets', e => {
    return e.map(el => el.outerHTML);
  });
  // console.log(productDetails);

  const root = HTMLParser.parse(productDetailsContainer);
  const productDetailsHtml = root.querySelectorAll('li');

  const productDetails = [];
  for (const el of productDetailsHtml) {
    // console.log(el.text)
    productDetails.push(el.text);
  }

  return productDetails;
}

async function getTechSpecs(page) {
  const specsContainers = await page.$$eval('.table-horizontal', e => {
    return e.map(el => el.outerHTML);
  });
  const root = HTMLParser.parse(specsContainers);

  const specs = {};

  for (const el of root.querySelectorAll('.table-horizontal')) {
    if (el.querySelector('caption').text !== '') {
      specs[`${el.querySelector('caption').text}`] = {};

      for (const e of el.querySelectorAll('tr')) {
        specs[`${el.querySelector('caption').text}`][
          `${e.childNodes[0].text}`
        ] = e.childNodes[1].text;
      }
    }
  }

  return specs;
}

scrape();
