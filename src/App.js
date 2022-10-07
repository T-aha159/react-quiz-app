import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Chip, Grid, Typography, Paper, styled, } from "@mui/material"
import { Box } from '@mui/system';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  let [quizData, setquizData] = useState([
    {
      question: "Html Stands For _______________________",
      options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language"
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: [
        "Java Style",
        "Java Script",
        "Script",
        "Script Src"
      ],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: [
        "Document Object Model",
        "html",
        "Css",
        "Java"
      ],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: [
        "Read Only Memory",
        "Dom",
        "Random Acccess Memory",
        "For Pc"
      ],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory"
      ],
      correctAns: "Read Only Memory",
    },
    {
      question: "If you type the following code in the console window, what result will you get?3 > 2 > 1 === false;",
      options: [
        "Error",
        "Null",
        "False",
        "True"
      ],
      correctAns: "True",
    },
    {
      question: "JavaScript is a ___ -side programming language.",
      options: [
        "Client",
        "Server",
        "Both",
        "none"
      ],
      correctAns: "Both",
    },
    {
      question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
      options: [
        "alertBox(“Hello DataFlair!”)",
        "alert(Hello DataFlair!)",
        "msgAlert(“Hello DataFlair!”)",
        "alert(“Hello DataFlair!”)"
      ],
      correctAns: "alert(“Hello DataFlair!”)",
    },
    {
      question: "How do you find the minimum of x and y using JavaScript?",
      options: [
        "min(x,y);",
        "Math.min(x,y)",
        "Math.min(xy)",
        "min(xy);"
      ],
      correctAns: "Math.min(x,y)",
    },
  ])
  let [indexNumber, setindexNumber] = useState(0)
  let [sorce, setsorce] = useState(0)
  let [showResult, setshowResult] = useState(false)
  let [second, setsecond] = useState(59)
  let [Minutes, setMinutes] = useState(4)
  let [correct, setcorrect] = useState(0)
  let [wrong, setwrong] = useState(0)

  let cheakQuestion = (a, b) => {
    console.log(a)
    if (a == b) {
      setsorce(sorce + 1)
      setcorrect(correct + 1)
      setwrong(quizData.length - correct)
    }

    if (indexNumber + 1 == quizData.length) {
      setshowResult(true)

    } else {
      setindexNumber(indexNumber + 1)
    }
  }
 

  useEffect(() => {
    let timer = setInterval(() => {
      setsecond(second - 1)
      if (second === 0) {
        setMinutes(Minutes - 1);
        setsecond(10);
      }
      if (Minutes == 0) {
        setshowResult(true)
      }
    }, 1000);
    return () => clearInterval(timer)
  })
  return (
    <div>
      {showResult ? <Box className="ResultBox" >{
        <div>
          <Typography variant="h2" align="center" >Your Result</Typography>
          <Typography variant="h3" align="center" ><b>{Math.round((sorce / quizData.length) * 100)}%</b> </Typography>
          <h4>Total Question = {quizData.length}</h4>
          <h4>Correct Answer  = {correct}</h4>
          <h4>Wrong Answer = {wrong}</h4>
          <h4>Time Limit = 05:00 Minutes</h4>
          {/* <h4>Quiz Completed = {Minutes - }</h4> */}
          <h2 className="press" >Press F5 To Start Again</h2>
        </div>
      }</Box> :
        <Box className="main" >
          <Box>
            <Typography variant='h2'  >Quiz App </Typography>
            <Typography variant='h4' align="left" >Question#{indexNumber + 1}/{quizData.length} </Typography>
            <Typography variant='h6' align="right" className='Timer' >Remaining Time:{Minutes < 10 ? "0" + Minutes : Minutes}:{second < 10 ? "0" + second : second}</Typography>
          </Box>
          <Box>
            {/* question render */}
            <Typography variant='h6' >{quizData[indexNumber].question} </Typography>
          </Box>
          <Box className=""  >
            <Grid  >
              <Grid item >
                {quizData[indexNumber].options.map((e, i) => (
                  <Box className="optiondiv" >
                    <Button size='large' className='Options' onClick={() => cheakQuestion(e, quizData[indexNumber].correctAns)}>{e}</Button>
                  </Box>
                ))}
              </Grid>
            </Grid>
            <Box className="nextandSubmit" >
              {/* <Button className='Next' >Next</Button> */}
              <Button className='Submint' >Submit</Button>
            </Box>
          </Box>
        </Box>
      }

      
    </div>
  );
}

export default App;
