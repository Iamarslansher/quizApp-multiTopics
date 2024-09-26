import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import QuizQuestion from "../QuizQuestion.js/QuizQusetion";
import Result from "../Result/Result";
import Nicetry from "../NiceTry/NiceTry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/quizQuestions",
    element: <QuizQuestion />,
  },
  {
    path: "/userResult",
    element: <Result />,
  },
  {
    path: "/nicetry",
    element: <Nicetry />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
