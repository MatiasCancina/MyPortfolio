export const TYPES = {
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
  SET_THEME: "SET_THEME",
};

export const changeLanguage = (language) => ({
  type: TYPES.CHANGE_LANGUAGE,
  payload: language,
});

export const setTheme = (theme) => ({
    type: TYPES.SET_THEME,
    payload: theme,
  });