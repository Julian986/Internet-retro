import { useMemo } from 'react'
const logoGoogle = 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1758497857/logo-google-beta2_wde7mf.webp'


type Result = {
  title: string
  url: string
  snippet: string
}

function generateFakeResults(query: string): Result[] {
  const base: Result[] = [
    {
      title: `Google (${query})`,
      url: 'www.google.com/',
      snippet: `...the web using Google Try our special searches: ${query} ... web's resources ©1999 Google Inc...`,
    },
    {
      title: `Amazon.com (${query})`,
      url: 'www.amazon.com/',
      snippet: `...Explore books, music, and more related to ${query} at Amazon.com ...`,
    },
    {
      title: `Spork.org`,
      url: 'www.spork.org',
      snippet: `...Spork, foon, runcible, collectibles, and curiosities...`,
    },
    {
      title: `Blockbuster`,
      url: 'www.blockbuster.com',
      snippet: `...Blockbuster Video - movies, games, and entertainment rentals...`,
    },
    {
      title: `Geocities Fanpage`,
      url: 'www.geocities.com',
      snippet: `...Geocities - free web hosting and personal homepages...`,
    },
    {
      title: `${query} - Directory`,
      url: `directory.google.com/${query}`,
      snippet: `...Browse categories and sites related to ${query}.`,
    },
  ]
  // repeat to 10 results
  const out: Result[] = []
  while (out.length < 10) {
    out.push(base[out.length % base.length])
  }
  return out
}

export default function Google1999ResultsPage({ query = 'google', page = 1, onSubmitQuery, onNext, onOpenITCorp, onOpenSpork, onOpenAmazon, onOpenBlockbuster, onOpenGeocities }:{
  query?: string
  page?: number
  onSubmitQuery: (q: string) => void
  onNext: () => void
  onOpenITCorp?: (q: string) => void
  onOpenSpork?: () => void
  onOpenAmazon?: () => void
  onOpenBlockbuster?: () => void
  onOpenGeocities?: () => void
}) {
  const results = useMemo(() => generateFakeResults(query), [query, page])
  const approx = useMemo(() => 234000 + query.length * 137, [query])
  const took = useMemo(() => (0.06 + (query.length % 7) * 0.01).toFixed(2), [query])

  return (
    <div style={{ fontFamily: 'Times New Roman, serif' }}>
      <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ margin: '16px 0 0 90px' }}>
        <tbody>
          <tr>
            <td>
              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  <tr>
                    <td style={{ paddingTop: 8, paddingRight: 12, verticalAlign: 'middle', width: 340 }}>
                      <img
                        /* src="https://web.archive.org/web/19990504112211im_/http://www.google.com/google.jpg" */
                        src={logoGoogle}
                        alt="Google!"
                        style={{ display: 'block', height: 109, width: 'auto', maxWidth: '106%' }} //345
                      />
                    </td>
                    <td style={{ textAlign: 'left', paddingLeft: 18, verticalAlign: 'middle' }}>
                      <input
                        defaultValue={query}
                        onKeyDown={(e)=>{ if(e.key==='Enter'){ e.preventDefault(); onSubmitQuery((e.target as HTMLInputElement).value) } }}
                        type="text"
                        style={{
                          background: '#ffffff',
                          border: '1px solid #b5b5b5',
                          boxShadow: 'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #c0c0c0',
                          height: 25,
                          padding: '3px 6px',
                          fontSize: 15,
                          width: 300,
                        }}
                      />
                      <select defaultValue="10" style={{ marginLeft: 8, height: 22, fontSize: 13, border: '1px solid #9c9c9c', boxShadow: 'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080' }}>
                        <option>10 results</option>
                        <option>20 results</option>
                        <option>50 results</option>
                      </select>
                      <input type="button" value="Google Search" className="g99-btn" style={{ padding: '2px 10px', fontSize: 12, marginLeft: 10, background: '#c1c1c1' }} onClick={()=>onSubmitQuery(query)} />
                      <input type="button" value="I'm feeling lucky" className="g99-btn" style={{ padding: '2px 10px', fontSize: 12, marginLeft: 6, background: '#c1c1c1' }} />
                    </td>
                    <td width="200" style={{ textAlign: 'right' }}></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <div style={{ height: 1, background: '#9c9c9c', width: '100vw', margin: '8px 0 4px 0', marginLeft: '-90px' }} />
            </td>
          </tr>

          <tr>
            <td style={{ color: '#666666', textAlign: 'left', padding: '8px 0 6px 0', paddingLeft: 224, fontSize: 16 }}>
              Showing results 1-10 of approximately {approx.toLocaleString()} for <b>{query}</b>. Search took {took} seconds.
            </td>
          </tr>

          <tr>
            <td>
              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  {results.map((r, i) => {
                    const pool = [
                      `...the web using Google. Try our special searches: ${query} ...`,
                      `...search results from across the web for ${query} in seconds...`,
                      `...find pages about ${query} using our advanced technology...`,
                      `...more resources on ${query}. ©1999 Google Inc...`,
                    ]
                    let lines: string[]
                    if (i === 0) {
                      lines = [
                        `...the web using Google. Try our special searches: ${query} ...`,
                        `...web's Linux resources ©1999 Google Inc...`,
                      ]
                    } else if (i === 1) {
                      lines = [
                        `...Search the entire web from the Google home page! ...`,
                      ]
                    } else {
                      const count = (i % 3) + 1
                      lines = Array.from({ length: count }).map((_, idx) => pool[idx % pool.length])
                    }
                    return (
                      <tr key={i}>
                        <td style={{ padding: '10px 4px' }}>
                          <div style={{ fontSize: 18 }}>
                            <a
                              href="#"
                              onClick={(e)=>{ e.preventDefault(); if (i === 0) { onOpenITCorp?.(query) } if (i === 1) { onOpenAmazon?.() } if (i === 2) { onOpenSpork?.() } if (i === 3) { onOpenBlockbuster?.() } if (i === 4) { onOpenGeocities?.() } }}
                              style={{ color: '#0000EE', textDecoration: 'underline' }}
                            >{r.title}</a>
                          </div>
                          <div style={{ color: '#008000', fontSize: 13 }}>{r.url} - <a href="#" style={{ color: '#0000EE' }}>Cached</a> · <a href="#" style={{ color: '#0000EE' }}>2k</a> · <a href="#" style={{ color: '#0000EE' }}>GoogleScout</a></div>
                          {lines.map((text, j) => (
                            <div key={j} style={{ color: '#666666', fontSize: 13, lineHeight: 1.2 }}>{text}</div>
                          ))}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td style={{ textAlign: 'right', padding: '18px 0 24px 0' }}>
              <a href="#" onClick={(e)=>{ e.preventDefault(); onNext(); }} style={{ color: '#0000EE', textDecoration: 'underline', fontSize: 14 }}>Next &gt;&gt;</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


