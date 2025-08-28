import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import './globals.css'; // ✅ Import global styles once here


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
