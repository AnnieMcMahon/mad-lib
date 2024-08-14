import Header from "./components/Header";
import Sentence from "./components/Sentence"
import Paragraph from "./components/Paragraph";
import { useState } from "react";

const App: React.FC = () => {

  const [story, setStory] = useState("Sentence");

  const handleSentence = () => {
    setStory("Sentence")
  };

  const handleParagraph = () => {
    setStory("Paragraph")
  };

  return (
      <div id="content">
        <Header /> 
        <div className="button-section">
        <button className="story-button" onClick={handleSentence}>Sentence</button>
        <button className="story-button" onClick={handleParagraph}>Paragraph</button>
      </div>  
      {story == "Paragraph" ? <Paragraph /> : <Sentence />}
      </div>
  );
};
export default App;
