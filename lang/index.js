import ru from './ru.json';
import uz from './uz.json';
import en from './en.json';
import store from '../store';

const dictionary = {
  uz,
  ru,
  en,
};

function getCurrentLang() {
  return store.getState().auth.user.lang || 'en';
}

function t(str) {
  const lang = store.getState().auth.user.lang || 'en';
  const translation = dictionary[lang][str];
  return translation || '**' + str;
}

export {t as default, getCurrentLang};
