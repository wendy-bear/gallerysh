//import React from 'react';
import './App.css';
//import './components/Сard.css';
import Hero from './components/Сard';
import characters from './components/gallery';

function App() {
  return (
    <div className="App">
      <h1>Superhero gallery</h1>
      {
        characters.map((character) =>
        <Hero name={character.name}
         universe={character.universe} 
         alterEgo={character.alterEgo} 
         occupation={character.occupation} 
         friends={character.friends} 
         superPowers={character.superPowers} 
         src={character.src}/>)
      } 
      
    </div>
  );
}

export default App;
