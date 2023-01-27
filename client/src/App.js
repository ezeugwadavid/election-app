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
const  NewPollingUnit = lazy(() =>
  import('./pages/new-polling-unit/new-polling-unit.component'),
);
const  NewResult = lazy(() =>
  import('./pages/new-result/new-result.component'),
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
        <Route path={'/new/pollingunit'} exact={true} component={NewPollingUnit} />
        <Route path={'/new/results'} exact={true} component={NewResult} />
        </Suspense>
      </ErrorBoundary>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
