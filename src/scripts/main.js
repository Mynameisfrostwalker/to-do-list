import { display } from './initialpage.js';
import '../styles/main.css';
import { addEvent } from './events.js';
import { storage } from './localStorage.js'
import { signIn } from './signInPage';

signIn();

addEvent.googleButtonListener();

addEvent.localStorageButtonListener();