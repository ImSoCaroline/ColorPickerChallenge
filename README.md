# ColorPickerChallenge
Easy Hackerrank challenge - ColorPicker

## Create a color picker as shown below

![image](https://github.com/ImSoCaroline/ColorPickerChallenge/assets/28937984/e0a68aff-a9d1-4163-a3cf-492bdd1b3c36)

the component should have the following functionalities: the selectedColor div shows the chosen color.

Initially, the color of this div is set by the props property initialSelectedColor, a valis CSS color name e.g., "red" or "#efefef"
the color list div contains a list of colors. Clicking any color in this list changes the color of the selectedColor div.

The backgroundColor of the clicked div is the color to set as backgroundColor of the selectedColor div. The colors in this list are passed as props via the property 'colorPickerOptions' which is an array of strings, where each string is a valid CSS color name.
the following data-testid attributes are required in the component for the tests to pass

Component Attribute Title app-title selectedColor div selectedColor Color list colorPickerOptions

Please note that the colors are set by backgroundColor style specifically. Tests rely on this to pass. The component has certain classes and ids for rendering purposes. They should not be changed.
