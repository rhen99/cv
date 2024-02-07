import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Container from "./components/Caontainer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  if (location.pathname === "/") {
    return <Navigate to="/about" />;
  } else {
    return (
      <Container>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        <Main setIsOpen={setIsOpen} isOpen={isOpen} />
      </Container>
    );
  }
}
