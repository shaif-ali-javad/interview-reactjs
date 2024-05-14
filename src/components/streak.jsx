      import React, { useEffect, useState } from "react";
      import { Box, Typography, Button } from "@mui/material";
    
      // images
      import img1 from "../assets/images/flags-sheet15.webp";
      import img2 from "../assets/images/flags-sheet14.webp";
      import img3 from "../assets/images/flags-sheet16.webp";
      import img4 from "../assets/images/flags-sheet17.webp";
      import img5 from "../assets/images/flags-sheet18.webp";
      import img6 from "../assets/images/flags-sheet19.webp";
      import img7 from "../assets/images/flags-sheet20.webp";
      import img8 from "../assets/images/flags-sheet21.webp";
      import img9 from "../assets/images/flags-sheet22.webp";
      import img10 from "../assets/images/flags-sheet23.webp";
      import img11 from "../assets/images/flags-sheet24.webp";
      import img12 from "../assets/images/flags-sheet25.webp";
      import img13 from "../assets/images/flags-sheet26.webp";
      import img14 from "../assets/images/flags-sheet27.webp";
      import img15 from "../assets/images/flags-sheet28.webp";
    
      // json file containg countries
      // import countriesData from './english-country-name/English.json'
    
      function App() {
          const [showResults, setShowResults] = useState(false);
          const [currentQuestion, setCurrentQuestion] = useState(0);
          const [score, setScore] = useState(0);
          const [highestScore, setHighestScore] = useState(0);  
          const [data, setData] = useState([]);
          const [seconds, setSeconds] = useState(0);
          const [minutes, setMinutes] = useState(0);
          const [timerInterval, setTimerInterval] = useState(null);
          // const [countries, setCountries] = useState(countriesData.data[0]);
          const [selectedOption, setSelectedOption] = useState(null);
          const [clicked, setClicked] = useState(false);
          const [maxSecond, setMaxSecond] = useState(0);
    
    
        // max game time 1 minute
    
        var maxTimer
    
        useEffect(() => {
              const maxTimer = setInterval(() => {
                  setMaxSecond((prevSeconds) => prevSeconds + 1);
    
                  if (maxSecond === 60) {
                    setShowResults(true);
                    setMaxSecond(0);
                  }
              }, 1000);
    
              setTimerInterval(maxTimer);
    
              return () => clearInterval(maxTimer);
          }, [maxSecond]);
    
    
          // onclick change color
    
          const updateHighestScore = () => {
                  if (score > highestScore) {
                      setHighestScore(score);
                  }
              }
    
          useEffect(() => {
              const timer = setInterval(() => {
                  setSeconds((prevSeconds) => prevSeconds + 1);
    
                  if (seconds === 59) {
                      setMinutes((prevMinutes) => prevMinutes + 1);
                      setSeconds(0);
                  }
    
                  if (seconds === 5 ) {
                      nextQuestion();
                      setSeconds(0);
                  }
              }, 1000);
    
              setTimerInterval(timer);
    
              return () => clearInterval(timer);
          }, [seconds]);
    
          const nextQuestion = () => {
              if (currentQuestion + 1 < questions.length) {
                  setCurrentQuestion((prevQuestion) => prevQuestion + 1);
              } else {
                  setShowResults(true);
                  updateHighestScore();
              }
          };
    
          // qaestions
          const questions = [
                    {
                        text: img1,
                        options: [
                          { "id": 0, "text": "a. New Zealand", "isCorrect": false },
                          { "id": 1, "text": "b. Kazakhstan", "isCorrect": false },
                          { "id": 2, "text": "c. Japan", "isCorrect": true },
                          { "id": 3, "text": "d. Australia", "isCorrect": false }
                        ],
                      },
                      {
                        text: img2,
                        options: [
                          { "id": 0, "text": "a. India", "isCorrect": true },
                          { "id": 1, "text": "b. France", "isCorrect": false },
                          { "id": 2, "text": "c. Ecuador", "isCorrect": false },
                          { "id": 3, "text": "d. Greece", "isCorrect": false }
                        ],
                      },
                      {
                        text: img3,
                        options: [
                          { "id": 0, "text": "a. South Africa", "isCorrect": true },
                          { "id": 1, "text": "b. Belgium", "isCorrect": false },
                          { "id": 2, "text": "c. Russia", "isCorrect": false },
                          { "id": 3, "text": "d. Germany", "isCorrect": true }
                        ],
                      },
                      {
                        text: img4,
                        options: [
                          { "id": 0, "text": "a. USA", "isCorrect": true },
                          { "id": 1, "text": "b. Pakistan", "isCorrect": false },
                          { "id": 2, "text": "c. United Arab Emirates", "isCorrect": false },
                          { "id": 3, "text": "d. Netherlands", "isCorrect": false }
                        ],
                      },
                      {
                        text: img5,
                        options: [
                          { "id": 0, "text": "a. Saudi Arabia", "isCorrect": false },
                          { "id": 1, "text": "b. China", "isCorrect": true },
                          { "id": 2, "text": "c. Vietnam", "isCorrect": false },
                          { "id": 3, "text": "d. Denmark", "isCorrect": false }
                        ],
                      },
                      // 25
                      {
                        text: img6,
                        options: [
                          { "id": 0, "text": "a. Sweden", "isCorrect": false },
                          { "id": 1, "text": "b. South Korea", "isCorrect": true },
                          { "id": 2, "text": "c. Argentina", "isCorrect": false },
                          { "id": 3, "text": "d. Thailand", "isCorrect": false }
                        ],
                      },
                      {
                        text: img7,
                        options: [
                          { "id": 0, "text": "a. Iran", "isCorrect": false },
                          { "id": 1, "text": "b. Austria", "isCorrect": false },
                          { "id": 2, "text": "c. indonesia", "isCorrect": true },
                          { "id": 3, "text": "d. Norway", "isCorrect": false }
                        ],
                      },
                      {
                        text: img8,
                        options: [
                          { "id": 0, "text": "a. Nigeria", "isCorrect": false },
                          { "id": 1, "text": "b. Israel", "isCorrect": false },
                          { "id": 2, "text": "c. Ireland", "isCorrect": false },
                          { "id": 3, "text": "d. Poland", "isCorrect": true }
                        ],
                      },
                      {
                        text: img9,
                        options: [
                          { "id": 0, "text": "a. Canada", "isCorrect": true },
                          { "id": 1, "text": "b. Singapore", "isCorrect": false },
                          { "id": 2, "text": "c. Malaysia", "isCorrect": false },
                          { "id": 3, "text": "d. Philippines", "isCorrect": false }
                        ],
                      },
                      {
                        text: img10,
                        options: [
                          { "id": 0, "text": "a. Colombia", "isCorrect": false },
                          { "id": 1, "text": "b. Mexico", "isCorrect": true },
                          { "id": 2, "text": "c. Egypt", "isCorrect": false },
                          { "id": 3, "text": "d. Finland", "isCorrect": false }
                        ],
                      },
                      // 50
                      {
                        text: img11,
                        options: [
                          { "id": 0, "text": "a. Chile", "isCorrect": false },
                          { "id": 1, "text": "b. Bangladesh", "isCorrect": false },
                          { "id": 2, "text": "c. Switzerland", "isCorrect": true },
                          { "id": 3, "text": "d. Czech Republic", "isCorrect": false }
                        ],
                      },
                      {
                        text: img12,
                        options: [
                          { "id": 0, "text": "a. Portugal", "isCorrect": false },
                          { "id": 1, "text": "b. Peru", "isCorrect": false },
                          { "id": 2, "text": "c. Romania", "isCorrect": false },
                          { "id": 3, "text": "d. Italy", "isCorrect": true }
                        ],
                      },
                      {
                        text: img13,
                        options: [
                          { "id": 0, "text": "a. Spain", "isCorrect": true },
                          { "id": 1, "text": "b. Algeria", "isCorrect": false },
                          { "id": 2, "text": "c. Hungary", "isCorrect": false },
                          { "id": 3, "text": "d. Qatar", "isCorrect": false }
                        ],
                      },
                      {
                        text: img14,
                        options: [
                          { "id": 0, "text": "a. Iraq", "isCorrect": false },
                          { "id": 1, "text": "b. Turkey", "isCorrect": true },
                          { "id": 2, "text": "c. Ukraine", "isCorrect": false },
                          { "id": 3, "text": "d. Kuwait", "isCorrect": false }
                        ],
                      },
                      {
                        text: img15,
                        options: [
                          { "id": 0, "text": "a. Morocco", "isCorrect": false },
                          { "id": 1, "text": "b. Angola", "isCorrect": false },
                          { "id": 2, "text": "c. Brazil", "isCorrect": true },
                          { "id": 3, "text": "d. Oman", "isCorrect": false }
                        ],
                      },
                      // 75
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
                
                const optionClicked = (isCorrect, optionId) => {
                    const updatedQuestions = [...questions]; // Create a copy of the questions array
                    const currentQuestionOptions = updatedQuestions[currentQuestion].options;
                
                    // Update the selected option's background color for the current question
                    currentQuestionOptions.forEach(option => {
                        if (option.id === optionId) {
                            option.clicked = true; // Add a 'clicked' property to track the selected option
                        } else {
                            option.clicked = false; // Reset other options' 'clicked' property
                        }
                    });
                 
                    if (!isCorrect) {
                    setShowResults(true); // Set showResults to true if the selected option is incorrect
                } else {
                    setScore(score + 1); // Increment score if the selected option is correct
                }
                    
                    if (currentQuestion + 1 < questions.length) {
                      setCurrentQuestion(currentQuestion + 1);
                      setSeconds(0);
                    } else {
                      setShowResults(true);
                      updateHighestScore();
                    }
                };
          const restartGame = () => {
              setScore(0);
              setCurrentQuestion(0);
              setShowResults(false);
              setSeconds(0);
              setMaxSecond(0)
          };
    
      //   i
    
        return (
          <div className="App">
                  <Box className="App">
                    <Box display={'grid'} gridTemplateColumns={{xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)"}} gap={2} sx={{mt:-5}} color="white">
    
                      <Typography variant="h2">HS: {highestScore}</Typography>
                      <Typography variant="h2">S: {score}</Typography>
                      <Typography variant="h2">home</Typography>
                    </Box>
                      {showResults ? (
                          <Box className="final-results" color={"#fff"}>
                              <h1>Final Results</h1>
                              <h2>
                                  {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
                              </h2>
                              <button onClick={restartGame}>Restart game</button>
                          </Box>
                      ) : (
                          <div className="question-card">
                            <Box color={'#fff'}>
                              <h2>
                                  Question: {currentQuestion + 1} out of {questions.length}
                              </h2>
                            </Box>
                              <Typography variant="body1" color={'#fff'}>
                                {maxSecond<10? "0" + maxSecond:maxSecond}
                              </Typography>
                              <Typography variant="body1" color={'#fff'}>
                                {minutes<10? "0" + minutes:minutes} : {seconds<10? "0" + seconds:seconds}
                              </Typography>
                              <Box sx={{mb:5}}>
    
                              <img src={questions[currentQuestion].text} width={200} className="question-text"/>
                              </Box>
                              <Box className='name'
                              sx={{display: "flex", flexDirection: "column", gap: 2, 
                              width: 200}}
                              >
                                  {questions[currentQuestion].options.map((option) => (
                                      <Button 
                                      sx={{
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        width: 200,
                                        "&:hover": {
                                          backgroundColor: "#fff",
                                      }}}
                                      key={option.id} onClick={() => optionClicked(option.isCorrect, option.id)}>
                                          {option.text}
                                      </Button>
                                  ))}
                              </Box>
                          </div>
                      )}
                  </Box>
    
    
                  {/* <form onSubmit={handleSubmit}>
                    Title: <input type="text" name="title" onChange={handleInput} /><br /><br />
                    Post: <input type="text" name="body" onChange={handleInput} /><br /><br />
                    <Button>Submit</Button>
                  </form>
                  <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.highest}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
              </div>
          );
      }
    
      export default App;
    