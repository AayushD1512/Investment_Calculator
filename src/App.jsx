import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInput = (inputName, newValue) => {
    setUserInput((prevValue) => ({
      ...prevValue,
      [inputName]: +newValue,
    }));
  };

  const validDuration = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput}/>
      {!validDuration && <p className="center">Please enter duration greater than 0</p>}
      {validDuration && <Results input={userInput}/>}
    </>
  );
}

export default App;
