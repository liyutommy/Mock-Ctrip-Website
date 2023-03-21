import i18n from "i18next";
import { CHANGE_LANUAGE, ADD_LANGUAGE, LanguageActionTypes } from "./languageActions";

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

const reducer = (state = defaultState, action: LanguageActionTypes) => {
  console.log(state, action);
  switch (action.type) {
    case CHANGE_LANUAGE:
      i18n.changeLanguage(action.payload); // 处理不标准，有副作用
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
