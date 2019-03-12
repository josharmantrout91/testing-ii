import React from "react";

function Dashboard(props) {
  return (
    <div>
      <button onClick={props.countStrike}>Strike</button>
      <button onClick={props.countBall}>Ball</button>
      <button onClick={props.countFoul}>Foul</button>
      <button onClick={props.countHit}>Hit</button>
    </div>
  );
}

export default Dashboard;
