import "./Hangman.css";
import { useState } from "react";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

const Hangman = () => {
  /** by default, allow 6 guesses and use provided gallows images. */
  // static defaultProps = {
  //   maxWrong: 6,
  //   images: [img0, img1, img2, img3, img4, img5, img6]
  // };
  const images = [img0, img1, img2, img3, img4, img5, img6];
  const [wrong, setWrong] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [answer, setAnswer] = useState("apple");

  // constructor(props) {
  //   super(props);
  //   this.state = { nWrong: 0, guessed: new Set(), answer: "apple" };
  //   this.handleGuess = this.handleGuess.bind(this);
  // }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  const guessedWord = () => {
    return answer.split("").map((ltr) => (guessed.has(ltr) ? ltr : "_"));
  };

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  const handleGuess = (e) => {
    let ltr = e.target.value;
    setGuessed(guessed.add(ltr));
    setWrong(wrong + (answer.includes(ltr) ? 0 : 1));
    // this.setState(st => ({
    //   guessed: st.guessed.add(ltr),
    //   nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    // }));
  };

  /** generateButtons: return array of letter buttons to render */
  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button value={ltr} onClick={handleGuess} disabled={guessed.has(ltr)}>
        {ltr}
      </button>
    ));
  };

  /** render: render game */
  return (
    <div className="Hangman">
      <h1>Hangman</h1>
      <img src={images[wrong]} />
      <p className="Hangman-word">{guessedWord}</p>
      <p className="Hangman-btns">{generateButtons}</p>
    </div>
  );
};

export default Hangman;
