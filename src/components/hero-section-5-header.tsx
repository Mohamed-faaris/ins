import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuItems = [
  { name: 'Product', href: '#link' },
  { name: 'Solutions', href: '#link' },
  { name: 'Pricing', href: '#link' },
  { name: 'Company', href: '#link' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)

  React.useEffect(() => {
    if (!menuState) {
      document.documentElement.classList.remove('overflow-hidden')
      return
    }

    const mediaQuery = window.matchMedia('(max-width: 1023px)')

    const updateOverflow = () => {
      document.documentElement.classList.toggle(
        'overflow-hidden',
        mediaQuery.matches
      )
    }

    updateOverflow()
    mediaQuery.addEventListener('change', updateOverflow)

    return () => {
      mediaQuery.removeEventListener('change', updateOverflow)
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [menuState])

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : ''}
        className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm max-lg:data-[state=active]:bottom-0"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-5">
            {/* Logo */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <a
                href="/"
                aria-label="Home"
                className="flex items-center space-x-2"
              >
                <img
                  src="insyrium-full-name.png"
                  alt="Insyrium"
                  className="h-8"
                />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 block lg:hidden"
              >
                {!menuState ? (
                  <div className="flex flex-col gap-1.5">
                    <span className="h-0.5 w-6 rounded-full bg-black" />
                    <span className="h-0.5 w-6 rounded-full bg-black" />
                  </div>
                ) : (
                  <X className="size-6 text-black" />
                )}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm font-medium">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-700 transition-colors duration-200 hover:text-black"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </a>
              <a href="#">
                <Button size="sm">Sign Up</Button>
              </a>
            </div>

            {/* Mobile Menu */}
            {menuState && (
              <div className="w-full py-6 lg:hidden">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="block text-xl font-medium text-gray-800 hover:text-black"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3">
                  <Button variant="outline">Login</Button>
                  <Button>Sign Up</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}