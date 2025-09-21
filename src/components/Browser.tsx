import { useEffect, useMemo, useRef, useState } from 'react'
import YahooPage from '../pages/YahooPage'
import BlockbusterPage from '../pages/BlockbusterPage'
import GeoCitiesPage from '../pages/GeoCitiesPage'
import Google1998Page from '../pages/Google1998Page'
import MSN1998Page from '../pages/MSN1998Page'
import Google1999ResultsPage from '../pages/Google1999ResultsPage'
import ITCorpPage from '../pages/ITCorpPage'
import SporkPage from '../pages/SporkPage'
import Amazon1999Page from '../pages/Amazon1999Page'
import { playClick } from '../sounds'

type PageKey = 'msn' | 'google' | 'google-results' | 'yahoo' | 'blockbuster' | 'geocities' | 'itcorp' | 'spork' | 'amazon1999'

const PAGE_TO_URL: Record<PageKey, string> = {
  msn: 'http://www.msn.com',
  google: 'http://www.google.com',
  'google-results': 'http://www.google.com/search',
  yahoo: 'http://www.yahoo.com',
  blockbuster: 'http://www.blockbuster.com/games/',
  geocities: 'http://www.geocities.com/pokefan',
  itcorp: 'http://www.itcorp.com',
  spork: 'http://www.spork.org',
  amazon1999: 'http://www.amazon.com',
}

function PageRenderer({ page, onMsnSearch, onGoogleSubmit, itcorpQuery }: { page: PageKey, onMsnSearch: (q: string)=>void, onGoogleSubmit: (q: string)=>void, itcorpQuery?: string }) {
  if (page === 'msn') return <MSN1998Page onSearch={onMsnSearch} />
  if (page === 'google') return <Google1998Page onSubmit={onGoogleSubmit} />
  if (page === 'google-results') return null
  if (page === 'yahoo') return <YahooPage />
  if (page === 'blockbuster') return <BlockbusterPage />
  if (page === 'itcorp') return <ITCorpPage query={itcorpQuery} />
  if (page === 'spork') return <SporkPage />
  if (page === 'amazon1999') return <Amazon1999Page />
  return <GeoCitiesPage />
}

