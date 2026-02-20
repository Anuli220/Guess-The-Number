-HTML-
1. create a div with a class of "app", give it a role of application and an aria label of "matching colours game"
inside this div, you create an <h1>, giving it a heading of mathcing colours, match the colour to its name

2. create a paragraph with a class of lead, write "drag the coloured square into the matching labelled box" and score increases for each match

3. create another div and give it a class of "board" and inside this board div, you have the div class "palette", aira hidden of false and go to the next line to create an <h2>

4. create another div with a class and id of "items", this div is inside the div of "palette"

5. inside this div, create another div with a class of item and red, and also draggable = true, id of a "c-red", data color of "red", content of red and area grab = false 

repeat for item blue, item green, yellow, purple, orange

6. after the ending of "palette", create another div with a class of target and create an areahidden = false

inside this div create an h2 and write "match the names", and inside create another div with a class and id of "slots", inside this div, create another div with a class of "slot", with a dataAccept of red, id of s-red, and content of red.

7. repeat for blue, green, yellow, purple, orange

8. after the ending of "board", go to the next line and create another div with a class of footer, and inside this footer div, create a div with a class of "controls", button inside this with a class of "buttonPrimary", and id of "shuffleBtn", title of "shuffleColours" and shuffle as content

9. create another button with a class of "btnHost", id of "resetBtn" and a title of "resetGame", and content as reset

10. after this div, create another div with a class of status, and an aria label of polite, inside create a content and write "score: <span class = "score" id = "score">0</span>/<span id = "total">6</span>"

---

JS:

Start by opening a <script> tag.

Write a comment at the top saying “Simple, robust drag and drop matching logic”.

Create a constant for the container holding all draggable items.

Create another constant for the container that holds all the drop slots.

Select all elements with the class item and store them in a constant.

Select all elements with the class slot and store them in another constant.

Create two constants for the reset and shuffle buttons using their IDs.

Create two constants for the score and total display using their IDs.

Make a variable named score and set it to zero.

Create a constant total equal to the number of slots.

Display the total value inside the total element.

Write a function for when dragging starts.
  Inside it, set data transfer with the element’s ID, allow move effect, add a “dragging” class, and set an ARIA attribute to true.

Write another function for when dragging ends.
  Remove the “dragging” class and set the ARIA attribute back to false.

Loop through all items and add two event listeners — one for drag start and one for drag end.

Loop through all slots.
  Inside that loop, do the following:
  – Add a “dragover” listener to allow dropping and add a “hover” effect.
  – Add a “dragleave” listener to remove the hover effect.
  – Add a “drop” listener for when an item is dropped on a slot.

Inside the drop logic:
  – Prevent the default behavior.
  – Remove the hover class.
  – Get the ID of the dragged element.
  – If no ID, stop.
  – Get the actual element using the ID.
  – If not found, stop.
  – If the slot already contains an item, flash it red or shake it briefly to indicate an error and stop.
  – Otherwise, get the color data of the dragged item and the accepted color of the slot.
  – If the colors match:
   • Add a “correct” class to the slot.
   • Move the item inside the slot.
   • Make it undraggable.
   • Change its cursor to default.
   • Increase the score and update the score display.
   • Add an ARIA label that says it’s matched.
   • If the score equals the total, show a small congratulatory alert.
  – If the colors don’t match:
   • Add a “wrong” class briefly for visual feedback.
   • Make the dragged item shake slightly.

Write a function named “resetGame”.
  Inside it:
  – Move all items back into their original container.
  – Make all items draggable again and reset their cursors.
  – Remove all “correct” and “wrong” styles from slots.
  – Clear any ARIA labels.
  – Reset the score to zero and update the score display.

Write another function named “shuffleItems”.
  Inside it:
  – Convert all children of the item container into an array.
  – Randomly shuffle the array using a loop.
  – Append each shuffled element back into the container.

Add event listeners to the reset and shuffle buttons so that they call their respective functions when clicked.

Call the shuffle function once at the start to randomize the order.

For keyboard accessibility:
  – Create a variable to remember which item is currently “picked up”.
  – Add a keydown event listener on the entire document.
  – If the Escape key is pressed, clear the selected item.
  – If Enter or Space is pressed while an item is focused, mark it as selected (picked up).
  – If Enter or Space is pressed while a slot is focused and an item is selected:
   • Check if the slot already has an item; if so, show a wrong indication.
   • If the color matches, place the item into the slot, make it undraggable, mark it correct, increase score, and check for completion.
   • If the color doesn’t match, show the wrong effect.
   • In all cases, remove the dragging highlight and clear the picked item variable.