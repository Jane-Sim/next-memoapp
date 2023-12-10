import { CSSObject, css } from 'styled-components';

// 클래스 값을 병합하는 유틸리티 함수
export const mergeClasses = (...classes: (string | CSSObject)[]) => css`
  ${classes.join(' ')}
`;
