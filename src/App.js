import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "react-toast-notifications";
import UserStoreProvider from "./context/UserContext";

import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import HospitalPage from "./pages/hospital/HospitalPage";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";
import UploadPage from "./pages/UploadPage";
import LoginPage from "./pages/LoginPage";
import ReagisterPage from "./pages/ReagisterPage";
import MemberPage from "./pages/MemberPage";

import PrivateRoute from "./guard/auth";



//redux setup
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/index";
import CartPage from "./pages/CartPage";

const store = createStore(rootReducer);

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="top-center"
      >
        <QueryClientProvider client={queryClient}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/detail/:id/title/:title">
                <DetailPage />
              </Route>
              <Route path="/hospital">
                <HospitalPage />
              </Route>
              <Route path="/upload">
                <UploadPage />
              </Route>

              <PrivateRoute path="/cart">
                <CartPage />
              </PrivateRoute>

              <PrivateRoute path="/member">
                <MemberPage />
              </PrivateRoute>

              <Route path="/register">
                <ReagisterPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>

              <Route
                path="/category"
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} exact>
                      <IndexPage />
                    </Route>
                    <Route path={`${url}/create`}>
                      <CreatePage />
                    </Route>
                    <Route path={`${url}/edit/:id`}>
                      <EditPage />
                    </Route>
                  </>
                )}
              ></Route>
            </Switch>
            <Footer />
          </Router>
        </QueryClientProvider>
      </ToastProvider>
    </UserStoreProvider>
    </Provider>
  );
}

export default App;
