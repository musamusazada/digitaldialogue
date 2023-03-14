import NextLink from 'next/link';
import styled from '@emotion/styled';
import { Link, NextUITheme, theme } from '@nextui-org/react';

import DateAndCategoryLink from '../DateAndCategoryLink';

interface Props {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category?: string;
  theme: typeof theme;
  imageSrc: string;
}

function PostCard({ slug, title, subtitle, date, category, theme, imageSrc }: Props) {
  return (
    <Article>
      <div>
        <h3>
          <NextLink href={`/${slug}`} passHref>
            <Link underline css={{ color: theme.colors.text.value }}>
              {title}
            </Link>
          </NextLink>
        </h3>
        <Small theme={theme}>
          <DateAndCategoryLink date={date} category={category} />
        </Small>
        {subtitle && <P>{subtitle}</P>}
      </div>
      <CoverImage src={imageSrc} alt="Cover Photo for Article" />
    </Article>
  );
}

export default PostCard;

const Article = styled.article`
  width: 100%;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
`;

const Small = styled.small<{ theme: NextUITheme | undefined }>`
  color: ${({ theme }) => theme.colors.accents6.value};
`;

const P = styled.p`
  width: 100%;
  margin: 0;
`;

const CoverImage = styled.img`
  height: 250px;
  border-radius: 1rem;
  object-fit: cover;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: blur(2px);
  }
`;
