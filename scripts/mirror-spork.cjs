const scrape = require('website-scraper')
const path = require('path')

async function main() {
  const directory = path.join(__dirname, '..', 'public', 'spork')
  await scrape({
    urls: ['https://spork.org/'],
    directory,
    maxDepth: 1,
    requestConcurrency: 2,
    recursive: true,
  })
  console.log('Mirror saved to', directory)
}

main().catch(err => { console.error(err); process.exit(1) })


