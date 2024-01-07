import "./App.css";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept
                key={item.title}
                title={item.title}
                description={item.description}
                img={item.image}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
