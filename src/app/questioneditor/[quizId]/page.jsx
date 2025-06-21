import QuestionEditor from "../questioneditor";
 
export default function Page({ params }) {
  return <QuestionEditor quizId={params.quizId} />;
}