export default function Browser({ title = 'Microsoft Internet Explorer', page = 'msn', zIndex, onClose, onFocus }:{ title?: string, page?: PageKey, zIndex?: number, onClose?: () => void, onFocus?: () => void }) {
  const [current, setCurrent] = useState<PageKey>(page)
  const [history, setHistory] = useState<PageKey[]>([page])
  const [pointer, setPointer] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [addressInput, setAddressInput] = useState('')
  const stopRef = useRef(false)
  const [googleQuery, setGoogleQuery] = useState('google')
  const [googlePage, setGooglePage] = useState(1)
  const [itcorpQuery, setItcorpQuery] = useState<string>('technology')
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null)

  function navigate(next: PageKey) {
    playClick()
    setIsLoading(true)
    setLoadingMessage(null)
    setProgress(0)
    stopRef.current = false
    const delay = 1500 + Math.floor(Math.random() * 1200)
    const startedAt = Date.now()
    const tick = () => {
      if (stopRef.current) return
      const elapsed = Date.now() - startedAt
      const pct = Math.min(95, Math.floor((elapsed / delay) * 100))
      setProgress(pct)
      if (elapsed < delay) {
        raf = requestAnimationFrame(tick)
      } else {
        setIsLoading(false)
        setProgress(100)
        const newHistory = history.slice(0, pointer + 1).concat(next)
        setHistory(newHistory)
        setPointer(newHistory.length - 1)
        setCurrent(next)
      }
    }
    let raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }

  function goBack() {
    if (pointer > 0) {
      const target = history[pointer - 1]
      const shouldSimulateSlow = current === 'itcorp' && target === 'google-results'
      if (shouldSimulateSlow) {
        playClick()
        setIsLoading(true)
        setLoadingMessage('Restaurando la página anterior…')
        setProgress(0)
        const delay = 1800 + Math.floor(Math.random() * 1600)
        const startedAt = Date.now()
        const tick = () => {
          const elapsed = Date.now() - startedAt
          const pct = Math.min(98, Math.floor((elapsed / delay) * 100))
          setProgress(pct)
          if (elapsed < delay) {
            requestAnimationFrame(tick)
          } else {
            setIsLoading(false)
            setLoadingMessage(null)
            setProgress(100)
            setPointer(pointer - 1)
            setCurrent(target)
          }
        }
        requestAnimationFrame(tick)
        return
      }
      playClick()
      setPointer(pointer - 1)
      setCurrent(target)
    }
  }
  function goForward() {
    if (pointer < history.length - 1) {
      playClick()
      setPointer(pointer + 1)
      setCurrent(history[pointer + 1])
    }
  }
  function refresh() {
    playClick()
    setIsLoading(true)
    setProgress(0)
    setTimeout(() => { setIsLoading(false); setProgress(100) }, 1000)
  }
  function stop() { stopRef.current = true; setIsLoading(false); }
  function home() { navigate('google') }

  const address = useMemo(() => PAGE_TO_URL[current], [current])
  useEffect(() => { setAddressInput(address) }, [address])

  useEffect(() => {
    // first paint simulates loading
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  // Navegación a ITCorp ahora se hace mediante callback directo

  function handleAddressSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = addressInput.trim().toLowerCase()
    if (value.includes('msn')) return navigate('msn')
    if (value.includes('google')) return navigate('google')
    if (value.includes('yahoo')) return navigate('yahoo')
    if (value.includes('blockbuster')) return navigate('blockbuster')
    if (value.includes('geocities') || value.includes('pokemon')) return navigate('geocities')
    if (value.includes('itcorp')) return navigate('itcorp')
    if (value.includes('spork')) return navigate('spork')
    if (value.includes('amazon')) return navigate('amazon1999')
    setIsLoading(false)
    setCurrent('msn')
    setAddressInput(value)
    setErrorMode(true)
  }

  const [errorMode, setErrorMode] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchMode, setSearchMode] = useState<'web' | 'people' | 'business'>('web')
  const [showHistory, setShowHistory] = useState(false)

  const [showFav] = useState(false)
  const favorites: { label: string; key: PageKey }[] = [
    { label: 'MSN', key: 'msn' },
    { label: 'Google', key: 'google' },
    { label: 'Yahoo!', key: 'yahoo' },
  ]

  return (
    <div 
      className="ie98 h-full w-full flex flex-col" 
      style={{ zIndex: zIndex || 'auto' }}
      onClick={onFocus}
    >
      {/* Caption / Titlebar */}
      <div className="retro-titlebar text-xs justify-between">
        <div className="flex items-center gap-2">
          <span className="ie-appicon" aria-hidden="true" />
          <span className="font-bold">http://google.com/ - {title}</span>
        </div>
        <div className="caption-controls">
          <button title="Minimize">_</button>
          <button title="Maximize">▢</button>
          <button title="Close" className="window-close-button window-action-close window-button" onClick={onClose}>×</button>
        </div>
      </div>
      {/* Menú clásico (ES) */}
      <div className="ie-menubar ui-font">
        <span className="menu">Archivo</span>
        <span className="menu">Edición</span>
        <span className="menu">Ver</span>
        <span className="menu">Favoritos</span>
        <span className="menu">Herramientas</span>
        <span className="menu">Ayuda</span>
      </div>
      {/* Toolbar + dirección */}
      <div className="ie-toolbar ui-font">
        <div className="buttons">
          <button className="ie-toolbtn back" onClick={goBack} title="Back" />
          <button className="ie-toolbtn forward" onClick={goForward} title="Forward" />
          <button className="ie-toolbtn stop" onClick={stop} title="Stop" />
          <button className="ie-toolbtn refresh" onClick={refresh} title="Refresh" />
          <button className="ie-toolbtn home" onClick={home} title="Home" />
          <button className="ie-toolbtn search" onClick={()=>setShowSearch(true)} title="Search" />
          <button className="ie-toolbtn favorites" title="Favorites" />
          <button className="ie-toolbtn print" title="Print" />
          <button className="ie-toolbtn history" title="History" />
        </div>
        <form className="address" onSubmit={handleAddressSubmit}>
          <label>Dirección</label>
          <div className="ie-combo">
            <span className="favicon" />
            <input className="retro-input" value={addressInput} onChange={(e)=>setAddressInput(e.target.value)} />
            <button type="button" className="combo-arrow" aria-label="History" onClick={()=>setShowHistory(!showHistory)}>▼</button>
            {showHistory && (
              <div className="ie-history">
                {[...history].reverse().map((key, idx) => (
                  <button key={idx} className="item" type="button" onClick={()=>{ setShowHistory(false); navigate(key) }}>{PAGE_TO_URL[key]}</button>
                ))}
              </div>
            )}
          </div>
          <button className="retro-btn" type="submit">Ir</button>
          <div className="ie-address-actions">
            <button className="ie-pane-toggle" type="button" onClick={()=>setShowSearch(!showSearch)}>Búsqueda</button>
            <button className="ie-pane-toggle" type="button">Vínculos</button>
          </div>
        </form>
      </div>
      {/* Capa de carga */}
      {isLoading && (
        <div className="bg-black text-green-200 text-sm px-2 py-1">{loadingMessage ?? (`Conectando al servidor... ${address}`)}</div>
      )}
      {/* Contenido + Favorites */}
      <div className="flex-1 flex min-h-0">
        {showSearch && (
          <div className="ie-sidepane">
            <div className="title">Search</div>
            <div className="ie-search-tabs">
              <button className={searchMode==='web' ? 'active' : ''} onClick={()=>setSearchMode('web')}>Web</button>
              <button className={searchMode==='people' ? 'active' : ''} onClick={()=>setSearchMode('people')}>People</button>
              <button className={searchMode==='business' ? 'active' : ''} onClick={()=>setSearchMode('business')}>Business</button>
            </div>
            <div className="p-2">
              {searchMode === 'web' && (
                <div className="groupbox">
                  <div className="legend">Find a Web page</div>
                  <div className="text-xs mb-1">containing all the words:</div>
                  <form onSubmit={(e)=>{e.preventDefault(); if (searchQuery) setSearchQuery(searchQuery)}} className="mb-3">
                    <input className="retro-input w-full mb-2" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
                    <button className="retro-btn" type="submit">Search</button>
                  </form>
                  <div className="text-xs">Providers: MSN Search · LookSmart</div>
                </div>
              )}
              {searchMode === 'people' && (
                <div className="groupbox">
                  <div className="legend">Find a person</div>
                  <form onSubmit={(e)=>{e.preventDefault(); setSearchQuery('people:'+ (document.getElementById('pname') as HTMLInputElement)?.value || '')}}>
                    <div className="text-xs">Name:</div>
                    <input id="pname" className="retro-input w-full mb-1" />
                    <div className="text-xs">Location:</div>
                    <input className="retro-input w-full mb-2" />
                    <button className="retro-btn" type="submit">Find</button>
                  </form>
                </div>
              )}
              {searchMode === 'business' && (
                <div className="groupbox">
                  <div className="legend">Find a business</div>
                  <form onSubmit={(e)=>{e.preventDefault(); setSearchQuery('business:'+ (document.getElementById('bname') as HTMLInputElement)?.value || '')}}>
                    <div className="text-xs">Business name:</div>
                    <input id="bname" className="retro-input w-full mb-1" />
                    <div className="text-xs">Location:</div>
                    <input className="retro-input w-full mb-2" />
                    <button className="retro-btn" type="submit">Find</button>
                  </form>
                </div>
              )}
              {searchQuery && (
                <ul className="list-disc pl-5 mt-3 text-[12px]">
                  <li><a className="underline text-blue-700" href="#">{searchQuery} - Directory</a></li>
                  <li><a className="underline text-blue-700" href="#">{searchQuery} - Related links</a></li>
                  <li><a className="underline text-blue-700" href="#">{searchQuery} - Cached</a></li>
                </ul>
              )}
            </div>
          </div>
        )}
        {showFav && (
          <div className="ie-sidepane">
            <div className="title">Favorites</div>
            <ul>
              {favorites.map(f => (
                <li key={f.key}><button onClick={()=>navigate(f.key)}>{f.label}</button></li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex-1 bg-white overflow-auto" style={{ filter: 'contrast(1.05) saturate(0.9)' }}>
          {errorMode ? (
            <Error98 query={addressInput} onDismiss={()=>setErrorMode(false)} />
          ) : isLoading ? (
            <div className="p-4 text-center text-sm">Cargando contenido desde {address}...</div>
          ) : current === 'google-results' ? (
            <Google1999ResultsPage
              query={googleQuery}
              page={googlePage}
              onSubmitQuery={(q)=>{ setGoogleQuery(q || 'google'); setGooglePage(1); }}
              onNext={()=> setGooglePage(p=>p+1) }
              onOpenITCorp={(q)=>{ setItcorpQuery(q || 'technology'); navigate('itcorp') }}
              onOpenAmazon={()=>{ navigate('amazon1999') }}
              onOpenSpork={()=>{ navigate('spork') }}
              onOpenBlockbuster={()=>{ navigate('blockbuster') }}
              onOpenGeocities={()=>{ navigate('geocities') }}
            />
          ) : (
            <PageRenderer
              page={current}
              onMsnSearch={(q)=>{ setShowSearch(true); setSearchQuery(q); }}
              onGoogleSubmit={(q)=>{ setGoogleQuery(q || 'google'); setGooglePage(1); setItcorpQuery(q || 'technology'); navigate('google-results') }}
              itcorpQuery={itcorpQuery}
            />
          )}
        </div>
      </div>
      {/* Barra de estado */}
      <div className="ie-statusbar ui-font">
        <div className="cell">{isLoading ? 'Loading...' : 'Done'}</div>
        <div className="separator" />
        <div className="progress"><div style={{ width: `${progress}%` }} /></div>
        <div className="separator" />
        <div className="cell right"><span className="net-icon" /> Internet</div>
        <div className="grip" aria-hidden />
      </div>
    </div>
  )
}

function Error98({ query, onDismiss }:{ query: string, onDismiss: () => void }) {
  return (
    <div className="p-3 text-[13px]" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="text-xl font-bold">The page cannot be displayed</h1>
      <p className="mt-2">You are searching for: <b>{query}</b></p>
      <ul className="list-disc pl-6 mt-2">
        <li>Check the Address bar to ensure it is correct.</li>
        <li>Click the <b>Back</b> button to try another link.</li>
        <li>Click <b>Refresh</b> later.</li>
      </ul>
      <button className="retro-btn mt-3" onClick={onDismiss}>OK</button>
    </div>
  )
}


