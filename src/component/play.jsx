const s = {//  import React, { useEffect, useState } from "react";
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
//       text: "What year was the Constitution of America written?",
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
}


// 000000000000000000000000000000000000000000
// 000000000000000000000000000000000000000000
// 000000000000000000000000000000000000000000
// 000000000000000000000000000000000000000000
// 000000000000000000000000000000000000000000
// 000000000000000000000000000000000000000000
// 000000000000000000000000000000000000000000



// import React, { useEffect, useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import axios from "axios";
// import img1 from "../assets/images/flags-sheet14.webp";

// function App() {
//     const [showResults, setShowResults] = useState(false);
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [score, setScore] = useState(0);
//     const [highestScore, setHighestScore] = useState(0);  
//     const [data, setData] = useState([]);
//     const [seconds, setSeconds] = useState(0);
//     const [minutes, setMinutes] = useState(0);

//     var timer

//     useEffect(() => {
    
//       timer = setInterval(() => {
        

//       setSeconds(seconds + 1);

//       if(seconds === 59){
//         setMinutes(minutes + 1);
//         setSeconds(0);
//       }
    
//     }, 1000)

//     return () => clearInterval(timer);
//   })

    
//     // sending data not working
//     const [post, setPost] = useState({
//         title: "",
//         body: "",
//     });

//     const handleInput = (event) => {  
//       const { name, value } = event.target;
//         setPost({...post, [name]: value });
//     };


//     const handleSubmit = (event) => {
//       event.preventDefault();
//       axios.post('http://localhost:3000/api/data', {
//         title: post.title,
//         body: post.body
//       })
//       .then(response => console.log(response))
//       .catch(err => console.log(err));
//     };
    
    
//     // getting data
    
//   useEffect(() => {
//     fetch('http://localhost:3000/api/data')
//       .then(res => res.json())
//       .then(result => setData(result)) // Changed 'data' to 'result' to avoid confusion
//       .catch(err => console.log(err));
//     }, []);
    

//     // update highest score
//     const updateHighestScore = () => {
//       if (score > highestScore) {
//           setHighestScore(score);
//       }
//   }

//   // image
//     const questions = [
//         {
//             text: img1,
//             options: [
//                 { id: 0, text: "a. New York City", isCorrect: false },
//               { id: 1, text: "b. Boston", isCorrect: false },
//               { id: 2, text: "c. Santa Fe", isCorrect: false },
//               { id: 3, text: "d. Washington DC", isCorrect: true },
//             ],
//           },
//           {
//             text: img1,
//             options: [
//               { id: 0, text: "a. 1787", isCorrect: true },
//               { id: 1, text: "b. 1776", isCorrect: false },
//               { id: 2, text: "c. 1774", isCorrect: false },
//               { id: 3, text: "d. 1826", isCorrect: false },
//             ],
//           },
//           {
//             text: img1,
//             options: [
//               { id: 0, text: "a. John Adams", isCorrect: true },
//               { id: 1, text: "b. Paul Revere", isCorrect: false },
//               { id: 2, text: "c. Thomas Jefferson", isCorrect: false },
//               { id: 3, text: "d. Benjamin Franklin", isCorrect: false },
//             ],
//           },
//           {
//             text: img1,
//             options: [
//               { id: 0, text: "a. California", isCorrect: false },
//               { id: 1, text: "b. Alaska", isCorrect: true },
//               { id: 2, text: "c. Texas", isCorrect: false },
//               { id: 3, text: "d. Montana", isCorrect: false },
//             ],
//           },
//           {
//             text: img1,
//             options: [
//               { id: 0, text: "a. Canada", isCorrect: false },
//               { id: 1, text: "b. Russia", isCorrect: true },
//               { id: 2, text: "c. Cuba", isCorrect: true },
//               { id: 3, text: "d. Mexico", isCorrect: false },
//             ],
//           },
//         ];

        
//         useEffect(() => {
//       const handleKeyDown = (e) => {
//         if (e.key === "a") {
//           optionClicked(questions[currentQuestion].options[0].isCorrect);
//         } else if (e.key === "b") {
//           optionClicked(questions[currentQuestion].options[1].isCorrect);
//         } else if (e.key === "c") {
//           optionClicked(questions[currentQuestion].options[2].isCorrect);
//         } else if (e.key === "d") {
//           optionClicked(questions[currentQuestion].options[3].isCorrect);
//         } else if (e.key === "Enter") {
//           if (currentQuestion + 1 < questions.length) {
//             setCurrentQuestion(currentQuestion + 1);
//           } else {
//             setShowResults(true);
//             updateHighestScore();
//           }
//         } else if (e.key === " ") {
//           restartGame();
//         }
//       };

//       document.addEventListener("keydown", handleKeyDown);

//       return () => {
//         document.removeEventListener("keydown", handleKeyDown);
//       };
//     }, [currentQuestion, questions]);

