import { useState, ChangeEvent } from "react";

interface FormData {
  actionChoice: string;
  landFormChoice: string;
  adjectiveChoice: string;
  colorChoice: string;
  verbChoice: string;
  liquidChoice: string;
  adjective2Choice: string;
  color2Choice: string;
  animalChoice: string;
}
const actions = [
  "running",
  "playing",
  "spinning around",
  "sobbing",
  "giggling",
];
const landForms = ["mountain", "valley", "desert", "hill", "rain forest", "gutters"];
const adjectives = ["gross", "awesome", "joyful", "sympathetic", "arrogant", "beautiful", "chubby"];
const colors = ["pink", "orange", "purple", "white", "green", "maroon"];
const verbs = ["giggle", "shiver", "hiccup", "yawn", "dash", "spin around"];
const liquids = ["lime juice", "coolant", "oil", "blood", "milk", "beer"];
const animals = ["ant", "tiger", "koala bear", "salamander", "shark", "baby dinosaur"];

const instructions =
  "Choose words from the list or type your own, then click on Generate MadLib";

const Paragraph: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    actionChoice: "",
    landFormChoice: "",
    adjectiveChoice: "",
    colorChoice: "",
    verbChoice: "",
    liquidChoice: "",
    adjective2Choice: "",
    color2Choice: "",
    animalChoice: "",
  });

  const [paragraph, setParagraph] = useState(instructions);

  const madLibGenerator = (
    action: string,
    landForm: string,
    adjective: string,
    color: string,
    verb: string,
    liquid: string,
    adjective2: string,
    color2: string,
    animal: string
  ) => {
    return action &&
      landForm &&
      adjective &&
      color &&
      verb &&
      liquid &&
      adjective2 &&
      color2 &&
      animal
      ? "I met a witch when I was " +
          action +
          " in the " +
          landForm +
          ". She was extremely " +
          adjective +
          " and her eyes were so " +
          color +
          " it made me " +
          verb +
          ". She gave me " +
          liquid +
          " to drink and I immediately turned into a " +
          adjective2 +
          " " +
          color2 +
          " " +
          animal +
          "!"
      : "Please choose a word in each category before submitting.";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setParagraph(
      madLibGenerator(
        formData.actionChoice,
        formData.landFormChoice,
        formData.adjectiveChoice,
        formData.colorChoice,
        formData.verbChoice,
        formData.liquidChoice,
        formData.adjective2Choice,
        formData.color2Choice,
        formData.animalChoice
      )
    );
  };

  const handleReset = () => {
    setFormData({
      actionChoice: "",
      landFormChoice: "",
      adjectiveChoice: "",
      colorChoice: "",
      verbChoice: "",
      liquidChoice: "",
      adjective2Choice: "",
      color2Choice: "",
      animalChoice: "",
    });
    setParagraph(instructions);
  };

  const handleRandom = () => {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomLandForm =
      landForms[Math.floor(Math.random() * landForms.length)];
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomLiquid = liquids[Math.floor(Math.random() * liquids.length)];
    const randomAdjective2 =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    setFormData({
      actionChoice: randomAction,
      landFormChoice: randomLandForm,
      adjectiveChoice: randomAdjective,
      colorChoice: randomColor,
      verbChoice: randomVerb,
      liquidChoice: randomLiquid,
      adjective2Choice: randomAdjective2,
      color2Choice: randomColor2,
      animalChoice: randomAnimal,
    });

    setParagraph(
      madLibGenerator(
        randomAction,
        randomLandForm,
        randomAdjective,
        randomColor,
        randomVerb,
        randomLiquid,
        randomAdjective2,
        randomColor2,
        randomAnimal
      )
    );
  };

  return (
    <>
      <form>
        <h2>One-Paragraph Story</h2>
        <div>
          <label htmlFor="action-choice">Action (example: dancing):</label>
          <input
            list="actions"
            id="action-choice"
            name="actionChoice"
            value={formData.actionChoice}
            onChange={handleChange}
          />
          <datalist id="actions">
            {actions.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="landForm-choice">Land Form (example: hill):</label>
          <input
            list="landForms"
            id="landForm-choice"
            name="landFormChoice"
            value={formData.landFormChoice}
            onChange={handleChange}
          />
          <datalist id="landForms">
            {landForms.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="adjective-choice">Adjective (example: ugly):</label>
          <input
            list="adjectives"
            id="adjective-choice"
            name="adjectiveChoice"
            value={formData.adjectiveChoice}
            onChange={handleChange}
          />
          <datalist id="adjectives">
            {adjectives.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="color-choice">Color (example: red):</label>
          <input
            list="colors"
            id="color-choice"
            name="colorChoice"
            value={formData.colorChoice}
            onChange={handleChange}
          />
          <datalist id="colors">
            {colors.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="verb-choice">Verb (example: run):</label>
          <input
            list="verbs"
            id="verb-choice"
            name="verbChoice"
            value={formData.verbChoice}
            onChange={handleChange}
          />
          <datalist id="verbs">
            {verbs.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="liquid-choice">Liquid (example: milk):</label>
          <input
            list="liquids"
            id="liquid-choice"
            name="liquidChoice"
            value={formData.liquidChoice}
            onChange={handleChange}
          />
          <datalist id="liquids">
            {liquids.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="adjective2-choice">Adjective (example: small):</label>
          <input
            list="adjectives2"
            id="adjective2-choice"
            name="adjective2Choice"
            value={formData.adjective2Choice}
            onChange={handleChange}
          />
          <datalist id="adjectives2">
            {adjectives.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="color2-choice">Color (example: blue):</label>
          <input
            list="colors2"
            id="color2-choice"
            name="color2Choice"
            value={formData.color2Choice}
            onChange={handleChange}
          />
          <datalist id="colors2">
            {colors.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="animal-choice">Animal (example: kangaroo):</label>
          <input
            list="animals"
            id="animal-choice"
            name="animalChoice"
            value={formData.animalChoice}
            onChange={handleChange}
          />
          <datalist id="animals">
            {animals.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
      </form>
      <p id="paragraph">{paragraph}</p>
      <div className="button-section">
        <button className="generate" onClick={handleSubmit}>Generate MadLib</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRandom}>Surprise me!</button>
      </div>
    </>
  );
};

export default Paragraph;
