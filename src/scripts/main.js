import { display } from './initialpage.js';
import '../styles/main.css';
import { addEvent } from './events.js'


display.create();

addEvent.windowListener();

addEvent.projectsButtonListener();