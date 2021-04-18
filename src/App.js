import React from "react";

import { QueryClient, QueryClientProvider } from 'react-query'

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

const queryClient = new QueryClient()

function App() {
  return (
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
          <HospitalPage/>
        </Route>

        <Route path="/category"
        render={({match: { url }}) => (
          <>
          <Route path={`${url}/`} exact>
            <IndexPage/>
          </Route>
          <Route path={`${url}/create`} >
            <CreatePage/>
          </Route>
          <Route path={`${url}/edit/:id`} >
            <EditPage/>
          </Route>
          </>
        )}
        >
          
        </Route>


      </Switch>
      <Footer />
    </Router>
    </QueryClientProvider>
  );
}

export default App;
