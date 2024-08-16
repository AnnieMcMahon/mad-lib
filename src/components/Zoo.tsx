import { useState, ChangeEvent } from "react";

interface FormData {
  animalChoice: string;
  numberChoice: string;
  colorChoice: string;
  animal2Choice: string;
  bodyPartChoice: string;
  actionChoice: string;
  adjectiveChoice: string;
  animal3Choice: string;
}

const animals = [
  "ant",
  "tiger",
  "koala bear",
  "salamander",
  "shark",
  "baby dinosaur",
];

const numbers = ["two", "four", "three", "ten", "six"];

const colors = ["pink", "orange", "purple", "white", "green", "maroon"];

const bodyParts = ["nose", "mouth", "leg", "paw", "tail", "neck"]

const adjectives = [
  "gross",
  "awesome",
  "joyful",
  "sympathetic",
  "arrogant",
  "beautiful",
  "chubby",
];

const actions = [
  "running",
  "playing",
  "spinning around",
  "sobbing",
  "giggling",
  "laughing"
];

const instructions =
  "Choose words from the list or type your own, then click on Generate MadLib";

const Zoo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    animalChoice: "",
    numberChoice: "",
    colorChoice: "",
    animal2Choice: "",
    bodyPartChoice: "",
    actionChoice: "",
    adjectiveChoice: "",
    animal3Choice: ""
  });

  const [sentence, setSentence] = useState("");

  const madLibGenerator = (
    animal: string,
    number: string,
    color: string,
    animal2: string,
    bodyPart: string,
    action: string,
    adjective: string,
    animal3: string
  ) => {
    return animal && number && color && animal2 && bodyPart && action && adjective && animal3
      ? "At the zoo yesterday, I was surprised to see an amazing " +
         animal.toLowerCase() +
          " that had " +
          number.toLowerCase() +
          " " +
          color.toLowerCase() + 
          " " +
          animal2.toLowerCase() +
          " " +
          bodyPart.toLowerCase() +
          "s and was " +
          action.toLowerCase() +
          " like a mad " +
          adjective.toLowerCase() +
          " " +
          animal3.toLowerCase() +
          "."
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
    setSentence(
      madLibGenerator(
        formData.animalChoice,
        formData.numberChoice,
        formData.colorChoice,
        formData.animal2Choice,
        formData.bodyPartChoice,
        formData.actionChoice,
        formData.adjectiveChoice,
        formData.animal3Choice
      )
    );
  };

  const handleReset = () => {
    setFormData({
      animalChoice: "",
      numberChoice: "",
      colorChoice: "",
      animal2Choice: "",
      bodyPartChoice: "",
      actionChoice: "",
      adjectiveChoice: "",
      animal3Choice: ""
    });
    setSentence("");
  };
  
  const handleRandom = () => {
    const randomAnimal =
      animals[Math.floor(Math.random() * animals.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomAnimal2 =
      animals[Math.floor(Math.random() * animals.length)];  
    const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];      
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];    
    const randomAnimal3 =
      animals[Math.floor(Math.random() * animals.length)];  

    setFormData({
      animalChoice: randomAnimal,
      numberChoice: randomNumber,
      colorChoice: randomColor,
      animal2Choice: randomAnimal2,
      bodyPartChoice: randomBodyPart,
      actionChoice: randomAction,
      adjectiveChoice: randomAdjective,
      animal3Choice: randomAnimal3
    });

    setSentence(
      madLibGenerator(randomAnimal, randomNumber, randomColor, randomAnimal2, randomBodyPart, randomAction, randomAdjective, randomAnimal3)
    );
  };

  return (
    <>
      <h2>Zoo Story</h2>
      <p>{instructions}</p>
      <form>
        <div>
          <label htmlFor="animal-choice">Animal:</label>
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
        <div>
          <label htmlFor="number-choice">Number:</label>
          <input
            list="numbers"
            id="number-choice"
            name="numberChoice"
            value={formData.numberChoice}
            onChange={handleChange}
          />
          <datalist id="numbers">
            {numbers.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="color-choice">Color:</label>
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
          <label htmlFor="animal2-choice">Animal:</label>
          <input
            list="animals2"
            id="animal2-choice"
            name="animal2Choice"
            value={formData.animal2Choice}
            onChange={handleChange}
          />
          <datalist id="animals2">
            {animals.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="bodyPart-choice">Body Part:</label>
          <input
            list="bodyParts"
            id="bodyPart-choice"
            name="bodyPartChoice"
            value={formData.bodyPartChoice}
            onChange={handleChange}
          />
          <datalist id="bodyParts">
            {bodyParts.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="action-choice">Action (-ing):</label>
          <input
            list="actions"
            id="action-choice"
            name="actionChoice"
            value={formData.actionChoice}
            onChange={handleChange}
          />
          <datalist id="actions">
            {actions.map((action) => (
              <option value={action} key={action} />
            ))}
          </datalist>
        </div>
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
          <label htmlFor="animal3-choice">Animal:</label>
          <input
            list="animals3"
            id="animal3-choice"
            name="animal3Choice"
            value={formData.animal3Choice}
            onChange={handleChange}
          />
          <datalist id="animals3">
            {animals.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        </div>
      </form>
      <p>{sentence}</p>
      <div className="button-section">
        <button className="generate" onClick={handleSubmit}>
          Generate MadLib
        </button>
        <button onClick={handleRandom}>Surprise me!</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Zoo;
