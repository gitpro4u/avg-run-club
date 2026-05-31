// 'use client';

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// interface NavbarProps {
//   onJoinClick: () => void;
// }

// export default function Navbar({ onJoinClick }: NavbarProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/avg-logo.svg" alt="AVG Run Club" className="h-9 md:h-10" />
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
//           <a href="#runs" className="hover:text-[#FF002E] transition-colors">Runs</a>
//           <a href="#join" className="hover:text-[#FF002E] transition-colors">Join</a>
//           <a href="#community" className="hover:text-[#FF002E] transition-colors">Community</a>
//         </div>

//         <div className="flex items-center gap-3">
//           <button 
//             onClick={onJoinClick}
//             className="px-6 py-2.5 bg-[#FF002E] hover:bg-[#FF002E]/90 active:scale-[0.985] rounded-full text-sm font-semibold transition-all"
//           >
//             Join The Club
//           </button>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
//             {isOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden glass border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-sm">
//           <a href="#runs" className="py-1" onClick={() => setIsOpen(false)}>Runs</a>
//           <a href="#join" className="py-1" onClick={() => setIsOpen(false)}>Join</a>
//           <a href="#community" className="py-1" onClick={() => setIsOpen(false)}>Community</a>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
const [isOpen, setIsOpen] = useState(false);

return ( <nav
   className="
     fixed top-0 left-0 right-0 z-50
     bg-transparent
     border-b border-transparent
     transition-all duration-500 ease-out
     hover:bg-black/20
     hover:backdrop-blur-xl
     hover:border-white/10
     hover:shadow-[0_8px_32px_rgba(255,255,255,0.04)]
   "
 > <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

```
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="/avg-logo.svg"
        alt="AVG Run Club"
        className="h-10 w-auto"
      />
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-10 text-sm font-medium">

      <a
        href="#runs"
        className="text-white/80 hover:text-white transition-colors duration-300"
      >
        Runs
      </a>

      <a
        href="#join"
        className="text-white/80 hover:text-white transition-colors duration-300"
      >
        Join
      </a>

      <a
        href="#community"
        className="text-white/80 hover:text-white transition-colors duration-300"
      >
        Community
      </a>

    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3">

      <button
        onClick={onJoinClick}
        className="
          px-6 py-2.5
          rounded-full
          bg-[#FF002E]
          hover:bg-[#ff1f48]
          text-white
          text-sm
          font-semibold
          transition-all duration-300
          hover:scale-105
        "
      >
        Join The Club
      </button>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div
      className="
        md:hidden
        bg-black/30
        backdrop-blur-xl
        border-t border-white/10
        px-6 py-6
        flex flex-col gap-4
      "
    >
      <a
        href="#runs"
        onClick={() => setIsOpen(false)}
        className="text-white/80 hover:text-white"
      >
        Runs
      </a>

      <a
        href="#join"
        onClick={() => setIsOpen(false)}
        className="text-white/80 hover:text-white"
      >
        Join
      </a>

      <a
        href="#community"
        onClick={() => setIsOpen(false)}
        className="text-white/80 hover:text-white"
      >
        Community
      </a>
    </div>
  )}
</nav>


);
}
