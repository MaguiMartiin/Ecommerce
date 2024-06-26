import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '../components/NavBar'
import { fetchCategories } from './axios'
import { StoreProvider } from '../components/Store'
import { SideCart } from '@/components/SideCart'
import { ModalSearch } from '@/components/ModalSearch'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const categories = await fetchCategories()
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className}  mx-auto bg-white`}>
          <NavBar categories={categories} />
          <SideCart />
          <ModalSearch categories={categories}/>
          {children}
          <Footer/>
        </body>
      </html>
    </StoreProvider>
  )
}
