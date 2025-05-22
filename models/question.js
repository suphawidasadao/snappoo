import mongoose from "mongoose";
 
const choiceSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true, default: false },
});
 
const questionSchema = new mongoose.Schema(
  {
    creator: { type: String, required: true },
    questionText: { type: String, required: true },
    choices: {
      type: [choiceSchema],
      required: true,
      validate: {
        validator: (val) => val.length > 0,
        message: "ต้องมีตัวเลือกอย่างน้อย 1 ข้อ",
      },
    },
    questionType: {
      type: String,
      enum: ["ปรนัย", "อัตนัย"],
      default: "ปรนัย",
    },
    timeLimit: { type: Number, default: 30 }, // วินาที
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);
 
export default mongoose.models.Question || mongoose.model("Question", questionSchema);
 