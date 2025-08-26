export default function MSN1998Page({ onSearch }:{ onSearch?: (q: string) => void } = {}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const q = String(data.get('q') || '').trim()
    if (q && onSearch) onSearch(q)
  }
  return (
    <div className="p-3 text-[13px]" style={{ fontFamily: 'Arial, Verdana, sans-serif' }}>
      <div className="text-center">
        <div className="text-2xl font-bold" style={{ color: '#003399' }}>MSN</div>
        <div className="text-xs text-gray-700">The Microsoft Network</div>
      </div>
      <form onSubmit={handleSubmit} className="mt-3 flex items-center justify-center gap-2">
        <input name="q" className="retro-input w-[360px]" placeholder="MSN Search" />
        <button className="retro-btn" type="submit">Search</button>
      </form>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="font-bold mb-1">Headlines</div>
          <ul className="list-disc pl-5">
            <li><a className="underline text-blue-700" href="#">Technology: Internet growth continues</a></li>
            <li><a className="underline text-blue-700" href="#">Entertainment: New releases</a></li>
            <li><a className="underline text-blue-700" href="#">Sports: Finals this weekend</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-1">Directories</div>
          <ul className="list-disc pl-5">
            <li><a className="underline text-blue-700" href="#">Travel</a></li>
            <li><a className="underline text-blue-700" href="#">Shopping</a></li>
            <li><a className="underline text-blue-700" href="#">Games</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-1">Quick Links</div>
          <ul className="list-disc pl-5">
            <li><a className="underline text-blue-700" href="#">Hotmail</a></li>
            <li><a className="underline text-blue-700" href="#">MSN Messenger</a></li>
            <li><a className="underline text-blue-700" href="#">Windows Update</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}


