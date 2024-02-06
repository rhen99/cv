import { useState } from "react";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Container from "./components/Caontainer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Navigation isOpen={isOpen} />
      <Main setIsOpen={setIsOpen} isOpen={isOpen} />
    </Container>
  );
}
