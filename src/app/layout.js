import "./globals.css";

export const metadata = {
  title: "Tod",
  description:
    "A task managment app, Save and manage your tasks with AI - with Tod",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
