// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// /* ─────────────────────────────────────────
//     DATA CONFIGURATIONS
// ───────────────────────────────────────── */
// const services = [
//   { label: 'CCTV Monitoring',         href: '/services/cctv-monitoring',        desc: 'Real-time proactive surveillance logic' },
//   { label: 'Incident Reporting',      href: '/services/incident-reporting',      desc: 'Automated immediate log generation' },
//   { label: 'Construction Monitoring', href: '/services/construction-monitoring', desc: 'Asset protection for active sites' },
//   { label: 'Retail Security',         href: '/services/retail-monitoring',      desc: 'Loss prevention & analytics maps' },
//   { label: 'Residential Monitoring',  href: '/services/residential-monitoring',  desc: 'Secure community tracking layers' },
//   { label: 'Corporate Surveillance',  href: '/services/corporate-surveillance',  desc: 'Enterprise-level command units' },
//   { label: 'Fuel Station Monitoring', href: '/services/fuel-station',            desc: 'Forecourt threat management' },
//   { label: 'Hospital & School',       href: '/services/hospital-school',        desc: 'Sensitive zone boundary tracking' },
//   { label: 'Customized Solutions',    href: '/services/customized-solutions',   desc: 'Tailored architectural matrices' },
// ];

// const industries = [
//   { label: 'Residential Sector',  href: '/industries/residential',  num: '01' },
//   { label: 'Commercial Blocks',   href: '/industries/commercial',   num: '02' },
//   { label: 'Construction Yards',  href: '/industries/construction', num: '03' },
//   { label: 'Healthcare Hubs',     href: '/industries/healthcare',   num: '04' },
//   { label: 'Educational Zones',   href: '/industries/education',    num: '05' },
//   { label: 'Retail Environments', href: '/industries/retail',       num: '06' },
//   { label: 'Hospitality Sites',   href: '/industries/hospitality',  num: '07' },
//   { label: 'Industrial Plants',   href: '/industries/industrial',   num: '08' },
// ];

// const navLinks = [
//   { label: 'Home',       href: '/'          },
//   { label: 'About',      href: '/about'     },
//   { label: 'Services',   href: '/services', dropdown: 'services'   as const },
//   { label: 'Industries', href: '/industries',dropdown: 'industries' as const },
//   { label: 'Resources',  href: '/resources' },
//   { label: 'Blog',       href: '/blog'      },
//   { label: 'Careers',    href: '/careers'   },
//   { label: 'Contact',    href: '/contact'   },
// ];

// type Dropdown = 'services' | 'industries' | null;

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<Dropdown>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<Dropdown>(null);
//   const pathname = usePathname();
//   const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     setActiveDropdown(null);
//     setMobileExpanded(null);
//   }, [pathname]);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [mobileOpen]);

//   const isActive = (href: string) =>
//     href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

//   const openDropdown = (name: 'services' | 'industries') => {
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//     setActiveDropdown(name);
//   };

//   const closeDropdown = () => {
//     dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
//   };

//   const keepDropdown = () => {
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//   };

//   return (
//     <>
//       <header className={`bm-header${scrolled ? ' bm-header--scrolled' : ''}`}>
//         <div className="bm-header-inner">

//           {/* Logo - Fixed background clipping issue */}
//           <Link href="/" className="bm-logo" aria-label="BlueMond Solutions home" style={{ display: 'flex', alignItems: 'center' }}>
//             <div 
//               className="bm-logo-mark" 
//               style={{ 
//                 padding: 0,
//                 background: 'transparent',
//                 clipPath: 'none',
//                 width: '220px',
//                 height: 'auto',
//                 display: 'flex',
//                 alignItems: 'center',
//                 overflow: 'visible'
//               }}
//             >
//               <Image 
//                 src="/logo.png" 
//                 alt="BlueMond Solutions logo" 
//                 width={220} 
//                 height={72} 
//                 style={{ objectFit: 'contain', width: '100%', height: 'auto' }} 
//                 priority 
//               />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="bm-nav">
//             {navLinks.map((link, idx) => {
//               const hasDrop = !!link.dropdown;
//               return (
//                 <div
//                   key={idx}
//                   className="bm-dropdown-trigger"
//                   onMouseEnter={() => hasDrop ? openDropdown(link.dropdown!) : undefined}
//                   onMouseLeave={hasDrop ? closeDropdown : undefined}
//                 >
//                   <Link href={link.href} className={`bm-navlink${isActive(link.href) ? ' bm-navlink--active' : ''}`}>
//                     <span>{link.label}</span>
//                     {hasDrop && <ChevronIcon open={activeDropdown === link.dropdown} small />}
//                     <span className="bm-navlink-bar" />
//                   </Link>

