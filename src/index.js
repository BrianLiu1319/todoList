import "./style/style.css";
import {setUpPopup} from "./functions/popup.js";
import {projPopup} from "./functions/formPopup.js";

let projs = new Map();

setUpPopup();
projPopup(projs);



/*
requirements:
- need project creation
- need buttons on home
- need persistence
- fix CSS then done !

*/