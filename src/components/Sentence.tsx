import { useState, ChangeEvent } from "react";

interface FormData {
  adjectiveChoice: string;
  nounChoice: string;
  verbChoice: string;
  adverbChoice: string;
}

const adjectives = ["gross", "awesome", "joyful", "sympathetic", "arrogant"];
const nouns = ["boyfriend", "baby", "chameleon", "turtle", "grandmother"];
const verbs = ["running", "playing", "spinning around", "sobbing", "giggling"];
const adverbs = ["willingly", "wildly", "constantly", "stupidly", "lazily"];
const instructions = "Choose words from the list or type your own, then click on Generate MadLib";

const Sentence: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    adjectiveChoice: "",
    nounChoice: "",
    verbChoice: "",
    adverbChoice: "",
  });

  const [sentence, setSentence] = useState(instructions);

  const madLibGenerator = (
    adjective: string,
    noun: string,
    verb: string,
    adverb: string
  ) => {
    return adjective && noun && verb && adverb ? "My " + adjective + " " + noun + " is " + verb + " " + adverb + "." : "Please choose a word in each category before submitting.";
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setSentence(
      madLibGenerator(
        formData.adjectiveChoice,
        formData.nounChoice,
        formData.verbChoice,
        formData.adverbChoice
      )
    );
  };

  const handleReset = () => {
    setFormData({
      adjectiveChoice: "",
      nounChoice: "",
      verbChoice: "",
      adverbChoice: "",
    });
    setSentence(instructions);
  };

  const handleRandom = () => {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];

    setFormData({
      adjectiveChoice: randomAdjective,
      nounChoice: randomNoun,
      verbChoice: randomVerb,
      adverbChoice: randomAdverb,
    });

    setSentence(
      madLibGenerator(randomAdjective, randomNoun, randomVerb, randomAdverb)
    );
  };

  return (
    <>
      <form>
      <h2>One-Sentence Story</h2>
        <div>
          <label htmlFor="adjective-choice">Adjective:</label>
          <input
            list="adjectives"
            id="adjective-choice"
            name="adjectiveChoice"
            value={formData.adjectiveChoice}
            onChange={handleChange}
          />
          <datalist id="adjectives">
            {adjectives.map((adj) => (
              <option value={adj} key={adj} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="noun-choice">Noun:</label>
          <input
            list="nouns"
            id="noun-choice"
            name="nounChoice"
            value={formData.nounChoice}
            onChange={handleChange}
          />
          <datalist id="nouns">
            {nouns.map((noun) => (
              <option value={noun} key={noun} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="verb-choice">Verb:</label>
          <input
            list="verbs"
            id="verb-choice"
            name="verbChoice"
            value={formData.verbChoice}
            onChange={handleChange}
          />
          <datalist id="verbs">
            {verbs.map((verb) => (
              <option value={verb} key={verb} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="adverb-choice">Adverb:</label>
          <input
            list="adverbs"
            id="adverb-choice"
            name="adverbChoice"
            value={formData.adverbChoice}
            onChange={handleChange}
          />
          <datalist id="adverbs">
            {adverbs.map((adv) => (
              <option value={adv} key={adv} />
            ))}
          </datalist>
        </div>
      </form>
      <p id="sentence">{sentence}</p>
      <div className="button-section">
        <button className="generate" onClick={handleSubmit}>Generate MadLib</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRandom}>Surprise me!</button>
      </div>
    </>
  );
};

export default Sentence;
