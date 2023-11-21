import { Container } from "react-bootstrap";
import "./styles.css";
import QuoteComponent from "./QuoteComponent";

export default function App() {
  return (
    <div className="App">
      <Container id="quote-box">
        <QuoteComponent />
        <a
          id="tweet-quote"
          target="_top"
          href="https://twitter.com/intent/tweet?text=happy"
        >
          Tweet Quote
        </a>
      </Container>
    </div>
  );
}
