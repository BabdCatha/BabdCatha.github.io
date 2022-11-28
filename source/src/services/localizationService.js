import en from '../i18n/en';
import fr from '../i18n/fr';

const languages = {
  en,
  fr,
};

window.i18nData = languages.en;

window.i18n = (key) => window.i18nData[key];

window.changeLanguage = (lang) => {
  window.i18nData = languages[lang];
  window.mainComponent.forceUpdate();
};
