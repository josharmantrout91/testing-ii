import React from "react";

function Dashboard(props) {
  let { countStrike, countBall, countFoul, countHit } = props;
  return (
    <div>
      <button data-testid="strike" onClick={countStrike}>
        Strike
      </button>
      <button data-testid="ball" onClick={countBall}>
        Ball
      </button>
      <button data-testid="foul" onClick={countFoul}>
        Foul
      </button>
      <button data-testid="hit" onClick={countHit}>
        Hit
      </button>
    </div>
  );
}

export default Dashboard;
