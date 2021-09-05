import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </>
  );
};

const Button = ({ text, value }) => {
  return <button onClick={value}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, score }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={good + neutral + bad} />
          <Statistic text="average" value={score / (good + neutral + bad)} />
          <Statistic
            text="positive"
            value={(good * 100) / (good + neutral + bad)}
          />
        </table>
      </div>
    );
  }

  return (
    <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setScore(score + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setScore(score + 0);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setScore(score - 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button text="good" value={handleGood} />
        <Button text="neutral" value={handleNeutral} />
        <Button text="bad" value={handleBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} score={score} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
