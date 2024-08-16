import Header from "./components/Header";
import Witch from "./components/Witch";
import Zoo from "./components/Zoo";
import { useState } from "react";

const App: React.FC = () => {

  const [story, setStory] = useState("Sentence");

  const handleWitch = () => {
    setStory("Witch")
  };

  const handleZoo = () => {
    setStory("Zoo")
  };

  return (
      <div id="content">
        <Header /> 
        <div className="button-section">
        <button className="story-button" onClick={handleWitch}>Witch</button>
        <button className="story-button" onClick={handleZoo}>Zoo</button>
      </div>  
      {story == "Zoo" ? <Zoo /> : <Witch />}
      </div>
  );
};
export default App;
