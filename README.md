# odin-eas
Etch-and-sketch assignment from The Odin Project curriculum.

## NOTES
For some reason, gridContainer.childNodes.forEach((item) => ...) does not work as intended.  
When I console.log() it, a "text" object appears. Could that be the reason?  
Using querySelectorAll(".grid-cell") as a workaround.

## TO-DO
Add RESET functionality, which would remove .colored from all grid cells and unfreeze.

Place the "grid creation" in an actual named function with parameters, so that you can call it in NEW CANVAS.  
The named function will check the number of cells to decide their size.  
if column>100 and row>200  
else if column>50 and row>100  
else if column>25 and row>50  
etc etc etc

Optional: add INVERT button, which toggles .colored for all grid cells.