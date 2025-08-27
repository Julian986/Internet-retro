import { useMemo } from 'react'

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
      title: `Google Search: <${query}>`,
      url: `www.google.com/${query}`,
      snippet: `...terms. Search the entire web from the Google home page! ...`,
    },
    {
      title: `Why Use Google?`,
      url: 'www.google.com/help/why.html',
      snippet: `...Why Use Google? Because Google delivers the most relevant search results—fast!...`,
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

export default function Google1999ResultsPage({ query = 'google', page = 1, onSubmitQuery, onNext }:{
  query?: string
  page?: number
  onSubmitQuery: (q: string) => void
  onNext: () => void
}) {
  const results = useMemo(() => generateFakeResults(query), [query, page])
  const approx = useMemo(() => 234000 + query.length * 137, [query])
  const took = useMemo(() => (0.06 + (query.length % 7) * 0.01).toFixed(2), [query])

  return (
    <div style={{ fontFamily: 'Times New Roman, serif' }}>
      <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ margin: '16px 0 0 100px' }}>
        <tbody>
          <tr>
            <td>
              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  <tr>
                    <td width="250" style={{ paddingTop: 8 }}>
                      <img
                        src="https://web.archive.org/web/19990504112211im_/http://www.google.com/google.jpg"
                        alt="Google!"
                        height={70}
                        style={{ display: 'block' }}
                      />
                    </td>
                    <td style={{ textAlign: 'left' }}>
                      <input
                        defaultValue={query}
                        onKeyDown={(e)=>{ if(e.key==='Enter'){ e.preventDefault(); onSubmitQuery((e.target as HTMLInputElement).value) } }}
                        type="text"
                        style={{
                          background: '#ffffff',
                          border: '1px solid #808080',
                          boxShadow: 'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080',
                          height: 22,
                          padding: '3px 6px',
                          fontSize: 14,
                          width: 340,
                        }}
                      />
                      <select defaultValue="10" style={{ marginLeft: 8, height: 22, fontSize: 13 }}>
                        <option>10 results</option>
                        <option>20 results</option>
                        <option>50 results</option>
                      </select>
                    </td>
                    <td width="260" style={{ textAlign: 'right' }}>
                      <input type="button" value="Google Search" className="g99-btn" style={{ padding: '2px 10px', fontSize: 12, marginRight: 10 }} onClick={()=>onSubmitQuery(query)} />
                      <input type="button" value="I'm feeling lucky" className="g99-btn" style={{ padding: '2px 10px', fontSize: 12 }} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td style={{ color: '#666666', textAlign: 'center', padding: '18px 0 8px 0', fontSize: 14 }}>
              Showing results 1-10 of approximately {approx.toLocaleString()} for <b>{query}</b>. Search took {took} seconds.
            </td>
          </tr>

          <tr>
            <td>
              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i}>
                      <td style={{ padding: '10px 4px' }}>
                        <div style={{ fontSize: 18 }}>
                          <a href="#" style={{ color: '#0000EE', textDecoration: 'underline' }}>{r.title}</a>
                        </div>
                        <div style={{ color: '#008000', fontSize: 13 }}>{r.url} - <a href="#" style={{ color: '#0000EE' }}>Cached</a> · <a href="#" style={{ color: '#0000EE' }}>2k</a> · <a href="#" style={{ color: '#0000EE' }}>GoogleScout</a></div>
                        <div style={{ color: '#666666', fontSize: 13, lineHeight: 1.2 }}>{r.snippet.replaceAll('Google', 'Google').replaceAll(query, query)}</div>
                      </td>
                    </tr>
                  ))}
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


