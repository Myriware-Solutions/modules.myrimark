export const LocalCommands = {
    'world': (rb, name="") => {
        const p = document.createElement('p');
        p.innerText = "Hello World" + ((name)?", ":"") + name;
        return p;
    }
}

export const GlobalCommands = {
    'Alert': (_) => { alert("Hello World"); }
}