//                   {/* Mega Dropdowns */}
//                   {link.dropdown === 'services' && (
//                     <div
//                       className={`bm-mega-panel${activeDropdown === 'services' ? ' bm-mega-panel--open' : ''}`}
//                       onMouseEnter={keepDropdown}
//                       onMouseLeave={closeDropdown}
//                     >
//                       <div className="bm-mega-header">
//                         <span className="bm-mega-title">Security Services</span>
//                         <span className="bm-mega-badge">{services.length} Solutions</span>
//                       </div>
//                       <div className="bm-mega-grid bm-mega-grid--3">
//                         {services.map((s, i) => (
//                           <Link
//                             key={i}
//                             href={s.href}
//                             className="bm-service-card"
//                             style={{ animationDelay: `${i * 35}ms` } as React.CSSProperties}
//                           >
//                             <div className="bm-service-num">0{i + 1}</div>
//                             <div className="bm-service-info">
//                               <div className="bm-service-label">{s.label}</div>
//                               <div className="bm-service-desc">{s.desc}</div>
//                             </div>
//                             <ArrowIcon className="bm-service-arrow" />
//                           </Link>
//                         ))}
//                       </div>
//                       <div className="bm-mega-footer">
//                         <Link href="/services" className="bm-mega-footer-link">
//                           View all services <ArrowIcon />
//                         </Link>
//                       </div>
//                     </div>
//                   )}

//                   {link.dropdown === 'industries' && (
//                     <div
//                       className={`bm-mega-panel bm-mega-panel--sm${activeDropdown === 'industries' ? ' bm-mega-panel--open' : ''}`}
//                       onMouseEnter={keepDropdown}
//                       onMouseLeave={closeDropdown}
//                     >
//                       <div className="bm-mega-header">
//                         <span className="bm-mega-title">Sectors We Protect</span>
//                       </div>
//                       <div className="bm-mega-grid bm-mega-grid--2">
//                         {industries.map((ind, i) => (
//                           <Link
//                             key={i}
//                             href={ind.href}
//                             className="bm-industry-row"
//                             style={{ animationDelay: `${i * 40}ms` } as React.CSSProperties}
//                           >
//                             <span className="bm-industry-num">{ind.num}</span>
//                             <span className="bm-industry-label">{ind.label}</span>
//                             <ArrowIcon className="bm-industry-arrow" />
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </nav>

//           {/* Action Trigger Elements */}
//           <div className="bm-header-actions">
//             <Link href="/request-quote" className="bm-cta">
//               <span>Establish Security Loop</span>
//               <span className="bm-cta-arrow"><ArrowIcon /></span>
//             </Link>

//             <button
//               className={`bm-hamburger${mobileOpen ? ' bm-hamburger--open' : ''}`}
//               onClick={() => setMobileOpen(!mobileOpen)}
//               aria-label="Toggle Menu"
//             >
//               <span /><span /><span />
//             </button>
//           </div>

//         </div>
//       </header>

//       {/* ─── MOBILE DRAWER ─── */}
//       <div className={`bm-drawer${mobileOpen ? ' bm-drawer--open' : ''}`}>
//         <div className="bm-drawer-head">
//           {/* Mobile Logo Fixed */}
//           <Link href="/" className="bm-logo" aria-label="BlueMond Solutions home" style={{ display: 'flex', alignItems: 'center' }}>
//             <div 
//               className="bm-logo-mark bm-logo-mark--sm" 
//               style={{ 
//                 padding: 0, 
//                 background: 'transparent',
//                 clipPath: 'none',
//                 width: '160px', 
//                 height: 'auto', 
//                 display: 'flex', 
//                 alignItems: 'center',
//                 overflow: 'visible'
//               }}
//             >
//               <Image 
//                 src="/logo.png" 
//                 alt="BlueMond Solutions logo" 
//                 width={160} 
//                 height={56} 
//                 style={{ objectFit: 'contain', width: '100%', height: 'auto' }} 
//               />
//             </div>
//           </Link>
//           <button className="bm-drawer-close" onClick={() => setMobileOpen(false)}>
//             <CloseIcon />
//           </button>
//         </div>

