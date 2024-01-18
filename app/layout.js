export const metadata = {
  title: 'Kofy',
  description: 'An app by Kofy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
