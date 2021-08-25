import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/";
import NotFound from "../pages/NotFound";

import CompanySearch from "../pages/CompanySearch";
import YearlyInsights from "../pages/YearlyInsights";

export default function Navigations() {
  return (
    <Switch>
      <Route path="/company-search" component={CompanySearch} />
      <Route path="/yearly-insights" component={YearlyInsights} />    
      <Route exact path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}
