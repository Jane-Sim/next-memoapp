import styled, { css } from 'styled-components';
import { ChevronsLeft, Menu as MenuIcon } from 'lucide-react';

interface StyledProps {
  isResetting?: boolean;
  isCollapsed?: boolean;
  isMobile?: boolean;
}

export const Aside = styled.aside<StyledProps>`
  ${(props) => css`
    position: relative;
    display: inline-block;
    height: 100%;
    background-color: lightgray;
    overflow-y: auto;
    position: relative;
    display: flex;
    width: 20rem;
    flex-direction: column;
    z-index: 99999;

    /* isResetting이 true일 때의 스타일 */
    ${props.isResetting &&
    css`
      transition: all ease-in-out 300ms;
    `}

    /* isMobile이 true일 때의 스타일 */
    ${props.isMobile &&
    css`
      width: 0;
    `}
  `}
`;

export const DocumentWrap = styled.div`
  margin-top: 1rem; // SCSS syntax for margin-top: 1rem;
  /* Add other styles here */
`;

export const HiddenOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0.5rem;
  background-color: rgba(59, 130, 246, 0.1); /* Adjust color based on your design */
  opacity: 0;
  cursor: ew-resize;
  transition: opacity 0.3s ease-in-out;

  ${Aside}:hover & {
    opacity: 1;
    /* Additional hover styles for the resize handle go here */
  }
`;

export const LeftWrapButton = styled.div<StyledProps>`
  ${(props) => css`
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    color: #333; /* 예시: 아이콘 색상을 지정 */
    text-align: center;
    line-height: 1.5rem;
    border-radius: 0.25rem; /* Tailwind의 rounded-sm에 해당하는 값 */
    cursor: pointer;
    opacity: 0;

    transition:
      opacity 0.3s ease,
      background-color 0.3s ease;

    &:hover {
      background-color: #e2e8f0;
    }

    ${Aside}:hover & {
      opacity: 1;
    }

    ${props.isMobile &&
    css`
      opacity: 1;
    `}
  `}
`;

export const LeftIcon = styled(ChevronsLeft)`
  /* 여기에 원하는 스타일을 추가하세요 */
  height: 1.5rem;
  width: 1.5rem;
  color: #333; /* 예시: 아이콘 색상을 지정 */
`;

export const Navbar = styled.div<StyledProps>`
  ${(props) => css`
    /* 기본 스타일 */
    position: absolute;
    top: 0;
    z-index: 99999;
    left: 15rem;
    width: calc(100% - 60rem);

    /* isResetting이 true일 때의 스타일 */
    ${props.isResetting &&
    css`
      transition: all ease-in-out 300ms;
    `}

    /* isMobile이 true일 때의 스타일 */
    ${props.isMobile &&
    css`
      left: 0;
      width: 100%;
    `}
  `}
`;

export const Nav = styled.nav`
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  width: 100%;
`;

export const NavbarMenuIcon = styled(MenuIcon)`
  /* 기본 아이콘 스타일 */
  height: 1.5rem;
  width: 1.5rem;
  color: #888; /* text-muted-foreground에 해당하는 색상으로 변경하세요 */
`;
