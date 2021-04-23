import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import AppLayout from "./Components/AppLayout/AppLayout";

const App = () => {
  return (
    <div>
      <AppLayout>
        <Router>
          <Switch>
            <Route path="/" component={Homepage} exact />
          </Switch>
        </Router>
      </AppLayout>
    </div>
  );
};

export default App;
