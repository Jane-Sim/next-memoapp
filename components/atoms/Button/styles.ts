import styled from 'styled-components';
import type { BaseButtonStyleType } from './types';

export const StyledButton = styled.button<BaseButtonStyleType>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 1em;
  border: 1px solid rgb(33, 35, 34);
  background-color: rgb(255, 255, 255);

  color: ${(p) => p.color || `rgb(33, 35, 34)`};

  padding: ${(props) => {
    const { size } = props;
    switch (size) {
      case 'small':
        return '6px 16px';
      case 'medium':
        return '8px 18px';
      case 'large':
        return '14px 26px';
      default:
        return '6px 0';
    }
  }};

  ${(props) => props.cssStyle}
`;
