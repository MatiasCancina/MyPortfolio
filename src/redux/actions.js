export const TYPES = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
}

export const changeLanguage = (language) => ({
    type: TYPES.CHANGE_LANGUAGE,
    payload: language,
  });