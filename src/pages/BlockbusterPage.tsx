export default function BlockbusterPage() {
  return (
    <div className="p-3 text-[13px]" style={{ fontFamily: 'Verdana, Arial, sans-serif', background: 'black', color: '#ffd54d' }}>
      <div className="text-2xl font-black text-center text-[#ffcc00]">BLOCKBUSTER entertainment - games</div>
      <div className="mt-4 border-t border-[#ffcc00] pt-4">
        <div className="text-[#ffcc00] text-xl font-extrabold underline">STAR WARS: SHADOWS OF THE EMPIRE</div>
        <div className="italic text-white">Nintendo/N64</div>
        <p className="mt-2 text-white max-w-[72ch]">
          Fly a snowspeeder against Imperial Forces on Hoth! Explosive action across 10 locations,
          hidden Challenge Points and power-ups. A straightforward action/adventure that packs a galaxy of gameplay!
        </p>
      </div>
      <div className="mt-6">
        <div className="text-[#ffcc00] text-xl font-extrabold underline">DONKEY KONG COUNTRY 3</div>
        <div className="italic text-white">Nintendo/SNES</div>
        <p className="mt-2 text-white max-w-[72ch]">
          More friends and enemies make the adventure more interesting and exciting. Check out hidden areas,
          bonus games and special items in your quest!
        </p>
      </div>
    </div>
  )
}



