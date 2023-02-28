import { GLOBALTYPES } from "../GlobalTypes";

const initialState = {
  codeID: null,
  examID: null,
};

const competitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.SET_COMPETITION_ID:
      state = { ...state, examID: action.payload };
      return state;

    case GLOBALTYPES.SET_EXAM_ID:
      state = { ...state, codeID: action.payload };
      return state;
    default:
      return state;
  }
};

export default competitionReducer;
