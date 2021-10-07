import { initializeApp } from "firebase/app";
import { getFirestore, deleteField, collection, getDocs, doc, setDoc, updateDoc, deleteDoc} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { addEvent } from './events.js';
import { display } from './initialpage.js';
import { globalStorage } from './signInPage';
import { tasks } from './todo.js';
import _ from 'lodash';
import { sortTasks } from './formInputs.js';
import { renderTasks } from './todolistDisplay.js';

const firebaseConfig = {
    apiKey: "AIzaSyDIiq9QPO-5xaZ5rCyFbVPV8tlduboIrl4",
    authDomain: "to-do-list-2000.firebaseapp.com",
    projectId: "to-do-list-2000",
    storageBucket: "to-do-list-2000.appspot.com",
    messagingSenderId: "1058161618460",
    appId: "1:1058161618460:web:e7c26cb8e89c76ee68b9d9"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore()

let displayName;
let photoURL;
let userId

const googleButtonSignIn = async () => {
    globalStorage.set("google");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    const containerDiv = document.querySelector("#signIn");
    display.create();
    addEvent.windowListener();
    addEvent.clickableListener();
    addEvent.projectsButtonListener();
    containerDiv.remove()
    return {
        displayName,
        photoURL,
    }
}

const authStateObserver = (user) => {
    if(user) {
        displayName = user.displayName;
        photoURL = user.photoURL;
        userId = user.uid
    }else {
        const infoDisplay = document.querySelector("#infoDisplay");
        if(infoDisplay) {
            infoDisplay.remove();
        }
    }
}

onAuthStateChanged(getAuth(), authStateObserver)

const uploadTask = async (obj) => {
    const projectName = document.querySelector('#bodHead').children[0].textContent;

    try {
        await setDoc(doc(db, displayName, projectName), {
            [`${obj.get.Title()}`]: {
                Title: obj.get.Title(),
                Description: obj.get.Description(),
                DueDate: obj.get.DueDate(),
                Priority: obj.get.Priority(),
                Status: obj.get.Status(),
                Id: obj.get.Id(),
            },
            userID: userId,
        }, { merge: true });
    }catch(err) {
        console.log("Document could not be uploaded", err);
    }
}

const deleteTask = async (obj) => {
    const projectName = document.querySelector('#bodHead').children[0].textContent;
    try {
        await updateDoc(doc(db, displayName, projectName), {
            [`${obj.get.Title()}`]: deleteField()
        })
    }catch (err) {
        console.log("Document could not be deleted", err);
    }
}

const updateStatus = async (obj) => {
    const projectName = document.querySelector('#bodHead').children[0].textContent;
    try {
        await updateDoc(doc(db, displayName, projectName), {
            [`${obj.get.Title()}`]: {
                Title: obj.get.Title(),
                Description: obj.get.Description(),
                DueDate: obj.get.DueDate(),
                Priority: obj.get.Priority(),
                Status: obj.get.Status(),
                Id: obj.get.Id(),
            }
        })
    }catch (err) {
        console.log("Document could not be updated", err);
    }
}

const getData = async () => {
    const querySnapshot = await getDocs(collection(db, displayName))
    let newObj = {};

    querySnapshot.forEach((doc) => {
        let newarr = [];

        let keys = Object.keys(doc.data())
        for(let i = 0; i < keys.length; i++) {
            if(keys[i] !== "userID"){
                const currentObj = doc.data()[keys[i]]
                newarr.push(tasks(currentObj.Title, currentObj.Description, currentObj.DueDate, currentObj.Priority, currentObj.Status, currentObj.Id))
            }
        }

       newObj[`${doc.id}`] = newarr
    })

    console.log(newObj)

    _.assignIn(sortTasks.projectsHolder, newObj);
    renderTasks.render();
    renderTasks.renderProjects();

}

const removeProject = async (name) => {
    await deleteDoc(doc(db, displayName, name));
}

export { googleButtonSignIn, uploadTask, deleteTask, updateStatus, getData, removeProject };