//     const optionClicked = (isCorrect) => {
//         if (isCorrect) {
//           setScore(score + 1);
//         }

//         if (currentQuestion + 1 < questions.length) {
//           setCurrentQuestion(currentQuestion + 1);
//         } else {
//           setShowResults(true);
//           updateHighestScore();
//         }
//     };

//     //next question
//     const nextQuestion = () => {
//         if (currentQuestion + 1 < questions.length) {
//           setCurrentQuestion(currentQuestion + 1);
//         } else {
//           setShowResults(true);
//           updateHighestScore();
//         }
//     };

//     const restartGame = () => {
//         setScore(0);
//         setCurrentQuestion(0);
//         setShowResults(false);
//     };

// //   i

//   return (
//     <div className="App">
//             <Box className="App">
//               <Box display={'grid'} gridTemplateColumns={{xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)"}} gap={2} sx={{mt:-5}} color="white">

//                 <Typography variant="h2">HS: {highestScore}</Typography>
//                 <Typography variant="h2">S: {score}</Typography>
//                 <Typography variant="h2">home</Typography>
//               </Box>
//                 {showResults ? (
//                     <div className="final-results">
//                         <h1>Final Results</h1>
//                         <h2>
//                             {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
//                         </h2>
//                         <button onClick={restartGame}>Restart game</button>
//                     </div>
//                 ) : (
//                     <div className="question-card">
//                         <h2>
//                             Question: {currentQuestion + 1} out of {questions.length}
//                         </h2>
//                         <Typography variant="body1" color={'#fff'}>
//                           {minutes<10? "0" + minutes:minutes} : {seconds<10? "0" + seconds:seconds}
//                         </Typography>
//                         <Box sx={{mb:5}}>

//                         <img src={questions[currentQuestion].text} width={200} className="question-text"/>
//                         </Box>
//                         <Box className='name'
//                          sx={{display: "flex", flexDirection: "column", gap: 2, 
//                         width: 200}}
//                         >
//                             {questions[currentQuestion].options.map((option) => (
//                                 <Button 
//                                 sx={{backgroundColor: "#eeeeee", borderRadius: 5, width: 200}} 
//                                 key={option.id} onClick={() => optionClicked(option.isCorrect)}>
//                                     {option.text}
//                                 </Button>
//                             ))}
//                         </Box>
//                     </div>
//                 )}
//             </Box>


//             {/* <form onSubmit={handleSubmit}>
//               Title: <input type="text" name="title" onChange={handleInput} /><br /><br />
//               Post: <input type="text" name="body" onChange={handleInput} /><br /><br />
//               <Button>Submit</Button>
//             </form>
//             <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((d, i) => (
//             <tr key={i}>
//               <td>{d.highest}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//         </div>
//     );
// }

// export default App;


// 111111111111111111111111111111111
// 111111111111111111111111111111111
// 111111111111111111111111111111111
// 111111111111111111111111111111111
// 111111111111111111111111111111111
// 111111111111111111111111111111111
// 111111111111111111111111111111111



  import React, { useEffect, useState } from "react";
  import { Box, Typography, Button } from "@mui/material";
  import axios from "axios";
  import "./60sec.css"
  import { NavLink } from "react-router-dom";
  import Lottie from'lottie-react'
  import animation from "../assets/2.json";
  import animation0 from "../assets/3.json";
  import animation1 from "../assets/4.json";
  import animation2 from "../assets/5.json";
  import animation3 from "../assets/6.json";
  import animation7 from "../assets/7.json";
  import animation8 from "../assets/8.json";


  // image
  import img01 from "../assets/Asset 2.png";
  import img02 from "../assets/restart.png";
  import img03 from "../assets/game over.png";

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
      const [one, setOne] = useState(0);
      const [second, setSecond] = useState(0);
      const [third, setThird] = useState(0);
      const [fourth, setFourth] = useState(0);
      const [player, setPlayer] = useState([])

      const addScore = (score) => {
        updateHighestScore(score);
        // Optionally, send the score to the server if needed
        axios.put('axios.post("http://localhost:3001/player', { score })
            .then(response => console.log(response.data))
            .catch(error => console.error('Error updating score:', error));
    };


useEffect(() => {
  axios.get("http://localhost:3001/getplayer")
  .then(player => setPlayer(player.data))
  .catch(err => console.log(err))
}, [])


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

    //   const updateHighestScore = () => {
    //     if (score > highestScore) {
    //         setHighestScore(score);
    //         setOne(score);
    //       }
    //       if (one > score) {
    //         setSecond(score);
    //       }
    //       if (second > score) {
    //         setThird(score);
    //       }
    //       if (third > score) {
    //         setFourth(score);
    //       }
          
    // }

// high score update

