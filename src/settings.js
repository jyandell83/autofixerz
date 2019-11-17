export const types = {
    changeChosenWork: 'changeWork',
};

export const initialState = {
    chosenWork: 'Oil Change',
}

export const reducer = (state = initialState, action) =>  {
    switch (action.type){
        case types.changeChosenWork: 
            return {
                ...state,
                chosenWork: action.payload
            };
        default:
            return state
    }
    
}

