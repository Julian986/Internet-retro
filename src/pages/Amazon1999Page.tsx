import { useState } from 'react';

const Amazon1999Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  return (
    <div className="bg-white font-serif text-sm">
      {/* Header */}
      <div className="bg-white border-b border-gray-300">
        <div className="flex justify-end items-center px-4 py-1 text-xs">
          <span className="mr-4">🛒</span>
          <span className="mr-2">YOUR ACCOUNT</span>
          <span className="mr-2">|</span>
          <span>HELP</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white">
        <div className="flex justify-center">
          <div className="bg-orange-400 text-white px-3 py-2 text-xs font-bold rounded-t">WELCOME</div>
          <div className="border border-gray-400 px-3 py-2 text-xs cursor-pointer hover:bg-gray-300 rounded-t" style={{backgroundColor: '#ffe7a2cc'}}>BOOKS</div>
          <div className="border border-gray-400 px-3 py-2 text-xs cursor-pointer hover:bg-gray-300 rounded-t" style={{backgroundColor: '#ffe7a2cc'}}>MUSIC</div>
          <div className="border border-gray-400 px-3 py-2 text-xs cursor-pointer hover:bg-gray-300 rounded-t" style={{backgroundColor: '#ffe7a2cc'}}>VIDEO</div>
          <div className="border border-gray-400 px-3 py-2 text-xs cursor-pointer hover:bg-gray-300 rounded-t" style={{backgroundColor: '#ffe7a2cc'}}>TOYS & GAMES</div>
          <div className="border border-gray-400 px-3 py-2 text-xs cursor-pointer hover:bg-gray-300 rounded-t" style={{backgroundColor: '#ffe7a2cc'}}>ELECTRONICS</div>
          <div className="border border-gray-400 px-3 py-2 text-xs cursor-pointer hover:bg-gray-300 rounded-t" style={{backgroundColor: '#ffe7a2cc'}}>e-CARDS</div>
          <div className="border border-gray-400 px-3 py-2 text-xs cursor-pointer hover:bg-gray-300 rounded-t" style={{backgroundColor: '#ffe7a2cc'}}>AUCTIONS</div>
        </div>
      </div>

      {/* Blue Navigation Bar */}
      <div className="text-white mb-2" style={{backgroundColor: '#4582b4'}}>
        <div className="flex justify-center text-xs font-bold">
          <div className="px-4 py-2 border-r border-blue-500">HOW TO ORDER</div>
          <div className="px-4 py-2 border-r border-blue-500">OUR GUARANTEE</div>
          <div className="px-4 py-2">SITE GUIDE</div>
        </div>
      </div>
      <div className="px-4 py-1 text-xs text-black text-right">Friday, August 27, 1999</div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-48">
          {/* Search Box - Separado y más amarillo */}
          <div className="bg-[#ffcc66] p-2 border border-gray-400 mb-2">
            <div className="text-white text-xs font-bold px-2 py-1 mb-2" style={{backgroundColor: '#4582b4'}}>SEARCH</div>
            <select 
              className="w-full text-xs border border-gray-400 mb-1 bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Products</option>
              <option>Books</option>
              <option>Music</option>
              <option>Video</option>
            </select>
            <input 
              type="text" 
              className="w-full text-xs border border-gray-400 px-1 py-1 mb-2 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              style={{ backgroundColor: "oklch(0.63 0.17 54.31)" }}
            className="text-xs px-1 py-1 border border-gray-400 rounded-full text-white">GO!</button>
          </div>

          {/* Browse Section - Separado y fondo blanco */}
          <div className="bg-white p-2 border border-gray-400">
            <div className="text-white text-xs font-bold px-2 py-1 mb-2" style={{backgroundColor: '#4582b4'}}>BROWSE</div>
            
            <div className="text-xs">
              <div className="font-bold text-blue-600 mb-1">• Books</div>
              <div className="ml-2 text-blue-600 underline mb-1">Bestsellers, Computers, Kids, Business...</div>
              
              <div className="font-bold text-blue-600 mb-1">• Music</div>
              <div className="ml-2 text-blue-600 underline mb-1">New Releases, Top Sellers, Classical, Soundtracks...</div>
              
              <div className="font-bold text-blue-600 mb-1">• Video</div>
              <div className="ml-2 text-blue-600 underline mb-1">DVDs, Top Sellers, New Releases, Kids & Family...</div>
              
              <div className="font-bold text-blue-600 mb-1">• Auctions</div>
              <div className="ml-2 text-blue-600 underline mb-1">Books, CDs, Photo Equipment, Collectibles...</div>
              
              <div className="font-bold text-blue-600 mb-1">• Electronics</div>
              <div className="ml-2 text-blue-600 underline mb-1">TVs, Cameras, Computer Add-Ons, DVD Players...</div>
              
              <div className="font-bold text-blue-600 mb-1">• Toys & Games</div>
              <div className="ml-2 text-blue-600 underline mb-1">Toys for Grownups, Games & Puzzles, Action Figures, Baby Toys...</div>
            </div>
          </div>
        </div>

        {/* Main Content - TODO EL CONTENIDO DEL MEDIO */}
        <div className="flex-1 p-4 pt-0">
          {/* Welcome Section */}
          <div className="mb-4">
            <div className="mb-0 relative">
              <div className="relative inline-block">
                <div className="text-orange-400 text-sm font-bold absolute top-9 right-38 transform translate-x-8 whitespace-nowrap z-10">WELCOME TO</div>
                <img src="https://inkbotdesign.com/wp-content/uploads/2020/01/amazon-logo-1998%E2%80%932000.png.webp" alt="Amazon.com" className="h-50"/>
              </div>
            </div>
            
            <div className="text-sm mb-1 -mt-8 relative z-20" style={{color: 'oklch(0.75 0.2 45.93)', fontWeight: 600}}>
              Hello! Shopping at Amazon.com is 100% secure - <span className="text-blue-600 underline">guaranteed</span>.
              Already a customer? <span className="text-blue-600 underline">Sign in</span>.
            </div>

            {/* Main Content Sections */}
            <div className="flex">
              {/* Content Area */}
              <div className="flex-1 mr-4">
                {/* Books Section */}
                <div className="mb-6">
                  <div className="text-blue-600 underline font-bold mb-1">In Books</div>
                  <div className="flex">
                    <div className="mr-3">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA2MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMDA2NkNDIi8+CjxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRkZGRkZGIi8+Cjx0ZXh0IHg9IjMwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJPT0s8L3RleHQ+CjwvZWc+Cjwvc3ZnPg==" alt="Book" className="w-12 h-16"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-orange-600 font-bold text-base mb-1">The Millionaire Next Door</div>
                      <div className="text-xs leading-tight">
                        Most people have it all wrong about wealth in America. Wealth is not the same as income. If you make a good income each year and spend it all, you are not getting wealthier. <span className="text-blue-600 underline">The Millionaire Next Door</span> identifies seven common traits that show up again and again among those who have accumulated wealth. Go to <span className="text-blue-600 underline">Books</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Music Section */}
                <div className="mb-6">
                  <div className="text-blue-600 underline font-bold mb-1">In Music</div>
                  <div className="flex">
                    <div className="flex-1">
                      <div className="text-orange-600 font-bold text-base mb-1">Christina Aguilera</div>
                      <div className="text-xs leading-tight">
                        Former Mouseketeer <span className="text-blue-600 underline">Christina Aguilera</span> proves she's no longer a little girl with her sultry debut. Her impressive four-octave range helps her navigate the R&B-flavored pop of "Genie in a Bottle" and the Latin-tinged "Genio Atrapado." Go to <span className="text-blue-600 underline">Music</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiIGZpbGw9IiNGRkE1MDAiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSIzMCIgeT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DRDwvdGV4dD4KPHN2Zz4=" alt="CD" className="w-12 h-12"/>
                    </div>
                  </div>
                </div>

                {/* Electronics Section */}
                <div className="mb-6">
                  <div className="text-blue-600 underline font-bold mb-1">In Electronics</div>
                  <div className="flex">
                    <div className="flex-1">
                      <div className="text-orange-600 font-bold text-base mb-1">MiniDisc the Magnificent</div>
                      <div className="text-xs leading-tight">
                        Sony's <span className="text-blue-600 underline">Bundle5 MiniDisc package</span> harmonizes two separate products—a MiniDisc home recording deck and a portable MiniDisc player—so you can record, edit, and title your own discs from both analog and digital sources, then enjoy them on the go. Go to <span className="text-blue-600 underline">Electronics</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjQzBDMEMwIi8+CjxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjQwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1pbmlEaXNjPC90ZXh0Pgo8L3N2Zz4=" alt="MiniDisc Player" className="w-20 h-15"/>
                    </div>
                  </div>
                </div>

                {/* Toys & Games Section */}
                <div className="mb-6">
                  <div className="text-blue-600 underline font-bold mb-1">In Toys & Games</div>
                  <div className="flex">
                    <div className="mr-3">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkZBNTAwIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkY2QjAwIi8+Cjx0ZXh0IHg9IjMwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBhY2s8L3RleHQ+Cjwvc3ZnPg==" alt="Backpack" className="w-12 h-12"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-orange-600 font-bold text-base mb-1">Pack with Pride</div>
                      <div className="text-xs leading-tight">
                        We ain't lion: this adorable <span className="text-blue-600 underline">Goliath Backpack Pal</span> is a <span className="italic">grrreat</span> way to scare away those first-day-of-school jitters. Fill up this tummy with books, toys, and treats, and this furry beast will be your child's mane man in no time. Go to <span className="text-blue-600 underline">Toys & Games</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Section */}
                <div className="mb-6">
                  <div className="text-blue-600 underline font-bold mb-1">In Video</div>
                  <div className="flex">
                    <div className="flex-1">
                      <div className="text-orange-600 font-bold text-base mb-1">Texas Two-Step?</div>
                      <div className="text-xs leading-tight mb-2">
                        In a stunning admission this week, the FBI confirmed that in 1993 its agents fired flammable devices at the Branch Davidian compound in Waco, Texas, hours before the inferno erupted. But the Oscar-nominated <span className="text-blue-600 underline italic">Waco: The Rules of Engagement</span> suggested this possibility back in 1997. Check out this fearless documentary and prepare to question the government's spin. Go to <span className="text-blue-600 underline">Video</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="relative">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkZBNTAwIi8+Cjx0ZXh0IHg9IjQwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+V0FDTzwvdGV4dD4KPHRleHQgeD0iNDAiIHk9IjQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRWRDwvdGV4dD4KPHN2Zz4=" alt="Waco DVD" className="w-20 h-15"/>
                        <div className="absolute top-0 right-0 text-white text-xs px-1" style={{backgroundColor: '#4582b4'}}>30% OFF</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auctions Section */}
                <div className="mb-6">
                  <div className="text-blue-600 underline font-bold mb-1">In Auctions</div>
                  <div className="flex">
                    <div className="mr-3">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjMwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVVDVE9OPC90ZXh0Pgo8dGV4dCB4PSIzMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IQU1NRVI8L3RleHQ+Cjwvc3ZnPg==" alt="Auction" className="w-12 h-12"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-orange-600 font-bold text-base mb-1">Build a Better Brain</div>
                      <div className="text-xs leading-tight">
                        Before you hit the books, visit Amazon.com Auctions and check out the huge selection of <span className="text-blue-600 underline">educational software</span>. Whether you're teaching the ABCs or writing a thesis, our sellers have the tools to help you succeed. Go to <span className="text-blue-600 underline">Auctions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-64">
                {/* What are they listening container - SEPARADO y fondo amarillo */}
                <div className="mb-4">
                  <div className="p-2 border border-gray-400" style={{backgroundColor: 'white'}}>
                    <div className="text-xs mb-2">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSw1KSI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI0ZGQzEwNyIvPgo8L2c+Cjwvc3ZnPg==" alt="Kids" className="w-8 h-8 float-left mr-2"/>
                      <span className="text-black">What are they listening to in</span> <span className="text-blue-600 underline">Austin, Texas</span>? <span className="text-black">Explore Amazon.com</span> <span className="text-blue-600 underline">Purchase Circles</span>.
                    </div>
                  </div>
                </div>

                {/* Amazon.com 100 Hot Books - SEPARADO y fondo amarillo */}
                <div className="mb-4">
                  <div 
                  style={{backgroundColor: '#ffe7a2cc'}}
                  className="text-blue-600 underline text-xs font-bold px-2 py-1">Amazon.com 100 Hot  Books</div>
                  
                  <div className="border-l border-r border-b border-gray-400 p-2">
                    <div className="text-xs font-bold mb-2">Updated Hourly</div>
                    <div className="text-xs">
                      <div className="mb-1">1. <span className="text-blue-600 underline">Harry Potter and the Prisoner of Azkaban</span></div>
                      <div className="mb-1 ml-4 text-gray-600">by J. K. Rowling</div>
                      <div className="mb-1">2. <span className="text-blue-600 underline">Harry Potter and the Sorcerer's Stone</span></div>
                      <div className="mb-1 ml-4 text-gray-600">by J. K. Rowling</div>
                      <div className="mb-1">3. <span className="text-blue-600 underline">Harry Potter and the Chamber of Secrets</span></div>
                      <div className="mb-1 ml-4 text-gray-600">by J. K. Rowling</div>
                    </div>
                    <div className="text-blue-600 underline text-xs"><span className="text-orange-400">▶</span> More Hot Books</div>
                  </div>
                </div>

                {/* Today in Music - fondo amarillo */}
                <div className="mb-4">
                  <div 
                  style={{backgroundColor: '#ffe7a2cc'}}
                  className="text-xs font-bold px-2 py-1">
                    <span className="text-blue-600 underline">Today in Music</span> <br />
                    <span className="text-black">Free song</span> <span className="text-blue-600 underline">downloads</span>.
                    </div>

                  <div className="border-l border-r border-b border-gray-400 p-2 text-xs">
                    
                    
                    <div className="font-bold mb-1">Music Top Sellers</div>
                    <div className="mb-1">1. <span className="text-blue-600 underline">Western Wall: The Tucson Sessions</span></div>
                    <div className="mb-1 ml-4 text-gray-600">Linda Ronstadt, Emmylou Harris</div>
                    <div className="mb-1">2. <span className="text-blue-600 underline">Fly</span></div>
                    <div className="mb-1 ml-4 text-gray-600">Dixie Chicks</div>
                    <div className="mb-1">3. <span className="text-blue-600 underline">Supernatural</span></div>
                    <div className="mb-1 ml-4 text-gray-600">Santana</div>
                    
                    <div className="text-blue-600 underline"><span className="text-orange-400">▶</span> More Music Top Sellers</div>
                  </div>
                </div>

                {/* Today in Video - fondo amarillo */}
                <div className="mb-4">
                  <div 
                  style={{backgroundColor: '#ffe7a2cc'}}
                  className="text-xs font-bold px-2 py-1">
                    <span className="text-blue-600 underline">Today in Video</span> <br />
                    <span className="text-black">Pre-order</span> <span className="text-blue-600 underline">The Matrix</span> <span className="text-black">on DVD.</span>
                  </div>
                  <div className="border-l border-r border-b border-gray-400 p-2 text-xs">

                    <div className="font-bold mb-1">VHS Top Sellers</div>
                    <div className="mb-1">1. <span className="text-blue-600 underline">Living Yoga: A.M./P.M. Yoga for Beginners Set</span></div>
                    <div className="mb-1">2. <span className="text-blue-600 underline">There's Something About Mary (Special Edition)</span></div>
                    <div className="mb-1">3. <span className="text-blue-600 underline">Tae-Bo Workout: Instructional and Basic</span></div>
                    
                    <div className="text-blue-600 underline"><span className="text-orange-400">▶</span> More VHS Top Sellers</div>
                    <div className="text-blue-600 underline"><span className="text-orange-400">▶</span> DVD Top Sellers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-300 p-4">
        <div className="flex justify-center text-xs space-x-4 mb-2">
          <span className="text-blue-600 underline">1-Click Settings</span>
          <span>|</span>
          <span className="text-blue-600 underline">Shopping Cart</span>
          <span>|</span>
          <span className="text-blue-600 underline">Your Account</span>
          <span>|</span>
          <span className="text-blue-600 underline">Help</span>
        </div>
        
        <div className="text-center text-xs mb-2">
          <span className="text-blue-600 underline font-bold">About Amazon.com</span>
          <span className="mx-2">|</span>
          <span className="text-blue-600 underline font-bold">Join Our Staff</span>
        </div>
        
        <div className="text-xs text-center">
          <span className="text-blue-600 underline">Copyright and disclaimer</span> © 1996-1999, Amazon.com, Inc.
        </div>
      </div>
    </div>
  );
};

export default Amazon1999Page;