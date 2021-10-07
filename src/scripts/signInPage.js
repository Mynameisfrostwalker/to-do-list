
let globalStorage = {
    value: null,
    set(newValue) {
        this.value = newValue;
    }
};

const signIn = () => {
    const root =  document.querySelector("#container");
    const containerDiv = document.createElement("div");
    containerDiv.id = "signIn";
    const localStorageButton = document.createElement("button");
    localStorageButton.textContent = "Sign In With Local Storage";
    localStorageButton.id = "localStorageButton";
    const googleButton = document.createElement("button");
    googleButton.textContent = "Sign In With Google";
    googleButton.id = "googleButton";
    containerDiv.appendChild(localStorageButton);
    containerDiv.appendChild(googleButton);
    root.appendChild(containerDiv);
};

export { globalStorage, signIn }


