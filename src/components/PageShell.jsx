import Navbar from "./Navbar";
import Footer from "./Footer";

function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default PageShell;
