export const loadState = () => {
    try {
        let serializedState = localStorage.getItem("leadr:state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem("leadr:state", serializedState);

    }
    catch (err) {
    }
}