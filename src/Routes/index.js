import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";
import NoAccessPage from "../pages/NoAccessPage";
import { useEffect } from "react";
import { getAuthorizedUser } from "../redux/actions/users";
import { Bars } from "react-loader-spinner";

import './style.css';

const authorizedRoutes = [
  { path: '/', element: <MainPage />, exact: true },
  { path: '/:id', element: <UserPage />, exact: false },
]

const PageRoutes = () => {
  const authorizedUser = useSelector(state => state.users.authorizedUser);
  const isLoading = useSelector(state => state.users.isUserLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthorizedUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div className="cnPagesRouteLoader">
      <Bars width={80} height={80} color='#000bff' />
    </div>
  }

  return (
    <BrowserRouter>
      <Routes>
        {authorizedUser ? authorizedRoutes.map((route) => <Route key={route.path} {...route} />) : <Route path='/' element={<NoAccessPage />} exact />}
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes;

