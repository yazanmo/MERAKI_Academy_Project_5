const initialState = {
    data:{}
}               
//Reducer
const doctorProfile = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_DATA":
        return { data: payload };
  case "UPDATE_DATA":
    return {data:payload}
    

      default:
        return state;
    }
  };
  export default doctorProfile;


//Actions
export const setData = (data) => {
    return {
      type: "SET_DATA",
      payload:data ,
    };
  };

  export const updateData=(data)=>{
      return{
          type:"UPDATE_DATA",
          payload:data
      }
  }