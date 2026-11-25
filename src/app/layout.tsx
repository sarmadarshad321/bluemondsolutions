
// import type { Metadata } from 'next';
// import { Plus_Jakarta_Sans, Barlow_Condensed } from 'next/font/google';
// import Header from '@/components/global/Header';
// import Footer from '@/components/global/Footer';
// import '@/styles/globals.css';

// // Premium Fonts Configuration
// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   variable: '--font-jakarta',
//   weight: ['400', '500', '600', '700', '800'],
//   display: 'swap',
// });

// const barlowCondensed = Barlow_Condensed({
//   subsets: ['latin'],
//   variable: '--font-barlow-condensed',
//   weight: ['700', '800', '900'],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: {
//     default: 'BlueMond Solutions | Professional Remote CCTV Monitoring',
//     template: '%s | BlueMond Solutions',
//   },
//   description:
//     'BlueMond Solutions provides professional 24/7 remote CCTV monitoring, incident reporting, and customized security solutions for businesses and residences.',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${plusJakartaSans.variable} ${barlowCondensed.variable}`}>
//       <body>
//         <Header />
//         <main style={{ minHeight: '100vh' }}>
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Barlow_Condensed } from 'next/font/google';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import '@/styles/globals.css';

// Premium Fonts Configuration
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BlueMond Solutions | Professional Remote CCTV Monitoring',
    template: '%s | BlueMond Solutions',
  },
  description:
    'BlueMond Solutions provides professional 24/7 remote CCTV monitoring, incident reporting, and customized security solutions for businesses and residences.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${plusJakartaSans.variable} ${barlowCondensed.variable}`}
      // suppressHydrationWarning yahan browser layers ko handle karega
      suppressHydrationWarning
    >
      <body 
        // Dynamic dynamic font nodes safety back support
        suppressHydrationWarning
      >
        <Header />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}