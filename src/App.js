import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./Views/Home/Home";
import LayoutWrapper from "./UI/LayoutWrapper/LayoutWrapper";
import NewsPage from "./Views/NewsPage/NewsPage";
// import NewsList from "./Components/NewsList/NewsList";
import NewsDetails from "./Components/NewsDetails/NewsDetails";
import SearhResult from "./Components/SearchResult/SearchResult";
import NewsSection from "./Components/NewsSection/NewsSection";
import ReadFromSource from "./Views/ReadFromSource/ReadFromSource";
import Auth from "./Views/Auth/Auth";
import Register from "./Components/Register/Register";
import EmailVerify from "./Components/EmailVerify/EmailVerify";
import SelectResourcesType from "./Components/SelectResourcesType/SelectResourcesType";
import SelectCategories from "./Components/SelectCategories/SelectCategories";
import SelectResources from "./Components/SelectResources/SelectResources";
import SelectCountries from "./Components/SelectCountries/SelectCountries";

function App() {
  // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const rootEle = document.getElementById("root-html");
  const globalLang = useSelector((state) => {
    return state.lang.globalLang;
  });
  const user = useSelector(state => state.auth.user);

  const checkLogedinLoader = () => {
    console.log(user);
    // if (user.name) {
    //   return redirect("/home");
    // }
    return null;
  }

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
              path: ':categoryCode',
              element: <NewsSection />
            },
            {
              path: 'details/:newsId',
              element: <NewsDetails />
            },
            {
              path: 'search/:searchText',
              element: <SearhResult />
            }
          ]
        },
        {
          path: '/source/:newsId',
          element: <ReadFromSource />
        }
      ],
    },
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path:'',
          loader: () => redirect('register')
        },
        {
          path: 'register',
          element: <Register />,
          // loader: checkLogedinLoader
        },
        {
          path: 'login',
          // loader: checkLogedinLoader
        },
        {
          path: 'verify-mail',
          element: <EmailVerify />
        },
        {
          path: 'resources-type',
          element: <SelectResourcesType />
        },
        {
          path: 'countries',
          element: <SelectCountries />
        },
        {
          path: 'categories',
          element: <SelectCategories />
        },
        {
          path: 'resources',
          element: <SelectResources />
        }
      ]
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
