import React from "react";

import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="www.google.com"><img alt="alt image" width="40px" src="./Lambda-Logo-Red.png"/> Lambda Integration Testing Challenge</a>
      </nav>
      <div className="App">
        <ContactForm />
      </div>
    </div>
  );
}
