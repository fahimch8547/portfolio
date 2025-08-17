import "./globals.css";

export const metadata = {
  title: "Fahim Portfolio",
  description: "Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
