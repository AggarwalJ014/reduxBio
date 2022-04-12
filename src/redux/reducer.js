const initialState={
  valueName: '',
  valueEmail: '',
  valueGender: '',
  valueAge: ''
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "NAME_ADDED":
      return {
        ...state,
        valueName: action.text,
      };
      case "EMAIL_ADDED":
      return {
        ...state,
        valueEmail: action.text,
      };
      case "GENDER_ADDED":
      return {
        ...state,
        valueGender: action.text,
      };
      case "AGE_ADDED":
      return {
        ...state,
        valueAge: action.text,
      };
      case "SUBMITTED":
        return {
          ...state
        };
   default:
        return state;
  }
}
