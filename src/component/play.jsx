//  import React, { useEffect, useState } from "react";
// // import "./App.css";
// import {Box, Typography} from "@mui/material"

// function App() {
//   // Properties
//   const [showResults, setShowResults] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown, true);
//   }, []);

//   const handleKeyDown = (e) => {

//     console.log("clicked key", e.key);

//     if (e.key === " ") {
//       console.log("key clicked: Spacebar");
//     }
//   };

//   const questions = [
//     {
//       text: "What is the capital of America?",
//       options: [
//         { id: 0, text: "New York City", isCorrect: false },
//         { id: 1, text: "Boston", isCorrect: false },
//         { id: 2, text: "Santa Fe", isCorrect: false },
//         { id: 3, text: "Washington DC", isCorrect: true },
//       ],
//     },
//     {
//       text: "What year was the Constitution of America written?",
//       options: [
//         { id: 0, text: "1787", isCorrect: true },
//         { id: 1, text: "1776", isCorrect: false },
//         { id: 2, text: "1774", isCorrect: false },
//         { id: 3, text: "1826", isCorrect: false },
//       ],
//     },
//     {
//       text: "Who was the second president of the US?",
//       options: [
//         { id: 0, text: "John Adams", isCorrect: true },
//         { id: 1, text: "Paul Revere", isCorrect: false },
//         { id: 2, text: "Thomas Jefferson", isCorrect: false },
//         { id: 3, text: "Benjamin Franklin", isCorrect: false },
//       ],
//     },
//     {
//       text: "What is the largest state in the US?",
//       options: [
//         { id: 0, text: "California", isCorrect: false },
//         { id: 1, text: "Alaska", isCorrect: true },
//         { id: 2, text: "Texas", isCorrect: false },
//         { id: 3, text: "Montana", isCorrect: false },
//       ],
//     },
//     {
//       text: "Which of the following countries DO NOT border the US?",
//       options: [
//         { id: 0, text: "Canada", isCorrect: false },
//         { id: 1, text: "Russia", isCorrect: true },
//         { id: 2, text: "Cuba", isCorrect: true },
//         { id: 3, text: "Mexico", isCorrect: false },
//       ],
//     },
//   ];

//   // Helper Functions

//   /* A possible answer was clicked */
//   const optionClicked = (isCorrect) => {
//     // Increment the score
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResults(true);
//     }
//   };

//   /* Resets the game back to default */
//   const restartGame = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setShowResults(false);
//   };


//   return (
//     <div className="App">
//       {/* 1. Header  */}
//       <h1>USA Quiz 🇺🇸</h1>

//       {/* 2. Current Score  */}
//       <h2>Score: {score}</h2>

//       {/* 3. Show results or show the question game  */}
//       {showResults ? (
//         /* 4. Final Results */
//         <div className="final-results">
//           <h1>Final Results</h1>
//           <h2>
//             {score} out of {questions.length} correct - (
//             {(score / questions.length) * 100}%)
//           </h2>
//           <button onClick={() => restartGame()}>Restart game</button>
//         </div>
//       ) : (
//         /* 5. Question Card  */
//         <div className="question-card">
//           {/* Current Question  */}
//           <h2>
//             Question: {currentQuestion + 1} out of {questions.length}
//           </h2>
//           <h3 className="question-text">{questions[currentQuestion].text}</h3>

//           {/* List of possible answers  */}
//           <Box>
//             {questions[currentQuestion].options.map((option) => {
//               return (
//                 <Typography
//                   key={option.id}
//                   onClick={() => optionClicked(option.isCorrect)}
//                 >
//                   {option.text}
//                 </Typography>
//               );
//             })}
//           </Box>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function App() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0);


    const questions = [
        {
            text: "What is the capital of America?",
            options: [
                { id: 0, text: "a. New York City", isCorrect: false },
              { id: 1, text: "b. Boston", isCorrect: false },
              { id: 2, text: "c. Santa Fe", isCorrect: false },
              { id: 3, text: "d. Washington DC", isCorrect: true },
            ],
          },
          {
            text: "What year was the Constitution of America written?",
            options: [
              { id: 0, text: "a. 1787", isCorrect: true },
              { id: 1, text: "b. 1776", isCorrect: false },
              { id: 2, text: "c. 1774", isCorrect: false },
              { id: 3, text: "d. 1826", isCorrect: false },
            ],
          },
          {
            text: "Who was the second president of the US?",
            options: [
              { id: 0, text: "a. John Adams", isCorrect: true },
              { id: 1, text: "b. Paul Revere", isCorrect: false },
              { id: 2, text: "c. Thomas Jefferson", isCorrect: false },
              { id: 3, text: "d. Benjamin Franklin", isCorrect: false },
            ],
          },
          {
            text: "What is the largest state in the US?",
            options: [
              { id: 0, text: "a. California", isCorrect: false },
              { id: 1, text: "b. Alaska", isCorrect: true },
              { id: 2, text: "c. Texas", isCorrect: false },
              { id: 3, text: "d. Montana", isCorrect: false },
            ],
          },
          {
            text: "Which of the following countries DO NOT border the US?",
            options: [
              { id: 0, text: "a. Canada", isCorrect: false },
              { id: 1, text: "b. Russia", isCorrect: true },
              { id: 2, text: "c. Cuba", isCorrect: true },
              { id: 3, text: "d. Mexico", isCorrect: false },
            ],
          },
        ];
        
        useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "a") {
          optionClicked(questions[currentQuestion].options[0].isCorrect);
        } else if (e.key === "b") {
          optionClicked(questions[currentQuestion].options[1].isCorrect);
        } else if (e.key === "c") {
          optionClicked(questions[currentQuestion].options[2].isCorrect);
        } else if (e.key === "d") {
          optionClicked(questions[currentQuestion].options[3].isCorrect);
        } else if (e.key === "Enter") {
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setShowResults(true);
            updateHighestScore();
          }
        } else if (e.key === " ") {
          restartGame();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [currentQuestion, questions]);

    const optionClicked = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
          updateHighestScore();
        }
    };

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    const updateHighestScore = () => {
        if (score > highestScore) {
          setHighestScore(score);
        }
    };

  return (
    <div className="App">
            <div className="App">
                <h1>USA Quiz 🇺🇸</h1>
                <h2>Score: {score}</h2>
                <h2>Highest Score: {highestScore}</h2>
                {showResults ? (
                    <div className="final-results">
                        <h1>Final Results</h1>
                        <h2>
                            {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
                        </h2>
                        <button onClick={restartGame}>Restart game</button>
                    </div>
                ) : (
                    <div className="question-card">
                        <h2>
                            Question: {currentQuestion + 1} out of {questions.length}
                        </h2>
                        <h3 className="question-text">{questions[currentQuestion].text}</h3>
                        <Box>
                            {questions[currentQuestion].options.map((option) => (
                                <Typography key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                                    {option.text}
                                </Typography>
                            ))}
                        </Box>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
