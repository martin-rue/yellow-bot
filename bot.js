import { move, layMine, runRadar } from "./turns.js";
import { readRadar } from "./radar.js";

const state = {
  gridSize: 0,
  position: null,
  opponent: null,
  opponentUsedRadar: false,
  mineRemaining: 3,
  turn: 0,
  mines: [],
};

export const start = ({ radar }) => {
  const result = readRadar(radar);
  state.gridSize = result.gridSize;
  state.position = result.position;
};
//...
export const turn = ({ minesRemaining, opponentUsedRadar }) => {
  state.turn += 1;
  state.minesRemaining = minesRemaining;
  state.opponentUsedRadar = opponentUsedRadar;

  if (turn === 1) {
    state.position.x=0;
    state.position.y =0;
    state.mineRemaining+=1;
    return move(state.position.x, state.position.y)
  } else if (turn === 2) {
    state.position.x=state.gridSize - 1;
    state.position.y =0;
    state.mineRemaining+=1;
    return move(state.position.x, state.position.y);
   
  } else if (turn === 3) {
    state.position.x=state.gridSize - 1;
    state.position.y =state.gridSize - 1;
    state.mineRemaining+=1;
    return move(state.position.x, state.position.y);
  } else if (turn === 4) {
    state.position.x=0;
    state.position.y =state.gridSize - 1;
    state.mineRemaining+=1;
    return move(state.position.x, state.position.y);

  }else if(turn ===5){
    return layMine(state.position.x+=3,state.position.y+=3)
  }
  else if(turn===6){
    return layMine(state.position.x+=4,state.position.y+=7)
  }
  else if(turn===7){
    return layMine(state.position.x+=1,state.position.y+=1)
  }
  else if(turn===8){
    return layMine(state.position.x+=2,state.position.y+=2)
  }
  else if(turn===9){
    return layMine(state.position.x+=2,state.position.y+=2)
  }
  else if(turn===10){
    return layMine(state.position.x+=5,state.position.y+=3)
  }
  else if(turn===11){
    return layMine(state.position.x+=3,state.position.y+=5)
  }else{
    return move(state.position.x, state.position.y);
  }
  
};

export const handleRadar = ({ radar }) => {
  const result = readRadar(radar);
  state.opponent = result.opponent;
  state.mines = result.mines;
};

export const stop = ({ result, turns }) => {
  console.log(`${result} after ${turns} turns`);
};
