import UserContextProvider from "@/context/UserContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
