import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Heading from 'common/components/Heading';
import { useStaticQuery, graphql } from 'gatsby';
import OpeningBox from './OpeningBox';

import OpeningsWrapper, { OpeningBoxContainer } from './openings.style';

import media from 'common/assets/image/saasModern/careers/careers.json'

const Openings = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCareerOpening {
        nodes {
          title
          content
          slug
          icon {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `);

  let animationContainer = useRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: media
    });
    return () => anim.destroy();
  }, []);

  return (
    <OpeningsWrapper>
      <OpeningBoxContainer>
          <div ref={animationContainer} className="anim_container"></div>
      </OpeningBoxContainer>
      <OpeningBoxContainer>
        <Heading as="h1" content="You Can Be The Next..." />
        <main>
          {data.allStrapiCareerOpening.nodes.slice(0,2).map(item =>
            <OpeningBox title={item.title} content={item.content} link={item.slug} icon={item.icon} />
          )}
        </main>
      </OpeningBoxContainer>

    </OpeningsWrapper>
  );
};

export default Openings;
