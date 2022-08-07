# odin-eas
Etch-a-Sketch assignment from The Odin Project curriculum.

## NOTES
For some reason, gridContainer.childNodes.forEach((item) => ...) does not work as intended.  
When I console.log() it, a "text" object appears. Could that be the reason?  
Using querySelectorAll(".grid-cell") as a workaround.

## TO-DO
Add a "Help" dialog functionality.

Create links to Pompy Productions and The Odin Project in the footer.  
They can be footer anchor tags, changing font-weight on hover.  
In case of variable font, it could have a subtle animation.

Change fonts. So far everything is Arial, Helvetica, sans-serif.

Optional stuff:  
- add INVERT button, which toggles .colored for all grid cells.
- add ERASER button, which toggles erasing functionality.
- add TRANSPARENCY and COLOR modes.