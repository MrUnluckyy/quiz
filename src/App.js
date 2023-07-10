import { QuizProvider } from "./contexts/QuizContext";
import Quiz from "./Quiz";

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;
