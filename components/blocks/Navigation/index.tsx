import { ElementRef, useRef, useState } from 'react';
import {
  Aside,
  DocumentWrap,
  HiddenOverlay,
  LeftIcon,
  LeftWrapButton,
  Nav,
  Navbar,
  NavbarMenuIcon,
} from './styles';
import { useMediaQuery } from 'usehooks-ts';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathName = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const isResizingRef = useRef(false);

  const sidebarRef = useRef<ElementRef<'aside'>>(null);
  const navbarRef = useRef<ElementRef<'div'>>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty('left', `${newWidth}px`);
      navbarRef.current.style.setProperty('width', `calc(100% - ${newWidth}px)`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? '100%' : '240px';
      navbarRef.current.style.setProperty('width', isMobile ? '0' : 'calc(100% - 240px)');
      navbarRef.current.style.setProperty('left', isMobile ? '100%' : '240px');
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <Aside ref={sidebarRef} isResetting={isResetting} isMobile={isMobile}>
        <LeftWrapButton role="button" isMobile={isMobile}>
          <LeftIcon />
        </LeftWrapButton>
        <div>
          <p>Action items</p>
        </div>
        <DocumentWrap>
          <p>Documents</p>
        </DocumentWrap>
        <HiddenOverlay onMouseDown={handleMouseDown} onClick={resetWidth} />
      </Aside>
      <Navbar ref={navbarRef} isResetting={isResetting} isMobile={isMobile}>
        <Nav>{isCollapsed && <NavbarMenuIcon role="button" />}</Nav>
      </Navbar>
    </>
  );
};
