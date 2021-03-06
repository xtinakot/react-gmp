import * as React from 'react';
import { PureComponent, ReactNode } from 'react';

import { styled } from '../../theme';
import Logo from './Logo';

const HeaderBlock = styled.header`
  padding: 3rem 6rem;
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.darkest};
`;

class Header extends PureComponent {
  render(): ReactNode {
    return (
      <HeaderBlock>
        <Logo></Logo>
        {this.props.children}
      </HeaderBlock>
    );
  }
}

export default Header;
