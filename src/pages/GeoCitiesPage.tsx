export default function GeoCitiesPage() {
  return (
    <div className="p-3 text-[13px]" style={{ background: '#ffe', fontFamily: 'Comic Sans MS, Arial' }}>
      <div className="text-center">
        <div className="text-2xl">~* Mi PokeFanPage 1999 *~</div>
        <div className="marquee-wrap text-red-600"><span className="marquee-item">Bienvenido entrenador! Visita mi colección y firma el guestbook!</span></div>
      </div>
      <div className="mt-4 flex gap-3 items-center">
        <img src="https://media.tenor.com/1.gif" alt="under" onError={(e)=>{(e.target as HTMLImageElement).src='data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';}} />
        <span>🚧 Under Construction 🚧</span>
      </div>
      <ul className="list-disc pl-6 mt-3">
        <li><a className="underline text-blue-600" href="#">Guía de gimnasios</a></li>
        <li><a className="underline text-blue-600" href="#">Descargar MIDI</a></li>
        <li><a className="underline text-blue-600" href="#">Email me 📧</a></li>
      </ul>
    </div>
  )
}


