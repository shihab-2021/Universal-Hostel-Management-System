import AuthProvider from "../Components/contexts/AuthProvider";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/nav";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
