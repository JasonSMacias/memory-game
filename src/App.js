import React, { Component } from 'react';
import ButtonIcon from './components/ButtonIcon';
import ButtonDiv from './components/ButtonDiv';
import FaIcons from './components/FaIcons';

class App extends Component {
  state = {
    iconsList: FaIcons,
    chosen: [],
    score: 0,
    highScore: 0
  }

  clickCheck = iconName => {
    
    let chosenList = this.state.chosen;
    if (chosenList.includes(iconName)) {
      alert("bad guess, game over.  Try again.");
      // reset score, re-populate icons
      const updatedIconsList = this.state.iconsList
      .sort(() => 0.5 - Math.random());
      this.setState({
        iconsList: updatedIconsList,
        score: 0,
        chosen: []
      });
    }
    else{
      
      chosenList.push(iconName);
      let currentScore = this.state.score;
      let currentHigh = this.state.highScore;
      currentScore++;
      if (currentScore > currentHigh) {
        currentHigh = currentScore;
      };
      const updatedIconsList = this.state.iconsList
      .sort(() => 0.5 - Math.random());
      this.setState({
        iconsList: updatedIconsList,
        chosen: chosenList,
        score: currentScore,
        highScore: currentHigh
      });
    }

  };

  render() {
    const { iconsList } = this.state;
    return (
      <div className="container">

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[0]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[1]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[2]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[3]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[4]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[5]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[6]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[7]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[8]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[9]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile is-vcentered">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[10]}
              clickCheck={this.clickCheck}
            />
          </div>
          <div className="column is-6">
            <div className="is-size-5-mobile is-size-4-tablet is-size-2-desktop has-text-centered">Click an icon, don't repeat!</div>
          </div>

          <ButtonDiv 
            icon={iconsList[11]}
            clickCheck={this.clickCheck}
          />
        </div>

          <div className="columns is-vcentered is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[12]}
              clickCheck={this.clickCheck}
            />
          </div>
          <div className="column is-6">
            <div className="columns is-mobile">
              <div className="column is-size-5-mobile is-size-3-tablet is-size-1-desktop has-text-right">Score: <span className="has-text-danger">{this.state.score}</span></div>
              <div className="column is-size-5-mobile is-size-3-tablet is-size-1-desktop has-text-success">Best: <span className="has-text-danger">{this.state.highScore}</span></div>
            </div>
          </div>
          <ButtonDiv 
            icon={iconsList[13]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[14]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[15]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[16]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[17]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[18]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[19]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[20]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[21]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[22]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[23]}
            clickCheck={this.clickCheck}
          />
        </div>

      </div>
    );
  }
}

export default App;
