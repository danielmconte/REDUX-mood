const h1 = document.querySelector('h1');
const happyBtn = document.querySelector('#happy'); 
const sadBtn = document.querySelector('#sad'); 
const angryBtn = document.querySelector('#angry'); 
const confusedBtn = document.querySelector('#confused'); 
const resetBtn = document.querySelector('#reset'); 

happyBtn.addEventListener('click', ()=>{
    store.dispatch({type: "HAPPY" });
    const state = store.getState();
    h1.innerText = state.mood;
})
sadBtn.addEventListener('click', ()=>{
    store.dispatch({type: "SAD" });
    const state = store.getState();
    h1.innerText = state.mood;
})
angryBtn.addEventListener('click', ()=>{
    store.dispatch({type: "ANGRY" });
    const state = store.getState();
    h1.innerText = state.mood;
})
confusedBtn.addEventListener('click', ()=>{
    store.dispatch({type: "CONFUSED" });
    const state = store.getState();
    h1.innerText = state.mood;
})
resetBtn.addEventListener('click', ()=>{
    store.dispatch({type: "RESET" });
    const state = store.getState();
    h1.innerText = state.mood;
})