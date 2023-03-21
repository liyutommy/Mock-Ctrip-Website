import i18n from "i18next";

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

const reducer = (state = defaultState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "change_language":
      i18n.changeLanguage(action.payload); // 处理不标准，有副作用
      return { ...state, language: action.payload };
    case "add_language":
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
