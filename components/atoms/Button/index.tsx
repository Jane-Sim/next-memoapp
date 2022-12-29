import React, { memo } from 'react';
import { StyledButton } from './styles';
import { BaseButtonProps } from './types';

const Button = ({
  size = 'medium',
  variant = 'contained',
  color = 'blue',
  children,
  ...props
}: BaseButtonProps) => {
  return (
    <StyledButton size={size} variant={variant} color={color} {...props}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);
