# Here Is My First Project In Github i Create a Simple Calculator 

```
Welcome to My Github Profile.
as I create a simple calculator from scratch using HTML, CSS, and JavaScript.
```
1) The code selects the HTML element with the ID "display" and assigns it to the variable display. This element represents the calculator's display screen.
2) It selects all the button elements on the calculator interface using querySelectorAll() and assigns them to the variable buttons.
3) Using the forEach() method, the code iterates over each button and adds a click event listener to it.
4) When a button is clicked, the code checks its ID to determine the action to be performed.
5) If the button's ID is "=", it checks if the display value is empty. If so, it temporarily displays a message indicating there's no value, and after 500 milliseconds, it clears the display.
6) If the button's ID is "ac", it clears the display by setting its value to an empty string.
7) If the button's ID is "de", it removes the last character from the display value using the slice() method with a negative index.
8) For any other button, its ID is appended to the current display value, allowing the user to input numbers or operators.
9) The eval() function is used to evaluate the mathematical expression in the display, updating the display value with the result when the "=" button is clicked.
10) Overall, this code implements the basic functionality of a calculator, capturing button clicks, performing calculations, clearing the display, and handling user input in a straightforward manner.

![image](https://github.com/ParagUnhale1998/calculator/blob/main/calculator%20image.png)
