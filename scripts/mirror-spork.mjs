import scrape from 'website-scraper'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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


