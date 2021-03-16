const INITIAL_STATE = {mood: "´∵｀"};

const moodReducer = (state= INITIAL_STATE, action) => {
    switch (action.type){
        case "HAPPY":
            return { ...state, mood: state.mood = '◕‿◕'}
        case "SAD":
            return { ...state, mood: state.mood = '⊙︿⊙'}
        case "ANGRY":
            return { ...state, mood: state.mood = 'ಠ▃ಠ'}
        case "CONFUSED":
            return { ...state, mood: state.mood = '@_@'}
        case "RESET":
            return { ...state, mood: state.mood = "´∵｀"}
        default:
            return state;
    }
   
}

const store = Redux.createStore(moodReducer);
store.dispatch({type: 'LOG_STATE'})

// store.getState();