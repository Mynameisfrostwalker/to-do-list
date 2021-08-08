import { display } from './initialpage.js';
import '../styles/main.css';
import { addEvent } from './events.js';
import { storage } from './localStorage.js'


display.create();

addEvent.windowListener();

addEvent.clickableListener();

addEvent.projectsButtonListener();

storage();