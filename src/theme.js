//@ts-check
/**
 * Applciation colors, etc values..
 */
export default {
  primaryColor: '#D0021B',
  activeItemColor: '#FF151F',
  textNotValidColor: '#EF2B32',
  gradientButtonGrey: 'linear-gradient(to bottom, #FFFFFF, #EDEDED)',
  gradientButtonRed: 'linear-gradient(to bottom, #F03F46 0%, #E61B21 100%)',
  accentColor: '#F9AFB1',
  white: '#FFFFFF',
  gray: '#F8F8F8',
  blue: '#2E7FEB',
  backgroundColor: '#FFF4F4',
  borderColor: '#EBEBEB',
  lightGrey: '#EDEDED',
  pink: '#FFE1E1',
  placeholderColor: '#BBBBBB',
  red: '#B13434',
  textColor: '#ABABAB',
  textColor_1: '#666666',
  darkGrey: '#999999',
  textPrimaryColor: '#444444',
  textSecondaryColor: '#555555',
  mainLeftWidth: '210px',
  palette: {},
  paletteInverted: {},
  mixins: {},
  zIndex: {
    sidebar: 1300,
    modal: 1500,
  },
};

export const cpg = {
  palette: {
    primary: '#F03E45',
    accent: '#F03E44',
    accentHover: '#D92C32',
    accentActive: '#CA1218',
    inner: '#CF353A',
  },
  mixins: {
    headerHeight: 72,
    headerBottomOffset: 36,
    logout: {
      height: 36,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '24px',
      borderRadius: 36,
      backgroundColor: '#CF353A',
      padding: '0 16px',
    },
  },
};

export const isb = {
  palette: {
    primary: '#37354B',
    accent: '#38364C',
    accentHover: '#414A5D',
    accentActive: '#303A4E',
    inner: '#0F0E1C',
  },
  mixins: {
    headerHeight: 70,
    headerBottomOffset: 30,
    logout: {
      height: 32,
      fontSize: 13,
      lineHeight: '18px',
      borderRadius: 4,
      backgroundColor: '#0F0E1C',
      padding: '0 12px',
    },
  },
};
