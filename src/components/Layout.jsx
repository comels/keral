import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Nav />

      {/* Contenu principal */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
