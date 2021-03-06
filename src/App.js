import React, { Component } from 'react';
import ButtonIcon from './components/ButtonIcon';
import ButtonDiv from './components/ButtonDiv';
import FaIcons from './components/FaIcons';
import Modal from './components/Modal';
import Colors from './components/Colors';

class App extends Component {
  

  state = {
    iconsList: FaIcons,
    iconColors: Colors,
    chosen: [],
    score: 0,
    highScore: 0,
    active: "modal",
    modalContent: ""
  }
  
  close = () => {
    this.setState({active: "modal"});
  };

  clickCheck = iconName => {
    
    let chosenList = this.state.chosen;
    if (chosenList.includes(iconName)) {
      // reset score, re-populate icons
      const updatedIconsList = this.state.iconsList
        .sort(() => 0.5 - Math.random());
      console.log("updated icon list in if: "+updatedIconsList);
      const updatedColors = this.state.iconColors
        .sort(() => 0.5 - Math.random());
        console.log("updated colors in if: "+updatedColors);
      this.setState({
        iconsList: updatedIconsList,
        iconColors: updatedColors,
        score: 0,
        chosen: [],
        active: "modal is-active",
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
      const updatedColors = this.state.iconColors
        .sort(() => 0.5 - Math.random());
      this.setState({
        iconsList: updatedIconsList,
        iconColors: updatedColors,
        chosen: chosenList,
        score: currentScore,
        highScore: currentHigh
      });
    }

  };

  render() {
    const { iconsList, iconColors } = this.state;
    console.log(`iconColors: ${iconColors}`);
    console.log(`iconList: ${iconsList}`);
    console.log(`iconColors at 0: ${iconColors[0]}`);

    return (
      <div className="container">

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[0]}
              color={iconColors[0]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[1]}
            color={iconColors[1]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[2]}
            color={iconColors[2]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[3]}
            color={iconColors[3]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[4]}
            color={iconColors[4]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[5]}
              color={iconColors[5]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[6]}
            color={iconColors[6]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[7]}
            color={iconColors[7]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[8]}
            color={iconColors[8]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[9]}
            color={iconColors[9]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile is-vcentered">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[10]}
              color={iconColors[10]}
              clickCheck={this.clickCheck}
            />
          </div>
          <div className="column is-6">
            <div className="is-size-5-mobile is-size-4-tablet is-size-2-desktop has-text-centered">Click an icon, don't repeat!</div>
          </div>

          <ButtonDiv 
            icon={iconsList[11]}
            color={iconColors[11]}
            clickCheck={this.clickCheck}
          />
        </div>

          <div className="columns is-vcentered is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[12]}
              color={iconColors[12]}
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
            color={iconColors[13]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[14]}
              color={iconColors[14]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[15]}
            color={iconColors[15]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[16]}
            color={iconColors[16]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[17]}
            color={iconColors[17]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[18]}
            color={iconColors[18]}
            clickCheck={this.clickCheck}
          />
        </div>

        <div className="columns is-mobile">
          <div className="column is-2 is-offset-1">
            <ButtonIcon 
              icon={iconsList[19]}
              color={iconColors[19]}
              clickCheck={this.clickCheck}
            />
          </div>
          <ButtonDiv 
            icon={iconsList[20]}
            color={iconColors[20]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[21]}
            color={iconColors[21]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[22]}
            color={iconColors[22]}
            clickCheck={this.clickCheck}
          />
          <ButtonDiv 
            icon={iconsList[23]}
            color={iconColors[23]}
            clickCheck={this.clickCheck}
          />
        </div>
        <Modal
          active={this.state.active}
          close={this.close}
        />
      </div>
    );
  }
}

export default App;
