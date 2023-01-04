import React, { Component, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import ColorPicker from './components/colorPicker/index.js';

const title = "Color Picker";

class App extends Component {
  render() {

    const colorPickerOptions = ["yellow", "green", "red", "blue", "white"];
    let initialSelectedColor = colorPickerOptions[0];
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <img alt="" src={logo} className="logo" />
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <ColorPicker colorPickerOptions={colorPickerOptions} initialSelectedColor={initialSelectedColor} />
      </div>
    );
  }
}

export default App;
