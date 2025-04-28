import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HeroSection.jsx";
import Quote from "./pages/Quotes.jsx";
import First from "./pages/First.jsx";
import Resturents from "./pages/Resturents.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <First />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/quotes",
          element: <Quote />
        },
        {
          path: "resturents",
          element: <Resturents />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