//         <nav className="bm-drawer-nav">
//           <MobileLink href="/" label="Home" delay={0} />
//           <MobileLink href="/about" label="About" delay={1} />

//           {/* Accordion 1: Services */}
//           <div className="bm-accordion">
//             <button
//               className={`bm-accordion-trigger${mobileExpanded === 'services' ? ' bm-accordion-trigger--open' : ''}`}
//               onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
//               style={{ animationDelay: '80ms' }}
//             >
//               <span>Services</span>
//               <ChevronIcon open={mobileExpanded === 'services'} />
//             </button>
//             <div className={`bm-accordion-body${mobileExpanded === 'services' ? ' bm-accordion-body--open' : ''}`}>
//               {services.map((s, i) => (
//                 <Link key={i} href={s.href} className="bm-drawer-sub-link">
//                   <span className="bm-drawer-sub-num">0{i + 1}</span>
//                   {s.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Accordion 2: Industries */}
//           <div className="bm-accordion">
//             <button
//               className={`bm-accordion-trigger${mobileExpanded === 'industries' ? ' bm-accordion-trigger--open' : ''}`}
//               onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
//               style={{ animationDelay: '120ms' }}
//             >
//               <span>Industries</span>
//               <ChevronIcon open={mobileExpanded === 'industries'} />
//             </button>
//             <div className={`bm-accordion-body${mobileExpanded === 'industries' ? ' bm-accordion-body--open' : ''}`}>
//               {industries.map((ind, i) => (
//                 <Link key={i} href={ind.href} className="bm-drawer-sub-link">
//                   <span className="bm-drawer-sub-num">{ind.num}</span>
//                   {ind.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <MobileLink href="/resources" label="Resources" delay={5} />
//           <MobileLink href="/blog"      label="Blog"      delay={6} />
//           <MobileLink href="/careers"   label="Careers"   delay={7} />
//           <MobileLink href="/contact"   label="Contact"   delay={8} />
//         </nav>

//         <div className="bm-drawer-footer">
//           <Link href="/request-quote" className="bm-cta bm-cta--full">
//             <span>Establish Security Loop</span>
//             <span className="bm-cta-arrow"><ArrowIcon /></span>
//           </Link>
//         </div>
//       </div>

//       {/* Backdrop Veil */}
//       <div
//         className={`bm-backdrop${mobileOpen ? ' bm-backdrop--open' : ''}`}
//         onClick={() => setMobileOpen(false)}
//       />
//     </>
//   );
// }

// /* ─────────────────────────────────────────
//     REUSABLE CHIPS
// ───────────────────────────────────────── */
// function MobileLink({ href, label, delay }: { href: string; label: string; delay: number }) {
//   return (
//     <Link
//       href={href}
//       className="bm-drawer-link"
//       style={{ animationDelay: `${delay * 40}ms` } as React.CSSProperties}
//     >
//       {label}
//       <ArrowIcon />
//     </Link>
//   );
// }

// /* ─────────────────────────────────────────
//     ICONS VECTOR SUB-COMPONENTS
// ───────────────────────────────────────── */
// function ArrowIcon({ className = '' }: { className?: string }) {
//   return (
//     <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M5 12h14M12 5l7 7-7 7"/>
//     </svg>
//   );
// }

// // ChevronIcon Component fixed spacing rules
// function ChevronIcon({ open, small }: { open: boolean; small?: boolean }) {
//   return (
//     <svg
//       width={small ? "11" : "14"}
//       height={small ? "11" : "14"}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       style={{ transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
//     >
//       <path d="m6 9 6 6 6-6"/>
//     </svg>
//   );
// }

// function CloseIcon() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M18 6 6 18M6 6l12 12"/>
//     </svg>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ─────────────────────────────────────────
    DATA CONFIGURATIONS (UPDATED WITH NEW SERVICES)
───────────────────────────────────────── */
const services = [
  { label: 'CCTV Monitoring',         href: '/services/cctv-monitoring',         desc: 'Real-time proactive surveillance logic' },
  { label: 'Incident Reporting',      href: '/services/incident-reporting',      desc: 'Automated immediate log generation' },
  { label: 'Two-Way Communication',   href: '/services/two-way-communication',   desc: 'Live audio threat voice-down intervention' },
  { label: 'Virtual Doorman',         href: '/services/virtual-doorman',         desc: 'Remote visitor authentication control' },
  { label: 'Monthly Sheets',          href: '/services/monthly-sheets',          desc: 'Comprehensive infrastructure analytics sheets' },
];

