import Footer from '../components/Footer';
import './globals.css';


export const metadata = {
  title: "First Fullstack apps",
  description: "First Fullstack apps - Built in React, Nextjs, Nodejs, Express.js",
  icon: "/favicon.ico",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='min-h-screen py-16 '>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
