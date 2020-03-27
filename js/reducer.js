// add code snippets from README
let state

const reducer = (state = {count: 0},action) => {
    switch(action.type){
        case("INCREASE_COUNT"):
            return {count: state.count + 1}
        default:
            return state
    } 
}

const dispatch = action => {
    state = reducer(state,action)
    render()
}

const render = () => {
  document.getElementById('container');
  container.textContent = state.count;
}


// reducer({count: 0}, {type: 'INCREASE_COUNT'});

let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})