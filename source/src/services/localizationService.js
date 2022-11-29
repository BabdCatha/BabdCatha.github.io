import en from '../i18n/en';
import fr from '../i18n/fr';
import zh from '../i18n/zh';

const languages = {
  en,
  fr,
  zh,
};

window.i18nData = languages.en;

window.i18n = (key) => {
  if (Object.hasOwnProperty.bind(window.i18nData)(key)) {
    return window.i18nData[key];
  }
  return languages.en[key];
};

window.changeLanguage = (lang) => {
  window.i18nData = languages[lang];
  window.mainComponent.forceUpdate();
};
