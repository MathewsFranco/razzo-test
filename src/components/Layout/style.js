import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 55px 49px 35px;
  height: calc(100vh - 175px - 49px);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  ${(props) => props.theme.scrollBar}
`;
