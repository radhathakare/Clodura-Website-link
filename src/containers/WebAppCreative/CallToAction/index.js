import React, { useState } from 'react';
// import { Icon } from 'react-icons-kit';
//import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import Container from 'common/components/UI/Container';
import { Button, MenuItem } from 'react-aria-menubutton';
// import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
// import Text from 'common/components/Text';
import Section, { Content, DownloadButton, DownloadOptions } from './cta.style';
import bubble1 from 'common/assets/image/webAppCreative/cta-bubble-1.png';
import bubble2 from 'common/assets/image/webAppCreative/cta-bubble-2.png';

const menuItemWords = ['Download for MacOS', 'Download for Windows x64'];

const CallToAction = () => {
  const [downloadFor, setDownloadFor] = useState('Free Downloads');
  const handleSelection = (value, event) => {
    setDownloadFor(value);
  };
  return (
    <Section>
      <img src={bubble1} className="bubble-1" alt="bubble1" />
      <Container width="1400px">
        <Content>
          <Heading content="Get Started Now" />

          <DownloadButton onSelection={handleSelection}>
           <Button className="MyMenuButton-button"> Watch Product Demo
           </Button>
          </DownloadButton>
          
          <DownloadButton onSelection={handleSelection}>
            <Button className="MyMenuButton-button">{downloadFor}    
            </Button>
             <DownloadOptions>
              <ul>
                {menuItemWords.map((word, i) => {
                  return (
                    <li key={i}>
                      <MenuItem className="MyMenuButton-menuItem">
                        {word}
                      </MenuItem>
                    </li>
                  );
                })}
              </ul>
            </DownloadOptions> 
          </DownloadButton>

          <DownloadButton onSelection={handleSelection}>
          <Button className="MyMenuButton-button"> Talk to us
            </Button>
            </DownloadButton>
         
         
        </Content>
      </Container>
      <img src={bubble2} className="bubble-2" alt="bubble2" />
    </Section>
  );
};

export default CallToAction;