const updateHighestScore = () => {
  if (score > one) {
      setFourth(third);
      setThird(second);
      setSecond(one);
      setOne(score);
  } else if (score > second) {
      setFourth(third);
      setThird(second);
      setSecond(score);
  } else if (score > third) {
      setFourth(third);
      setThird(score);
  } else if (score > fourth) {
      setFourth(score);
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
              if (isCorrect) {
                setScore(score + 1);
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
                  {/* <Typography variant="h2">HS: {highestScore}</Typography> */}
                  <Box sx={{mt:0, ml: -40, color: "#fff", backgroundColor: "#000", }} className={"top"} textAlign="left">
                    <Typography variant="h2" sx={{ml: 0, mt:0, mb:-3, fontSize: 20, backgroundColor: "#20dbce", p: 1, width: 200}} textAlign={"center"}>Top Scorers</Typography>
                    <Typography variant="h2" sx={{display: "flex",ml: 0, mt:3, mb:-3, fontSize: 12, backgroundColor: "rgb(4, 93, 148)", p: 1, width: 200, wordSpacing: 15}} textAlign={"center"}><Typography sx={{fontSize: 12, mr: 10}} className="">Rank Player</Typography> <Typography sx={{fontSize: 12}} className="">Score</Typography></Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 0', borderRadius: '10px' }}>
                    <Box sx={{ml:-7}}>
                  <Lottie animationData={animation} alt="background2" className='background3'/> 
                    </Box>
                  <Typography variant="h2" sx={{ml: 1, mt:-.8, fontSize:50}}>
                    
                    {/* {one} */}
                  {player.map((player) => (
        <Typography variant="body1" sx={{display: "flex", mb: -3}} className="player">
          <p className="text">{player.name }
           </p>
        </Typography>
      ))}
               {player.map((player) => (
        <Typography variant="body1" sx={{display: "flex", mb: -3}} className="player">
              <p style={{textAlign: "right"}} className="text-p">{player.score }</p>
        </Typography>
      ))}</Typography>
                  </Box>
                  <Box sx={{ justifyContent: 'center', mt: -28.9, mr: 20, borderRadius: '10px' }} >
                  <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0', borderRadius: '10px', mb: 2.6}}>
                  <Lottie animationData={animation0} alt="background2" width={100} className='background2'/> 
                  {/* <Typography variant="h2" sx={{ml: 1, mt:-.8, fontSize:50}}>{second}</Typography> */}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '10px' , mt: -1.1, mb: 1}}>
                  <Lottie animationData={animation1} alt="background2" width={100} className='background2'/> 
                  {/* <Typography variant="h2" sx={{ml: 1, mt:-.8, fontSize:50}}>{third}</Typography> */}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0', borderRadius: '10px' }}>
                  <Lottie animationData={animation2} alt="background2" width={100} className='background2'/> 
                  {/* <Typography variant="h2" sx={{ml: 1, mt:-.8, fontSize:50}}>{fourth}</Typography> */}
                  </Box>
                  </Box>
                  </Box>
                <Box display={'grid'} gridTemplateColumns={{xs: "1fr", sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)"}} gap={2} sx={{mt:0}} color="white">
                
                  <Typography variant="h5" sx={{backgroundColor: "hsl(294, 100%, 35%)", borderRadius:10, mb:-3}}>Your Score : {score}</Typography>

                  <Box sx={{padding: 1, borderRadius: "10px", color: "#000"}}>
                    <NavLink className={"link2"} to="/gamemode">
                      <img src={img01} className='background4'/>
                    </NavLink>
                  </Box>
                </Box>
                  {showResults ? (
                    
                    <Box className="final-results" color={"#fff"}>
                      <Typography variant="h5" className="bestScore" sx={{borderRadius:10, mb: 10}}>Best Score: {one}</Typography>
                      <img src={img03} className='background5'/><br />
                        {/* <h1>Final Results</h1> */}
                          {/* <h2>
                              {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
                          </h2> */}
                          <Button onClick={restartGame}>
                            <img src={img02} className='restart'/>
                          </Button>
                      </Box>
                  ) : (
                      <div className="question-card">
                        {/* <Box color={'#fff'}>
                          <h2>
                              Question: {currentQuestion + 1} out of {questions.length}
                          </h2>
                        </Box> */}
                          <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 0 1rem', borderRadius: '10px' }}>

                          <Lottie animationData={animation3} alt="timer" width={100} className='timer'/> 
                          <Typography variant="h2" color={'#fff'} sx={{ml: 1, mt:-.5}}>
                            {maxSecond<10? "0" + maxSecond:maxSecond}
                          </Typography>
                          </Box>
                          {/* <Typography variant="body1" color={'#fff'}>
                            {minutes<10? "0" + minutes:minutes} : {seconds<10? "0" + seconds:seconds}
                          </Typography> */}
                          <Box sx={{mb:5}}>

                          <img src={questions[currentQuestion].text} width={200} className="question-text"/>
                          <Box className={"line-container"} sx={{width: 200}}>
                          <Box className='line' sx={{backgroundColor: "#fff", mt:1,mb:-3, borderRadius: 5}}/>
                          </Box>
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
