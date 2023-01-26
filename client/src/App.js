import './App.css';
import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Loader from "./components/loader/loader.component";

const CheckPollingUnits = lazy(() =>
  import('./pages/check-polling-units/check-polling-units.component'),
);
const  TotalResults = lazy(() =>
  import('./pages/total-results/total-results.component'),
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
        <Route path={'/'} exact={true} component={CheckPollingUnits} />
        <Route path={'/lga/results'} exact={true} component={TotalResults} />
        </Suspense>
      </ErrorBoundary>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
