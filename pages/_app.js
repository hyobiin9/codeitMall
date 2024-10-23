import { ThemeProvider } from "@/lib/ThemeContext";
import Header from "@/components/Header";
import Container from "@/components/Container";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
