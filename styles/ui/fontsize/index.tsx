import { css, FlattenSimpleInterpolation } from 'styled-components';

// 국문 폰트 사이즈를 기준으로 LineHeight
const lineHeightMap = new Map<number, number>([
  [30, 44],
  [28, 40],
  [24, 32],
  [20, 28],
  [18, 28],
  [15, 24],
  [14, 20],
  [13, 16],
  [13, 16],
]);

const getLineHeight = (size: number) => {
  return lineHeightMap.get(size);
};

const fontLevel = (size = 14, weight = 400): FlattenSimpleInterpolation => {
  const lineHeight = getLineHeight(size);

  return css`
    font-size: ${size}px;
    font-weight: ${weight};
    line-height: ${lineHeight}px;
  `;
};

export default fontLevel;
