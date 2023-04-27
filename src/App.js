import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./Views/Home/Home";
import LayoutWrapper from "./UI/LayoutWrapper/LayoutWrapper";
import NewsPage from "./Views/NewsPage/NewsPage";
import useHTTP from "./Hooks/use-http";
import { authActions } from "./Store/Auth/Auth";

function App() {
  const rootEle = document.getElementById("root-html");
  const globalLang = useSelector((state) => {
    return state.lang.globalLang;
  });
  // const token = useSelector(state => {
  //   return state.auth.token;
  // });
  const dispatch = useDispatch();
  const { sendRequest } = useHTTP();
  const getGuestToken = () => {
    sendRequest(
      {
        url: 'client/regist_guest',
        method: 'POST',
        body: { country_shortcode: 'EG' }
      },
      data => {
        dispatch(authActions.setUser({ token: data.data.api_token }));
        localStorage.setItem('token', data.data.api_token);
      },
      err => {

      }
    )
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

  useEffect(() => {
    getGuestToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          element: <NewsPage />
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
