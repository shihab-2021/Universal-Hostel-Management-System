import AuthProvider from "../Components/contexts/AuthProvider";
import { RoomProvider } from "../Components/contexts/RoomContext";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/nav";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <RoomProvider>
          <Component {...pageProps} />
        </RoomProvider>
      </AuthProvider>
    </>
  );
}
