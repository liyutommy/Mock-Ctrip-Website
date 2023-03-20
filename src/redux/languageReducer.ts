export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState : LanguageState = {
  language : "zh",
  languageList: [
    {name: "中文", code: "zh"},
    {name: "English", code: "en"}
  ]
}

const reducer = (state = defaultState, action) => {
  return state;
};

export default reducer;
