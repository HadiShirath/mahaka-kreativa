import { BAHASA } from "../../action/languageAction";

const initialState = {
  bahasa: "false",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BAHASA:
      return {
        ...state,
        bahasa: action.payload.bahasa,
      };
    default:
      return state;
  }
}
