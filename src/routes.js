import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Posts from "./components/pages/posts";
import Albuns from "./components/pages/albuns";
import All from "./components/pages/all";
import IndexApp from "./App";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route path="/" exact component = { IndexApp } />
           <Route path="/pages/posts" exact component = { Posts } />
           <Route path="/pages/albuns" exact component = { Albuns } />
           <Route path="/pages/all" exact component = { All } />
       </BrowserRouter>
   )
}

export default Routes;