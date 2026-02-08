import React from 'react'
import { BookOpenIcon, CpuIcon, LayoutDashboardIcon} from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { UserButton, SignedIn} from '@clerk/clerk-react'

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className='fixed top-0 w-full z-50 bg-base-100/80 backdrop-blur-xl border-b border-base-content/5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between'>
          
          {/* LOGO */}
          <Link to="/" className='flex items-center gap-2 group shrink-0'>
            <div className='p-1.5 sm:p-2 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300'>
              <CpuIcon className='size-5 sm:size-6 text-primary group-hover:text-white'/>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold text-lg sm:text-xl tracking-tighter leading-none'>
                Talent<span className='text-primary'>IQ</span>
              </span>
              <span className='text-[10px] uppercase tracking-widest opacity-50 font-bold hidden sm:block'>
                Pro Collaborative
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV (Middle) */}
          <SignedIn>
            <div className='hidden md:flex items-center gap-2 bg-base-200/50 p-1.5 rounded-2xl border border-base-content/5'>
              <NavLink 
                to="/problems" 
                icon={<BookOpenIcon className='size-4'/>} 
                label="Problems" 
                active={isActive("/problems")} 
              />
              <NavLink 
                to="/dashboard" 
                icon={<LayoutDashboardIcon className='size-4'/>} 
                label="Dashboard" 
                active={isActive("/dashboard")} 
              />
            </div>
          </SignedIn>

          {/* RIGHT SIDE: PROFILE ONLY */}
          <div className='flex items-center'>
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "size-9 rounded-xl border-2 border-primary/20 hover:border-primary transition-all",
                  }
                }}
              />
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAV */}
        <div className='md:hidden fixed bottom-0 left-0 w-full z-50 bg-base-100/90 backdrop-blur-lg border-t border-base-content/5 px-6 py-3'>
          <div className='flex justify-around items-center'>
            <MobileNavLink 
              to="/problems" 
              icon={<BookOpenIcon className='size-6'/>} 
              label="Problems" 
              active={isActive("/problems")} 
            />
            <MobileNavLink 
              to="/dashboard" 
              icon={<LayoutDashboardIcon className='size-6'/>} 
              label="Dashboard" 
              active={isActive("/dashboard")} 
            />
          </div>
        </div>
    
    </>
  )
}

const NavLink = ({ to, icon, label, active }) => (
  <Link 
    to={to}
    className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium
      ${active ? "bg-base-100 text-primary shadow-sm border border-base-content/5" : "text-base-content/60 hover:text-base-content"}`}
  >
    {icon}
    <span className='text-sm'>{label}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, label, active }) => (
  <Link 
    to={to}
    className={`flex flex-col items-center gap-1 transition-all duration-300 ${active ? "text-primary" : "text-base-content/50"}`}
  >
    <div className={`p-1.5 rounded-xl ${active ? "bg-primary/10" : ""}`}>
      {icon}
    </div>
    <span className='text-[10px] font-bold uppercase tracking-tighter'>{label}</span>
  </Link>
);

export default Navbar;