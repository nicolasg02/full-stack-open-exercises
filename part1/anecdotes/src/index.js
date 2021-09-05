import React, { useState } from "react";
import ReactDOM from "react-dom";

const MostVotedAnecdote = ({ points }) => {
  let maxValue = Math.max(...points);
  let index = points.indexOf(maxValue);

  return <p>{anecdotes[index]}</p>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(() => Array(anecdotes.length).fill(0));

  console.log(points[0], "points selected");

  const handleVoteAnecdote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const handleNextAnecdote = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVoteAnecdote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <MostVotedAnecdote points={points} />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
