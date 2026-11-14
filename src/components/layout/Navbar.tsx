import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import useActiveSection, { sectionIdsFromNav } from '@/hooks/useActiveSection';
import { navItems, profile } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIdsFromNav);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-[#E5DED6] bg-navy-950/95 shadow-sm shadow-[#2C2420]/5'
          : 'border-b border-[#E5DED6] bg-navy-950/95'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6" aria-label="Primary">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3" aria-label={`${profile.name} home`}>
          <Logo />
          <span className="hidden text-sm font-medium text-slate-200 sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center justify-center gap-1 lg:flex lg:flex-1">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3 py-2 font-dm text-sm transition-colors duration-200 ${
                    isActive ? 'text-electric-500' : 'text-slate-400 hover:text-[#2C2420]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-1 h-px rounded-full bg-electric-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" className="px-5 py-2.5">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="glass flex h-11 w-11 items-center justify-center rounded-xl text-[#2C2420] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-[#E5DED6] bg-navy-950 lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {navItems.map((item) => {
                const isActive = activeId === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'true' : undefined}
                      className={`block rounded-xl px-4 py-3 text-base transition-colors duration-200 ${
                        isActive
                          ? 'bg-navy-900 text-electric-500'
                          : 'text-slate-300 hover:bg-navy-900 hover:text-[#2C2420]'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 block rounded-lg bg-electric-500 px-4 py-3 text-center font-dm text-sm font-medium text-[#FFFEFC] transition-colors hover:bg-electric-600"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
