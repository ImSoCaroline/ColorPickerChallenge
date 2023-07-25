import React, { useState } from "react";
import "./index.css";
const classNames = require('classnames');

const ColorPicker = ({ colorPickerOptions }) => {

  let [selectedColor, setSelectedColor] = useState("black");

  return (
    <div>
      <div className="layout-row justify-content-center">
        <div className="card mt-75">
          <div className="canvas" data-testid="selectedColor"
            style={{ backgroundColor: selectedColor }}>
            <p className="text-center mx-auto px-5">{selectedColor}</p>
          </div>
          <div className="card-actions">
            <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
              {colorPickerOptions.map((color, index) => {
                return (
                  <div
                    className={
                      classNames({
                        'color-box': true,
                        'mx-8': true,
                        'my-15': true,
                        'selected': selectedColor === color
                      })
                    }
                    key={color}
                    style={{ backgroundColor: color }}
                    value={color}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;