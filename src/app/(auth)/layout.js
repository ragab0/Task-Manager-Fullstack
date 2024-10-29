export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>auth header</header>
        {children}
        <footer>auth footer</footer>
      </body>
    </html>
  );
}
