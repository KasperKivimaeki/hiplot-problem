import React from 'react';
import {HiPlot, Experiment} from 'hiplot';

function HiPlotWithData() {
    const experiment = Experiment.from_iterable([
        {'opt': 'sgd', 'lr': 0.01, 'dropout': 0.1},
        {'opt': 'adam', 'lr': 0.1, 'dropout': 0.2},
        {'opt': 'adam', 'lr': 1., 'dropout': 0.3},
        {'opt': 'sgd', 'lr': 0.001, 'dropout': 0.4},
    ]);
    return <HiPlot experiment={experiment} />;
}

function App() {
  return (
    <div className="App">
      {HiPlotWithData()}
    </div>
  );
}

export default App;
