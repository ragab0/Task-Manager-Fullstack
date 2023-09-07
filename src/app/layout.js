import './globals.css';


export const metadata = {
  title: "TODO List",
  description: "Built in React, Nextjs, and tailwindcss",
  icon: "/favicon.ico",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {
          children
        }
      </body>
    </html>
  )
}
