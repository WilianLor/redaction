import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CausePage from "../pages/CausesPage";
import QuotePage from "../pages/QuotesPage";
import RepertoirePage from "../pages/RepertoirePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/causes" exact component={CausePage} />
        <Route path="/quotes" exact component={QuotePage} />
        <Route path="/repertoire" exact component={RepertoirePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
