import { Suspense } from "react";
import QuestionEditor from "../questioneditor/page";
 
export default function QuizEditorPage() {
  return (
<Suspense fallback={<div>กำลังโหลด...</div>}>
<QuestionEditor />
</Suspense>
  );
}