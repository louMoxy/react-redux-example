import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';

class Scoreboard extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, players, selectedPlayerIndex } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer  = bindActionCreators(PlayerActionCreators.selectPlayer , dispatch);
    const selectedPlayer = selectedPlayerIndex >= 0 ? players[selectedPlayerIndex] : null;
    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));
    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        
        <div className="player-detail">
          <PlayerDetail props={selectedPlayer}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(Scoreboard);
