import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import VideoSection from '../../Agency/VideoSectionCustom';
import Container from 'common/components/UI/ContainerTwo';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
  Socials
} from './footer.style';

const Footer = () => {
  const Data = useStaticQuery(graphql`
    query {
      agencyModernJson {
        aboutUs {
          id
          title
          url
        }
        ourInformation {
          id
          url
          title
        }
        myAccount {
          id
          title
          url
        }
        social {
          id
          title
          icon {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <>
        <VideoSection />
      </>
      <Container width={"100%"} className="vidAlign-container">
        <FooterInner>
          <CopyrightInfo>
            <Image src="https://cdn2.iconfinder.com/data/icons/flags-68/48/Usa-512.png" alt="US Logo" />
            <p>
              1049 El Monte Ave Ste C #669 Mountain View, <br /> CA 94040
            </p>
            <Image src="https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png" alt="India Logo" />
            <p>
              <Link href="https://goo.gl/maps/yYjRwtzvgvcxSx65A">804, Deron Heights, Baner, Pune, Maharashtra <br /> 411045</Link>
            </p>
          </CopyrightInfo>
          {/* <FooterWidget>
            <Fade up delay={200}>
              <Nav>
                {Data.agencyModernJson.aboutUs.map((item) => (
                  <Link key={item.id} href={item.url}>
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Nav>
                {Data.agencyModernJson.ourInformation.map((item) => (
                  <Link key={item.id} href={item.url}>
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget> */}

          <FooterWidget>
            <Fade up delay={400}>
              <Nav>
                {Data.agencyModernJson.myAccount.map((item) => (
                  <Link key={item.id} href={item.url}>
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <Socials>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <Link href="mailto:support@clodura.ai">support@clodura.ai</Link>
            </div>
            <div>
              <a href="https://twitter.com/Clodura/" aria-label="twitter-icon"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.youtube.com/channel/UCozYAtSiPlYcDC85z94JTFw/" aria-label="youtube-icon"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://www.linkedin.com/company/clodura-systems/" aria-label="linkedin-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.facebook.com/Clodura/" aria-label="facebook-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
          </Socials>
        </FooterInner>
        <p className="copyright">© 2022 Clodura. All Rights Reserved. | <a href="/privacy-policy/" target="_blank">Privacy Policy</a> | <a href="/gdpr/" target="_blank">GDPR</a></p>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
