export const metadata = {
  title: 'Coffee Menu - เมนูเครื่องดื่มอร่อย',
  description: 'เว็บไซต์เมนูเครื่องดื่มกาแฟ สดใหม่ หอมกรุ่น',
  openGraph: {
    title: 'Coffee Menu - เมนูเครื่องดื่มอร่อย',
    description: 'เว็บไซต์เมนูเครื่องดื่มกาแฟ สดใหม่ หอมกรุ่น',
    url: 'https://coffee-menu-eosin.vercel.app/',
    siteName: 'Coffee Menu',
    images: [
      {
        url: 'https://coffee-menu-eosin.vercel.app/images/pic5.jpg',  // <-- ตรงนี้เอา /public ออก
        width: 1200,
        height: 630,
        alt: 'Coffee Menu Preview Image',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coffee Menu - เมนูเครื่องดื่มอร่อย',
    description: 'เว็บไซต์เมนูเครื่องดื่มกาแฟ สดใหม่ หอมกรุ่น',
    images: ['https://coffee-menu-eosin.vercel.app/images/pic5.jpg'],  // <-- เอา /public ออก
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
