import { useEffect, useState } from 'react'

export default function YahooPage() {
  const [visits, setVisits] = useState(1)
  useEffect(() => {
    const key = 'retro_visits'
    const v = Number(localStorage.getItem(key) || '0') + 1
    localStorage.setItem(key, String(v))
    setVisits(v)
  }, [])

  return (
    <div className="p-3 text-[13px]" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="text-center">
        <div className="text-4xl font-black text-red-700 tracking-tight">YAHOO!</div>
        <div className="text-xs underline text-blue-700 mt-1">Yahoo! Deutschland · Yahoo! Los Angeles · Weekly Picks</div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        <input className="retro-input w-2/3" defaultValue="Search the web" />
        <button className="retro-btn">Search</button>
      </div>
      <ul className="mt-4 list-disc pl-6">
        <li>Arts — Humanities, Photography, Architecture…</li>
        <li>Business and Economy [Xtra] — Directory, Investments, Classifieds…</li>
        <li>Computers and Internet — Web Sites, Software, Multimedia…</li>
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <div className="ticker">Visitas: <span>{visits}</span></div>
        <div className="text-xs">
          <span className="blink">Under Construction</span> 🚧 · <span>Email me 📧</span>
        </div>
      </div>
    </div>
  )
}



