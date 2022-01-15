const Board = () => {
  let player = 1;
  let status = `Player ${player}`
  
  return (
    <div className="game-board">
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};


// =========================================
ReactDOM.render(<Board />, document.getElementById('root'));
