import Link from 'next/link';
import styled from '@emotion/styled';
import { config, Text, useTheme } from '@nextui-org/react';
import { KBarToggleButton, ThemeSwitch } from 'core';

import { blogName } from '../../../_config';
import EULOGO from '../../../assets/eulogo.png';

export function MainHeader() {
  const { theme } = useTheme();

  return (
    <Header>
      <H1 h1 css={{ textGradient: `45deg, ${theme.colors.text.value} -20%, ${theme.colors.primary.value} 70%` }}>
        <Link href="/">
          <LinkWrapper>
            <img src={EULOGO.src} alt="" />
            {/* <a dangerouslySetInnerHTML={{ __html: blogName }}></a> */}
          </LinkWrapper>
        </Link>
      </H1>
      <ButtonWrapper>
        <ThemeSwitch />
        <KBarToggleButton />
      </ButtonWrapper>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.875rem;
  word-break: break-word;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const H1 = styled(Text)`
  margin: 0;
  font-size: 5rem;
  @media ${config.media.xsMax} {
    font-size: 5.5rem;
    line-height: 6.5rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
    line-height: 5rem;
  }
`;

const ButtonWrapper = styled.div`
  height: 100%;
  gap: 0.5rem;
  display: flex;
  @media (max-width: 480px) {
    align-self: flex-end;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  & img {
    margin-right: 1.5rem;
    height: 150px;
    object-fit: cover;
    @media (max-width: 480px) {
      height: 100px;
    }
  }
  & a {
    line-height: 6.5rem;
    font-size: 4rem;
    word-break: break-all;
    letter-spacing: normal;
    @media (max-width: 480px) {
      font-size: 1.9rem;
      line-height: 2rem;
    }
  }
`;
