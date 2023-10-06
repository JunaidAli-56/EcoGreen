import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/sass/main.scss'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Eco Green',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {/* <Navbar /> */}
          {children}
      </body>
    </html>
  )
}
