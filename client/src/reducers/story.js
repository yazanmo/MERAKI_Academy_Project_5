const initialState = {
    stories:[]
}

//Reducer
const storiesReducer = (state=initialState , {type,payload})=>{
    console.log(payload);
    switch(type){
        case "SET_STORIES" :
        return {stories : [...payload] }

        case "CREATE_STORY" :
        return {stories : [...state.stories , payload]}

        default:
        return state;
    }

};

export default storiesReducer ;

//Actions

export const setStories = (stories)=>{

return {
    type : "SET_STORIES",
    payload :stories
}
}

export const createStories = (story)=>{
return{
    type : "CREATE_STORY",
    payload : story
}
}
