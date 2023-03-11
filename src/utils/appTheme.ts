export type ThemeAttributes = {
  type: string
  headerBackground: string
  bodyBackground: string
  cardBackground: string
  cardTextColor: string
  trackHeaderBackgroundColor: string
  trackHeaderTextColor: string
  trackFooterBackgroundColor: string
  trackFooterTextColor: string
}

export interface AppTheme {
  light: ThemeAttributes
  dark: ThemeAttributes
}

export const appTheme: AppTheme = {
  light: {
    type: 'light',
    headerBackground: '#fff',
    bodyBackground:
      'repeating-linear-gradient(-45deg, #ffb7dd1b, #ffb7dd20 2px, #ffffff1f 2px, #ffffff28 11px)',
    cardBackground: '#fff',
    cardTextColor: '#000',
    trackHeaderBackgroundColor: '#fff',
    trackHeaderTextColor: '#000',
    trackFooterBackgroundColor: '#fff',
    trackFooterTextColor: '#000',
  },
  dark: {
    type: 'dark',
    headerBackground: '#242424',
    bodyBackground:
      'repeating-linear-gradient( -45deg, #10000d, #10000d 2px, #000000 2px, #000000 10px )',
    cardBackground: '#242424',
    cardTextColor: '#fff',
    trackHeaderBackgroundColor: '#242424',
    trackHeaderTextColor: '#fff',
    trackFooterBackgroundColor: '#242424',
    trackFooterTextColor: '#fff',
  },
}
