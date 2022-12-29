import { ReactNode } from 'react';
import { CSSProp } from 'styled-components';

export type ButtonSizeType = 'none' | 'small' | 'medium' | 'large';
export type ButtonTheme = 'solid' | 'secondary';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'blue' | 'gray' | 'black';
  disabled?: boolean;
  cssStyle?: CSSProp;
  children?: ReactNode;
}

export type BaseButtonStyleType = Pick<BaseButtonProps, 'size' | 'cssStyle' | 'variant'>;
