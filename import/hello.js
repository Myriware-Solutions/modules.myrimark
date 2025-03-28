export const HelloModule = {
    'local': {
        'hello_world': (rb, name="") => {
            const p = document.createElement('p');
            p.innerText = "Hello World" + ((name)?", ":"") + name;
            return p;
        }
    },
    'global': {
        'Alert': (_) => { alert("Hello World"); }
    }
};
