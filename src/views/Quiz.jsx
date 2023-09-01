import { QuizHeader } from "../components/QuizHeader";
import { QuizForm } from "../components/QuizForm";
import "../assets/css/quiz.css";
import "../assets/css/index.css";

export function Quiz() {
  return (
    <div className="body">
      <QuizHeader />
      <QuizForm />
    </div>
  );
}
