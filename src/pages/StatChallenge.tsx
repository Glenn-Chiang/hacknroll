import { useState, useEffect } from "react";
import { Button, Typography, Container, keyframes, useTheme } from "@mui/material";

// Question button flicker animation
const flickerAnimation = keyframes`
  0% {
    box-shadow: 0 0 8px rgba(255, 87, 34, 0.6), 0 0 16px rgba(255, 152, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 12px rgba(255, 152, 0, 0.8), 0 0 24px rgba(255, 87, 34, 0.7);
  }
  100% {
    box-shadow: 0 0 16px rgba(255, 87, 34, 0.9), 0 0 32px rgba(255, 152, 0, 1);
  }
`;

function StatChallenge() {
  const theme = useTheme();
  const questions = [
    "Fastest 2.4km timing?",
    "Heaviest squat/bench/deadlift?",
    "Most number of SUs used?",
    "Most cooked for uni?",
    "Stays nearest to campus?",
    "Highest GPA/CAP?",
    "Most number of internships done?",
    "Most number of mods taken this sem?",
  ];

  // Map each question to a corresponding image
  const questionImages: { [key: string]: string } = {
    "Fastest 2.4km timing?": "/src/assets/run.jpeg",
    "Heaviest squat/bench/deadlift?": "/src/assets/sbd.jpg",
    "Most number of SUs used?": "/src/assets/su.jpeg",
    "Most cooked for uni?": "/src/assets/cooked.jpeg",
    "Stays nearest to campus?": "/src/assets/nus.jpg",
    "Highest GPA/CAP?": "/src/assets/grades.png",
    "Most number of internships done?": "/src/assets/internships.png",
    "Most number of mods taken this sem?": "/src/assets/nusmods.png",
  };

  const [remainingQuestions, setRemainingQuestions] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false); // Track if all questions have been asked
  const [isVisible, setIsVisible] = useState(true); // Visibility state for transitions

  // Generate a random question
  function getRandomQuestion() {
    if (remainingQuestions.length === 0) {
      setGameOver(true); // All questions have been asked
      return "";
    }
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const selectedQuestion = remainingQuestions[randomIndex];
    const newRemainingQuestions = remainingQuestions.filter(
      (question) => question !== selectedQuestion
    );
    setRemainingQuestions(newRemainingQuestions);
    return selectedQuestion;
  }

  // Generate a new question with a transition
  function generateQuestion() {
    if (gameOver) {
      // Reset the game state
      setRemainingQuestions(questions);
      setGameOver(false);
    }

    // Trigger fade-out effect before changing the question
    setIsVisible(false);
    setTimeout(() => {
      const newQuestion = getRandomQuestion();
      setCurrentQuestion(newQuestion);
      setIsVisible(true); // Trigger fade-in effect
    }, 300); // 300ms for fade-out effect
  }

  // Styling for fade effect
  const fadeStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease-in-out", // Smooth fade transition
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: theme.shadows[4],
        }}
      >
        {!currentQuestion && (
          <>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              Let the stats speak for themselves!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.error.main,
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              ⚠️ Warning: May ruin friendships!
            </Typography>
          </>
        )}

        {currentQuestion && (
          <div style={fadeStyle}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {currentQuestion}
            </Typography>

            {/* Display image below the question */}
            {questionImages[currentQuestion] && (
              <div style={{ marginBottom: "20px" }}>
                <img
                  src={questionImages[currentQuestion]}
                  alt={currentQuestion}
                  style={{
                    maxWidth: "50%",
                    height: "auto",
                    marginBottom: "20px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    ...fadeStyle, // Apply the fade effect to the image
                  }}
                />
              </div>
            )}
          </div>
        )}

        <Button
          variant="contained"
          size="large"
          onClick={generateQuestion}
          sx={{
            padding: "12px 40px",
            fontSize: "18px",
            textTransform: "none",
            borderRadius: "12px",
            background: theme.palette.error.main,
            color: "white",
            transition: "all 0.3s ease",
            overflow: "hidden",
            ":hover": {
              background: theme.palette.error.dark,
              animation: `${flickerAnimation} 0.15s infinite alternate`,
              transform: "scale(1.05)",
            },
            ":active": {
              transform: "scale(0.95)",
            },
          }}
        >
          {gameOver ? "Play again?" : currentQuestion ? "Next Question" : "Start"}
        </Button>
      </Container>
    </>
  );
}

export default StatChallenge;
