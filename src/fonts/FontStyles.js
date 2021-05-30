import { createGlobalStyle } from 'styled-components';
import gorditaMedium from './GorditaMedium.otf';
import gorditaRegular from './GorditaRegular.otf';
import ABeeZeeRegular from './ABeeZeeRegular.ttf';

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'Gordita Regular';
    src: url(${gorditaRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }  
  @font-face {
    font-family: 'Gordita Medium';
    src: url(${gorditaMedium}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }  
  @font-face {
    font-family: 'ABeeZee Regular';
    src: url(${ABeeZeeRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }  
    `;

export default FontStyles;
