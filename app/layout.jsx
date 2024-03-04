import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '../components/NavBar'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const fetchCategories = async () => {
  try {
    return (await axios.get('http://localhost:3001/categories')).data;
  } catch (error) {
    console.error('Error en fetchCategories:', error);
    throw new Error(error.message);
  }
};


export default async function RootLayout({ children }) {
  const categories = await fetchCategories()
  return (
    <html lang="en">
      <body className={`${inter.className}  mx-auto`}>
        <NavBar categories={categories} />
        {children}
      </body>
    </html>
  )
}
