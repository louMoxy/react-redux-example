import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'Jim Hoskins',
	  score: 31,
		created: '11/8/2016',
		updated: '11/9/2016'
	},
	{
		name: 'Andrew Chalkley',
		score: 20,
		created: '11/9/2016',
		updated: '11/10/2016'
	},
	{
		name: 'Alena Holligan',
		score: 50,
		created: '11/11/2016',
		updated: '11/12/2016'
	}
	],
	selectedPlayerIndex: -1
}

export default function Player(state=initialState, action) {
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return ({players: [
        ...state.players,
        {
          name: action.name,
          score: 0,
          created: '23/06/2018',
          updated: ''
        }
      ],
      selectedPlayerIndex: state.selectedPlayerIndex
    });
      
    case PlayerActionTypes.REMOVE_PLAYER:
      return ({players: [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1)
      ],
      selectedPlayerIndex: state.selectedPlayerIndex
    });
      
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      const players = state.players.map((player, index) => {
        if(index === action.index) {
          return {
            ...player,
            score: player.score + action.score,
            updated: '23/06/2018'
          };
        }
        return player;
      });
      return ({
        players: players,
        selectedPlayerIndex: state.selectedPlayerIndex
      })

    case PlayerActionTypes.SELECT_PLAYER :
    return ({
      players: state.players, 
      selectedPlayerIndex: action.index
    });
      
    default:
      return state;
  }
}
