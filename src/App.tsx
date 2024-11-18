import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
// import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST} from './consts.js';

import Character from './Components/Character'
import Attributes from './Components/Attributes';
import { CHARACTER_LIST_API_URL } from './consts';

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    if (characterList.length === 0) {
        fetch(CHARACTER_LIST_API_URL)
          .then((response) => response.json())
          .then((response) => {setCharacterList(response.body)})
          .catch(() => {alert("Failed to get character list!");});
    }
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
        {characterList.map((character, index) => (
                    <Character
                      key={index}
                      characterIndex={index}
                      attributes={character.attributes}
                    />
                ))}
        </div>
      </section>
    </div>
  );
}

export default App;
