export const colors = {
  blue: '#2E6DB4',
  green: '#77295B',
  poppy: '#14D315',
  red: '#AF181A',
  main: '#025199',
  mainDark: '#033A6B',
  secondary: '#f2f5fc',
  text: '#294767',
  white: '#ffffff',
  orange: '#FF461E',
  gray: '#BEBEBE',
  black: '#565656',
  danger: '#f0104c',
  titleColor: '#464255',
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 5,
  },
};

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:7007/'
    : 'https://api.arena.com';

export const styleConfigs = {
  page: {
    paddingVertical: 28,
    paddingHorizontal: 28,
  },
};
