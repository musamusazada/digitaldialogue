import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import CoverImage from '../../assets/cover.jpg';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import { MainHeader } from '../components/Header';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import useScrollRestoration from '../hooks/useScrollRestoration';
import { getAllPosts } from '../libs/api';
interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  const { theme } = useTheme();
  useScrollRestoration();

  const {
    setTarget,
    elements: posts,
    isEnded,
  } = useInfiniteScroll<PostType>({ fullElements: allPosts, offset: 12, rootMargin: '100px' });

  return (
    <>
      <SEO />
      <MainHeader />
      <CoverPhoto
        imgSrc={CoverImage}
        text='Avropa İttifaqının ‘Stabillik və Sülhə Yardım’ (IcSP) aləti tərəfindən maliyyələşdirilən “Bacarıqların Artırılması və Vətəndaşların İştirakı ilə Sülh Quruculuğu: Mərhələ 2” (PeaCE-2) proqramı çərçivəsində keçirilən "Yeniyetmələr üçün Rəqəmsal kommunikasiya" layihəsinin səhifəsinə xoş gəlmisiniz!'
      />
      <main>
        <PostsWrapper>
          {posts.map(({ slug, title, date, category, subtitle, imageSrc }) => (
            <PostCard
              key={slug}
              slug={slug}
              title={title}
              subtitle={subtitle}
              date={date}
              category={category}
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

export default Blog;

const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
  margin-top: 10rem;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'category', 'subtitle', 'imageSrc']);

  return {
    props: {
      allPosts,
    },
  };
}
