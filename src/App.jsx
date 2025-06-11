// QuizOfKinz.jsx
import { useReducer } from "react";

const questions = [
  {
    id: 1,
    question: "پایتخت فرانسه کدام است؟",
    options: ["برلین", "پاریس", "رم", "مادرید"],
    answer: "پاریس",
  },
  {
    id: 2,
    question: "بزرگ‌ترین سیاره منظومه شمسی؟",
    options: ["زمین", "مریخ", "زحل", "مشتری"],
    answer: "مشتری",
  },
  {
    id: 3,
    question: "زبان اصلی مرورگرها چیست؟",
    options: ["Python", "C++", "JavaScript", "PHP"],
    answer: "JavaScript",
  },
];

const initialState = {
  index: 0,
  showResult: false,
  score: 0,
  selected: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "answer": {
      const correct = questions[state.index].answer === action.payload ? 1 : 0;
      return {
        ...state,
        score: state.score + correct,
        selected: action.payload,
      };
    }
    case "next": {
      const nextIndex = state.index + 1;
      const isEnd = nextIndex >= questions.length;
      return {
        ...state,
        index: nextIndex,
        showResult: isEnd,
        selected: null,
      };
    }
    case "restart":
      return initialState;
    default:
      return state;
  }
}

export default function QuizOfKinz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const current = questions[state.index];

  return (
    <div
      dir="rtl"
      className="min-h-screen w-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center text-white">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🧠 QuizOfKinz 🧠
        </h1>

        {state.showResult ? (
          <div className="text-center">
            <h2 className="text-xl mb-4">نتیجه نهایی شما:</h2>
            <p className="text-4xl font-bold text-green-400 mb-6">
              {state.score} / {questions.length}
            </p>
            <button
              onClick={() => dispatch({ type: "restart" })}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl">
              شروع مجدد
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">{current.question}</h2>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => dispatch({ type: "answer", payload: opt })}
                  disabled={state.selected !== null}
                  className={`px-4 py-2 rounded-xl border transition-all duration-300 
                    ${
                      state.selected === opt
                        ? opt === current.answer
                          ? "bg-green-500 border-green-600"
                          : "bg-red-500 border-red-600"
                        : "hover:bg-white/10 border-white/20"
                    }
                  `}>
                  {opt}
                </button>
              ))}
            </div>
            {state.selected && (
              <div className="flex justify-end">
                <button
                  onClick={() => dispatch({ type: "next" })}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl">
                  سوال بعدی
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
