import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { MainHeader } from '../../components/Header';
import PostCard from '../../components/PostCard';
import SEO from '../../components/SEO';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import { getAllCategories, getAllPostsByCategory } from '../../libs/api';

interface Props {
  category: string;
  allPosts: PostType[];
}

function EachCategory({ category, allPosts }: Props) {
  const { theme } = useTheme();
  useScrollRestoration();

  const { setTarget, elements: posts, isEnded } = useInfiniteScroll<PostType>({ offset: 12, fullElements: allPosts });

  return (
    <>
      <SEO title={category} />
      <MainHeader />
      <H2>
        Posts in <strong>{category}</strong> category
      </H2>
      <main>
        <PostsWrapper>
          {posts.map(({ slug, title, subtitle, date, imageSrc }) => (
            <PostCard
              key={slug}
              slug={slug}
              title={title}
              subtitle={subtitle}
              date={date}
              theme={theme}
              imageSrc={imageSrc}
            />
          ))}
        </PostsWrapper>

        {!isEnded && <div ref={setTarget}></div>}
      </main>
    </>
  );
}

export default EachCategory;
const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
  margin-top: 2rem;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
  }
`;
const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 1.5rem;
`;

interface Paths {
  params: {
    category: string;
  };
}

export async function getStaticPaths() {
  const categories = getAllCategories();

  const paths: Paths[] = [];
  categories.map(category => paths.push({ params: { category } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const allCategories = getAllCategories();
  if (!allCategories.includes(category)) {
    return { notFound: true };
  }
  const postsInCategory = getAllPostsByCategory(category, ['slug', 'title', 'subtitle', 'date', 'imageSrc']);

  return { props: { category, allPosts: postsInCategory } };
}
