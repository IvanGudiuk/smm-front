import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import ServiceList from 'pages/ServiceList';
import RegisterSuccess from 'pages/RegisterSuccess';
import Verify from 'pages/Verify';
import Service from 'pages/Service';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import { Login } from 'components/Login/Login';
// import { Register } from 'components/Register/Register';
// import { Restore } from 'components/Restore/Restore';
// import { Success } from 'components/Success/Success';
// import NotFound from 'pages/NotFound';
import { RestrictedRoute } from 'components/restrictedRoute';
import { PrivateRoute } from 'components/privateRoute';
// import Verify from 'pages/Verify';
// import About from 'pages/About';
// import Home from 'pages/Home';
// import SmsVerify from 'pages/SmsVerify';
// import Profile from 'pages/Profile';
// import RegisterSuccess from 'pages/RegisterSuccess';
// import FAQ from 'pages/FAQ';
import { setLang } from '../../redux/slices/auth/slice';
// import css from './App.module.scss';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2); // Get first 2 letters of browser language
    const supportedLangs = ['en', 'ru', 'uk', 'es', 'tr'];
    const selectedLang = supportedLangs.includes(browserLang)
      ? browserLang
      : 'en'; // Default to "uk" if not supported

    dispatch(setLang(selectedLang)); // Set language in global state
  }, [dispatch]);

  // return (
  //   <div>
  //     <div id="google_translate_element"></div>
  //     <h1>Welcome to the website</h1>
  //     <p>Content to be translated.</p>
  //   </div>
  // );
  return (
    <Routes>
      <Route
        path="/register"
        element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        // element={<Register />}
      />
      <Route
        path="/register/success"
        element={
          <RestrictedRoute redirectTo="/" component={<RegisterSuccess />} />
        }
        // element={<Register />}
      />
      <Route
        path="/login"
        element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        // element={<Login />}
      />
      <Route path="/verify/:token" element={<Verify />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:service" element={<ServiceList />} />
        <Route path="/:service/:category" element={<Service />} />
      </Route>
      {/* <Route path="/register/success" element={<RegisterSuccess />} /> */}
      {/* <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} />
        <Route path="/frequently-asked-questions" element={<FAQ />} />
        <Route path="/sms-verification" element={<SmsVerify />} />
        <Route path="/users/:id/profile" element={<Profile />} /> */}
      {/* <Route
          path="/restore"
          element={<RestrictedRoute redirectTo="/" component={<Restore />} />}
          // element={<Login />}
        /> */}
      {/* <Route
          path="/restore/success"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<Success text="restoreSuccess" />}
            />
          }
          // element={<Login />}
        /> */}
      {/* <Route
          path="/verify/:token"
          // element={<RestrictedRoute redirectTo="/" component={<Verify />} />}
          element={<Verify />}
        /> */}
      {/* <Route
            path="/profile"
            element={<PrivateRoute component={<Profile />} />}
            // element={<Profile />}
          /> */}
      {/* <Route path="/users/verify/:token" element={<Verify />} /> */}
      {/* <Route
            path="/actions"
            element={<PrivateRoute component={<Actions />} />}
            // element={<Actions />}
          /> */}
      {/* <Route
            path="/actions/:id"
            element={<PrivateRoute component={<Action />} />}
            // element={<Action />}
          /> */}
      {/* <Route
            path="/actions/:id/stats"
            element={<PrivateRoute component={<Stats />} />}
            // element={<Stats />}
          /> */}
      {/* <Route
            path="/spots"
            element={<PrivateRoute component={<Spots />} />}
            // element={<Spots />}
          /> */}
      {/* <Route
            path="/employees"
            element={<PrivateRoute component={<Employees />} />}
            // element={<Employees />}
          /> */}
      {/* <Route
            path="/payment"
            element={<PrivateRoute component={<Payment />} />}
            // element={<Payment />}
          /> */}
      {/* <Route
            path="/successful-payment"
            element={<PrivateRoute component={<PaymentSuccess />} />}
            // element={<PaymentSuccess />}
          /> */}
      {/* <Route
            path="/failed-payment"
            element={<PrivateRoute component={<PaymentFail />} />}
            // element={<PaymentFail />}
          /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* <Route path="*" element={<NotFound />} />
      </Route> */}
    </Routes>
  );
};
