import styled from 'styled-components';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

export const Wrapper = styled.div`
  /* width: 100%; */
  height: 79px;
  background: ${(props) => props.theme.colors.branco};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReferenceWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PageReference = styled.p`
  cursor: pointer;
  color: ${(props) => props.theme.colors.auxiliar};
  font-family: 'Gordita Regular';
  font-size: 16px;
  line-height: 22.8px;
  margin-right: 17.1px;
`;

export const ArrowRightIcon = styled(BsChevronRight)`
  color: ${(props) => props.theme.colors.auxiliar};
  font-size: 11px;
  margin-right: 16.33px;
`;

export const CartReference = styled.p`
  cursor: pointer;
  color: ${(props) => props.theme.colors.link};
  font-family: 'Gordita Medium';
  font-size: 16px;
  line-height: 22.8px;
  margin-right: 55px;
`;

export const ArrowLeftIcon = styled(BsChevronLeft)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.auxiliar};
  font-size: 28px;
  margin-left: 62px;
`;
