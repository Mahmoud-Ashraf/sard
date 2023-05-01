import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./Views/Home/Home";
import LayoutWrapper from "./UI/LayoutWrapper/LayoutWrapper";
import NewsPage from "./Views/NewsPage/NewsPage";
import NewsList from "./Components/NewsList/NewsList";
import NewsDetails from "./Components/NewsDetails/NewsDetails";

function App() {
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const rootEle = document.getElementById("root-html");
  const globalLang = useSelector((state) => {
    return state.lang.globalLang;
  });

  useEffect(() => {
    if (rootEle) {
      if (globalLang === "ar") {
        rootEle.setAttribute("dir", "rtl");
      }
      if (globalLang === "en") {
        rootEle.setAttribute("dir", "ltr");
      }
      rootEle.setAttribute("lang", globalLang);
      localStorage.setItem("lang", globalLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalLang]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWrapper />,
      children: [
        {
          path: '/',
          loader: () => redirect("/home")
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/news',
          element: <NewsPage />,
          children: [
            {
              path: ':categoryId',
              element: <NewsList />
            },
            {
              path: 'details/:newsId',
              element: <NewsDetails />
            }
          ]
        }
      ],
    },
    {
      path: "*",
      loader: () => redirect("/home")
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
