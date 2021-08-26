import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";

import CompanySearch from "../pages/CompanySearch";

export default function Navigations() {
  return (
    <Switch>
      <Route exact path="/" component={CompanySearch} />

      <Route component={NotFound} />
    </Switch>
  );
}
