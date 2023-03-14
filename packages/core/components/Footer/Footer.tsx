import styled from '@emotion/styled';

import { authorName } from '../../constants';

export function Footer() {
  const date = new Date();

  return (
    <StyledFooter>
      <span>
        Copyright &copy; {date.getFullYear()}
        <a href="" target="_blank">
          {authorName}
        </a>
        All rights reserved.
      </span>
      <span>
        Powered By{' '}
        <a href="" target="_blank">
          @DigitalDialogue
        </a>
      </span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 1.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.75rem;
`;
