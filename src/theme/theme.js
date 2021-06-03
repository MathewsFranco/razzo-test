const colors = {
  // refactor theme names
  auxiliar: '#8A8A8C',
  branco: '#FFFFFF',
  contornoCampo: '#E5E4E6',
  fundo: '#F7F9FC',
  fundoCards: '#F2F5FA',
  fundoApp: '#FFFFFF',
  link: '#249CF2',
  labelCampos: '#73657E',
  preto: '#282828',
  placeholder: '#D0C9D6',
  textoCampos: '##6D5D7A',
  textos: '#979797',
  validar: '#55B84B',
  simboloBotao: '#ECEBED',
};

export const theme = {
  colors: { ...colors },
  scrollBar: `
    ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.fundoApp};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.placeholder};
    border-radius: 7px;
  }`,
};
