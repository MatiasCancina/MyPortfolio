import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '@/redux/actions';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    dispatch(changeLanguage(newLanguage));
  };

  return (
    <button onClick={toggleLanguage} className='font-semibold dark:text-white'>
      {language === 'en' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageSwitcher;