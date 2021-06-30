const initialState = {
    stories:[]
}

//Reducer
const storiesReducer = (state=initialState , {type,payload})=>{
    console.log(payload);
    switch(type){
        case "SET_STORIES" :
        return {stories : [...payload] }

        default:
        return state;
    }

};

export default storiesReducer ;

//Actions

export const setStories = (stories)=>{
    console.log(stories);
return {
    type : "SET_STORIES",
    payload :stories
}
}

export const CreateStories = (stories)=>{
    
}
