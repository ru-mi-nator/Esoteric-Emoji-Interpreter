import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🛐": "Place of Worship",
  "⚛️": "Atom Symbol",
  "🕉️": "Om",
  "✡️": "Star of David",
  "☸️": "Wheel of Dharma",
  "☯️": "Yin Yang",
  "☮️": "Peace Symbol",
  "🕎": "Menorah",
  "🔯": "Dotted Six-Pointed Star",
  "✝️": "Latin Cross",
  "☦️": "Orthodox Cross",
  "☪️": "Star and Crescent"
};

var emojisKnown = Object.keys(emojiDictionary)

export default function App() {
  var [meaning, setMeaning] = useState();
  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! This emoji is not in our Database yet.";
    }

    setMeaning(meaning);
  }
  var [userInput, setUserInput] = useState();

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Esoteric Emojis Interpreter</h1>
      <input onChange={inputEmojiHandler}></input>
      <div> {userInput} </div>
      <div className="meaning"> Meaning 👇 </div>
      <div className="mean"> {meaning} </div>

      <p> Emojis We Know 🧐</p>
      {
        emojisKnown.map(function(emoji){
          return <span key={emoji} className="emoji" onClick={()=> emojiClickHandler(emoji)} > {emoji} </span>
        })
      }
      
    </div>
  );
}
