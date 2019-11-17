export const types = {
    changeChosenWork: 'changeWork',
    changeLocation: 'changeLocation',
};

export const initialState = {
    chosenWork: 'Oil Change',
    location: 'East LA',
}

export const reducer = (state = initialState, action) =>  {
    switch (action.type){
        case types.changeChosenWork: 
            return {
                ...state,
                chosenWork: action.payload
            };
        case types.changeLocation: 
            return {
                ...state,
                location: action.payload
            };
        default:
            return state
    }
    
}

