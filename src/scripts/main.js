import { display } from './initialpage.js';
import '../styles/main.css';
import { addEvent } from './events.js'
import { renderTasks } from './todolistDisplay.js'

display.create();

addEvent.windowListener();