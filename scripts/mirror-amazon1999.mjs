import scrape from 'website-scraper'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  const directory = path.join(__dirname, '..', 'public', 'amazon1999')
  // Wayback snapshot cercano a 1999; ajusta si prefieres otra fecha
  const url = 'https://web.archive.org/web/19990827000000*/http://www.amazon.com/'
  await scrape({
    urls: [url],
    directory,
    maxDepth: 1,
    requestConcurrency: 2,
    recursive: true,
  })
  console.log('Amazon 1999 mirror saved to', directory)
}

main().catch(err => { console.error(err); process.exit(1) })



