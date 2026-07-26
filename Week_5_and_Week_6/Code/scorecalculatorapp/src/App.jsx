import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {

  return (
    <div>
      <CalculateScore
        name="Adamya Sharma"
        school="GLA University"
        total={495}
        goal={5}
      />
    </div>
  );
}

export default App;