import ConceptData from "./components/Concept/ConceptData";
import Header from "./components/Header";
import Concept from "./components/Concept/Concept";

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        <Concept
          image={ConceptData[0].image}
          alt={ConceptData[0].title}
          title={ConceptData[0].title}
          description={ConceptData[0].description}
        />
        <Concept
          image={ConceptData[1].image}
          alt={ConceptData[1].title}
          title={ConceptData[1].title}
          description={ConceptData[1].description}
        />
        <Concept
          image={ConceptData[2].image}
          alt={ConceptData[2].title}
          title={ConceptData[2].title}
          description={ConceptData[2].description}
        />
      </ul>
    </div>
  );
}

export default App;
