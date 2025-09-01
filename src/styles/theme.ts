import 'styled-components';

export const colors = {
  aeroBlue: '#CAFFD8',
  nyanza: '#DBFFE4',
  bangladeshGreen: '#006954',
  green: '#00AC4F',
  black: '#000',
  davysGray: '#5C5C5C',
  denim: '#0F5FC2',
  bloodOrange: '#DA001A',
  tulip: '#FE8084',
  blackHalfTransparent: 'rgba(0, 0, 0, 0.3)',
  blackHalf: 'rgba(0, 0, 0, 0.66)',
  blackTransparent: 'rgba(0, 0, 0, 0.1)',
  darkLiver: '#4F4F4F',
  cultured: '#F8F8F8',
  white: '#fff',
  gray: '#DFDFDF',
  transparent: 'rgba(255, 255, 255, 0)',
};

export default colors;

export type ColorFamily = keyof typeof colors;
type Theme = typeof colors;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
