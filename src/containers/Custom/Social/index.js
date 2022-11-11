import React from 'react';
import { AiFillLinkedin,AiFillFacebook,AiFillTwitterSquare,AiFillMail} from 'react-icons/ai';
import { SocialWrapper } from './social.style';




class Socialicon extends React.Component {
  render() {
    return (
      <SocialWrapper>
        <div className='Iconbar'>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.searchenginejournal.com%2Fadd-social-media-buttons-to-website%2F285637%2F%3Futm_source%3Dlinkedin%26utm_medium%3Dsocial%26utm_campaign%3Dshare-back-traffic"><AiFillLinkedin /></a>
          <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569891%7Cb%7Cfacebook%20signin%7C&placement=&creative=589460569891&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D9062117%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw4c-ZBhAEEiwAZ105RWIQ04gc482rbDtUh_RJBKur-1HOfde5Ya-j6sU5l4RTY8z-3bgQtRoCx1UQAvD_BwE"><AiFillFacebook /></a>
          <a href="https://twitter.com/share?url=https%3A%2F%2Fwww.searchenginejournal.com%2Fadd-social-media-buttons-to-website%2F285637%2F%3Futm_source%3Dtwitter%26utm_medium%3Dsocial%26utm_campaign%3Dshare-back-traffic&text=Of+course+you+want+people+to+share+your+content%21+But+where+should+you+put+social+sharing+buttons+for+the+greatest+engagement%3F&via=kristileilani%2C+%40sejournal"><AiFillTwitterSquare /></a>
          <a href="mailto: 3dealityprints@gmail.com"><AiFillMail /></a>
          
        </div>
      </SocialWrapper>
        
    );
  }
}

;





export default Socialicon;
