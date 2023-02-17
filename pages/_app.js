import Footer from "../Components/Home/Footer";
import Navbar from "../Components/nav";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
