import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import QuizQuestion from "../QuizQuestion.js/QuizQusetion";

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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