const industries = [
  { label: 'Residential Sector',  href: '/industries/residential',  num: '01' },
  { label: 'Commercial Blocks',   href: '/industries/commercial',   num: '02' },
  { label: 'Construction Yards',  href: '/industries/construction', num: '03' },
  { label: 'Healthcare Hubs',     href: '/industries/healthcare',   num: '04' },
  { label: 'Educational Zones',   href: '/industries/education',    num: '05' },
  { label: 'Retail Environments', href: '/industries/retail',       num: '06' },
  { label: 'Hospitality Sites',   href: '/industries/hospitality',  num: '07' },
  { label: 'Industrial Plants',   href: '/industries/industrial',   num: '08' },
];

const navLinks = [
  { label: 'Home',       href: '/'          },
  { label: 'About',      href: '/about'     },
  { label: 'Services',   href: '/services',   dropdown: 'services'   as const },
  { label: 'Industries', href: '/industries', dropdown: 'industries' as const },
  { label: 'Resources',  href: '/resources' },
  { label: 'Blog',       href: '/blog'      },
  { label: 'Careers',    href: '/careers'   },
  { label: 'Contact',    href: '/contact'   },
];

type Dropdown = 'services' | 'industries' | null;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<Dropdown>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Dropdown>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  const openDropdown = (name: 'services' | 'industries') => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const keepDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
  };

  return (
    <>
      <header className={`bm-header${scrolled ? ' bm-header--scrolled' : ''}`}>
        <div className="bm-header-inner">

          {/* Logo */}
          <Link href="/" className="bm-logo" aria-label="BlueMond Solutions home" style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              className="bm-logo-mark" 
              style={{ 
                padding: 0,
                background: 'transparent',
                clipPath: 'none',
                width: '220px',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                overflow: 'visible'
              }}
            >
              <Image 
                src="/logo.png" 
                alt="BlueMond Solutions logo" 
                width={220} 
                height={72} 
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }} 
                priority 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="bm-nav">
            {navLinks.map((link, idx) => {
              const hasDrop = !!link.dropdown;
              return (
                <div
                  key={idx}
                  className="bm-dropdown-trigger"
                  onMouseEnter={() => hasDrop ? openDropdown(link.dropdown!) : undefined}
                  onMouseLeave={hasDrop ? closeDropdown : undefined}
                >
                  <Link href={link.href} className={`bm-navlink${isActive(link.href) ? ' bm-navlink--active' : ''}`}>
                    <span>{link.label}</span>
                    {hasDrop && <ChevronIcon open={activeDropdown === link.dropdown} small />}
                    <span className="bm-navlink-bar" />
                  </Link>

                  {/* Mega Dropdowns */}
                  {link.dropdown === 'services' && (
                    <div
                      className={`bm-mega-panel${activeDropdown === 'services' ? ' bm-mega-panel--open' : ''}`}
                      onMouseEnter={keepDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="bm-mega-header">
                        <span className="bm-mega-title">Security Services</span>
                        <span className="bm-mega-badge">{services.length} Solutions</span>
                      </div>
                      <div className="bm-mega-grid bm-mega-grid--3">
                        {services.map((s, i) => (
                          <Link
                            key={i}
                            href={s.href}
                            className="bm-service-card"
                            style={{ animationDelay: `${i * 35}ms` } as React.CSSProperties}
                          >
                            <div className="bm-service-num">0{i + 1}</div>
                            <div className="bm-service-info">
                              <div className="bm-service-label">{s.label}</div>
                              <div className="bm-service-desc">{s.desc}</div>
                            </div>
                            <ArrowIcon className="bm-service-arrow" />
                          </Link>
                        ))}
                      </div>
                      <div className="bm-mega-footer">
                        <Link href="/services" className="bm-mega-footer-link">
                          View all services <ArrowIcon />
                        </Link>
                      </div>
                    </div>
                  )}

                  {link.dropdown === 'industries' && (
                    <div
                      className={`bm-mega-panel bm-mega-panel--sm${activeDropdown === 'industries' ? ' bm-mega-panel--open' : ''}`}
                      onMouseEnter={keepDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="bm-mega-header">
                        <span className="bm-mega-title">Sectors We Protect</span>
                      </div>
                      <div className="bm-mega-grid bm-mega-grid--2">
                        {industries.map((ind, i) => (
                          <Link
                            key={i}
                            href={ind.href}
                            className="bm-industry-row"
                            style={{ animationDelay: `${i * 40}ms` } as React.CSSProperties}
                          >
                            <span className="bm-industry-num">{ind.num}</span>
                            <span className="bm-industry-label">{ind.label}</span>
                            <ArrowIcon className="bm-industry-arrow" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Trigger Elements */}
          <div className="bm-header-actions">
            <Link href="/request-quote" className="bm-cta">
              <span>Establish Security Loop</span>
              <span className="bm-cta-arrow"><ArrowIcon /></span>
            </Link>

            <button
              className={`bm-hamburger${mobileOpen ? ' bm-hamburger--open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </header>

      {/* ─── MOBILE DRAWER ─── */}
      <div className={`bm-drawer${mobileOpen ? ' bm-drawer--open' : ''}`}>
        <div className="bm-drawer-head">
          <Link href="/" className="bm-logo" aria-label="BlueMond Solutions home" style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              className="bm-logo-mark bm-logo-mark--sm" 
              style={{ 
                padding: 0, 
                background: 'transparent',
                clipPath: 'none',
                width: '160px', 
                height: 'auto', 
                display: 'flex', 
                alignItems: 'center',
                overflow: 'visible'
              }}
            >
              <Image 
                src="/logo.png" 
                alt="BlueMond Solutions logo" 
                width={160} 
                height={56} 
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }} 
              />
            </div>
          </Link>
          <button className="bm-drawer-close" onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <nav className="bm-drawer-nav">
          <MobileLink href="/" label="Home" delay={0} />
          <MobileLink href="/about" label="About" delay={1} />

          {/* Accordion 1: Services */}
          <div className="bm-accordion">
            <button
              className={`bm-accordion-trigger${mobileExpanded === 'services' ? ' bm-accordion-trigger--open' : ''}`}
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
              style={{ animationDelay: '80ms' }}
            >
              <span>Services</span>
              <ChevronIcon open={mobileExpanded === 'services'} />
            </button>
            <div className={`bm-accordion-body${mobileExpanded === 'services' ? ' bm-accordion-body--open' : ''}`}>
              {services.map((s, i) => (
                <Link key={i} href={s.href} className="bm-drawer-sub-link">
                  <span className="bm-drawer-sub-num">0{i + 1}</span>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Accordion 2: Industries */}
          <div className="bm-accordion">
            <button
              className={`bm-accordion-trigger${mobileExpanded === 'industries' ? ' bm-accordion-trigger--open' : ''}`}
              onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
              style={{ animationDelay: '120ms' }}
            >
              <span>Industries</span>
              <ChevronIcon open={mobileExpanded === 'industries'} />
            </button>
            <div className={`bm-accordion-body${mobileExpanded === 'industries' ? ' bm-accordion-body--open' : ''}`}>
              {industries.map((ind, i) => (
                <Link key={i} href={ind.href} className="bm-drawer-sub-link">
                  <span className="bm-drawer-sub-num">{ind.num}</span>
                  {ind.label}
                </Link>
              ))}
            </div>
          </div>

          <MobileLink href="/resources" label="Resources" delay={5} />
          <MobileLink href="/blog"      label="Blog"      delay={6} />
          <MobileLink href="/careers"   label="Careers"   delay={7} />
          <MobileLink href="/contact"   label="Contact"   delay={8} />
        </nav>

        <div className="bm-drawer-footer">
          <Link href="/request-quote" className="bm-cta bm-cta--full">
            <span>Establish Security Loop</span>
            <span className="bm-cta-arrow"><ArrowIcon /></span>
          </Link>
        </div>
      </div>

      {/* Backdrop Veil */}
      <div
        className={`bm-backdrop${mobileOpen ? ' bm-backdrop--open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}

/* ─────────────────────────────────────────
    REUSABLE CHIPS
───────────────────────────────────────── */
function MobileLink({ href, label, delay }: { href: string; label: string; delay: number }) {
  return (
    <Link
      href={href}
      className="bm-drawer-link"
      style={{ animationDelay: `${delay * 40}ms` } as React.CSSProperties}
    >
      {label}
      <ArrowIcon />
    </Link>
  );
}

/* ─────────────────────────────────────────
    ICONS VECTOR SUB-COMPONENTS
───────────────────────────────────────── */
function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function ChevronIcon({ open, small }: { open: boolean; small?: boolean }) {
  return (
    <svg
      width={small ? "11" : "14"}
      height={small ? "11" : "14"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      style={{ transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  );
}