/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright
  - social links
*/

/* ------------------------------------ */
// Navbar menu
/* ------------------------------------ */
export const menuItems = [
  {
    label: 'Feature',
    path: '#feature',
    offset: '81',
  },
  {
    label: 'Our Branch',
    path: '#branch',
    offset: '100',
  },
  {
    label: 'How We Works',
    path: '#work',
    offset: '81',
  },
  {
    label: 'Our Milestone',
    path: '#milestone',
    offset: '81',
  },
  {
    label: 'Donate Us',
    path: '#donate',
    offset: '81',
  },
  {
    label: 'Fundraisers',
    path: '#fundraisers',
    offset: '81',
  },
  {
    label: 'Our Blog',
    path: '#blog',
    offset: '81',
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import bannerSlide1 from 'common/assets/image/charity/banner/slide1.png';
import bannerSlide2 from 'common/assets/image/charity/banner/slide2.png';
import bannerSlide3 from 'common/assets/image/charity/banner/slide3.png';
import bannerSlide4 from 'common/assets/image/charity/banner/slide4.jpg';

export const bannerSlides = [
  {
    id: 1,
    thumb_url: bannerSlide1,
  },
  {
    id: 2,
    thumb_url: bannerSlide2,
  },
  {
    id: 3,
    thumb_url: bannerSlide3,
  },
  {
    id: 4,
    thumb_url: bannerSlide4,
  },
];

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/charity/feature/1.svg';
import featureIcon2 from 'common/assets/image/charity/feature/2.svg';
import featureIcon3 from 'common/assets/image/charity/feature/3.svg';
import featureIcon4 from 'common/assets/image/charity/feature/4.svg';
import featureIcon5 from 'common/assets/image/charity/feature/5.svg';
import featureIcon6 from 'common/assets/image/charity/feature/6.svg';

export const featureData = {
  title: 'They Care, Do You?',
  slogan: 'Here is how you can get involved and make a change.',
  features: [
    {
      id: 1,
      icon: featureIcon1,
      title: 'Sponsor A Water',
      description:
        'If you want to change the world, one wish at a time, help kids',
    },
    {
      id: 2,
      icon: featureIcon2,
      title: 'Pledge For A Cause',
      description: 'If you want to change the world, one wish at a time.',
    },
    {
      id: 3,
      icon: featureIcon3,
      title: 'Buy a Coffee',
      description: 'If you want to change the world, one wish at a time.',
    },
    {
      id: 4,
      icon: featureIcon4,
      title: 'Volunteer With Us',
      description:
        'If you want to change the world, one wish at a time, help kids',
    },
    {
      id: 5,
      icon: featureIcon5,
      title: 'Partner With Us',
      description: 'If you want to change the world, one wish at.',
    },
    {
      id: 6,
      icon: featureIcon6,
      title: 'Help us for Educational ',
      description: 'If you want to change the world, one wish at a time.',
    },
  ],
};

/* ------------------------------------ */
// Branch section data
/* ------------------------------------ */
import thumbImage from 'common/assets/image/charity/branch/image.png';
import thumbImage1 from 'common/assets/image/charity/branch/image1.png';
import thumbImage2 from 'common/assets/image/charity/branch/image2.png';
import thumbImage3 from 'common/assets/image/charity/branch/image3.png';
import thumbImage4 from 'common/assets/image/charity/branch/image4.png';
import thumbImage5 from 'common/assets/image/charity/branch/image5.png';

export const branchData = [
  {
    id: 1,
    menuItem: 'Afganistan',
    image: thumbImage1,
    slogan: 'WITH YOUR LOVE',
    title: `We’ve funded <strong>12,925</strong>
    water projects for
    <strong>5.2 million</strong> people
    around the world.`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 2,
    menuItem: 'ukraine',
    image: thumbImage2,
    slogan: 'WITH YOUR CARE',
    title: `We’ve funded <strong>19,571</strong>
    water projects for
    <strong>6.7 million</strong> people
    around the world.`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 3,
    menuItem: 'Africa',
    image: thumbImage,
    slogan: 'WITH YOUR HELP',
    title: `We’ve funded <strong>29,725</strong>
    water projects for
    <strong>8.4 million</strong> people
    around the world.`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 4,
    menuItem: 'India',
    image: thumbImage3,
    slogan: 'WITH YOUR LOVE',
    title: `We’ve funded <strong>10,792</strong>
    water projects for
    <strong>4.9 million</strong> people
    around the world.`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 5,
    menuItem: 'South Sudan',
    image: thumbImage4,
    slogan: 'WITH YOUR CARE',
    title: `We’ve funded <strong>10,071</strong>
    water projects for
    <strong>3.7 million</strong> people
    around the world.`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 6,
    menuItem: 'Bhutan',
    image: thumbImage5,
    slogan: 'WITH YOUR HELP',
    title: `We’ve funded <strong>19,792</strong>
    water projects for
    <strong>7.9 million</strong> people
    around the world.`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
];

/* ------------------------------------ */
// Work feature data
/* ------------------------------------ */
import logo1 from 'common/assets/image/charity/logo1.png';
import logo2 from 'common/assets/image/charity/logo2.png';
import logo3 from 'common/assets/image/charity/logo3.png';
import logo4 from 'common/assets/image/charity/logo4.png';
import logo5 from 'common/assets/image/charity/logo5.png';
import logo6 from 'common/assets/image/charity/logo6.png';
import logo7 from 'common/assets/image/charity/logo7.png';
import logo8 from 'common/assets/image/charity/logo8.png';
import logo9 from 'common/assets/image/charity/logo9.png';

export const competitors = {
  title: 'How We Works',
  slogan:
    'Water is a non-profit organization bringing clean and safe drinking water to people in developing countries',
  features: [
    {
      id: 1,
      icon: logo4,
      title: 'Hassle-Free Contracts',
      path:"https://clodura.ai/b2b-data-lists/",
      description:
        'Transparent billing, so you only think about your growth.',
    },
    {
      id: 2,
      icon: logo5,
      title: 'Powerful Technographics',
      path: 'https://clodura.ai/b2b-data-lists/',
      description:
        'Better technographic data to keep you ahead of the game.',
    },
    {
      id: 3,
      icon: logo6,
      title: 'Accurate B2B Data',
      path: "https://clodura.ai/b2b-data-lists/",
      description:
        '180M+ contacts, 50M+ companies, and 19M+ direct-dials',
    },
    {
      id: 4,
      icon: logo7,
      title: 'Practical Pricing',
      path: "https://clodura.ai/b2b-data-lists/",
      description:
        'Get more ROI for your bucks with flexible pricing plans.',
    },
    {
      id: 5,
      icon: logo8,
      title: 'Exceptional Support',
      path: "https://clodura.ai/b2b-data-lists/",
      description:
        'Dedicated customer success manager for your support.',
    },
    {
      id: 6,
      icon: logo9,
      title: 'Insta Reveal',
      path: "https://clodura.ai/b2b-data-lists/",
      description:
        'Unlock contacts and direct dials, even outside our database.',
    },
  ],
};

export const workData = {
  title: 'How We Works',
  slogan:
    'Water is a non-profit organization bringing clean and safe drinking water to people in developing countries',
  features: [
    {
      id: 1,
      icon: logo1,
      title: 'Integrated B2B Sales Data Platform',
      path:"https://clodura.ai/b2b-data-lists/",
      description:
        'Clodura is the integrated B2B sales data platform that helps you generate qualified sales leads, increase b2b lead generation and take care of everything from data to meetings.',
    },
    {
      id: 2,
      icon: logo2,
      title: 'Reach Out With Full Confidence',
      path: 'https://clodura.ai/b2b-data-lists/',
      description:
        'Clodura’s company and contact data is verified using proprietary ZeroBounce technology to deliver 95% Accuracy on emails and direct-dial phone numbers.',
    },
    {
      id: 3,
      icon: logo3,
      title: 'Actionable Sales Intelligence',
      path: "https://clodura.ai/ai-powered-sales-prospecting/",
      description:
        'Clodura’s real-time sales intelligence triggers propels you miles ahead of your competitors. Identify your sales opportunities in advance to stay ahead in the game.',
    },
  ],
};

/* ------------------------------------ */
// Milestone block data
/* ------------------------------------ */
export const milestoneData = {
  title: 'OUR FIRST MILESTONE',
  amount: '$4M',
  text: 'RAISED TO DATE',
  counterItems: [
    {
      id: 1,
      amount: '154',
      title: 'Successful Project',
    },
    {
      id: 2,
      amount: '1534',
      title: 'People Impacted',
    },
    {
      id: 3,
      amount: '71',
      title: 'Supported Country',
    },
    {
      id: 4,
      amount: '15k',
      title: 'Money Donated',
    },
  ],
};

/* ------------------------------------ */
// Humanity block data
/* ------------------------------------ */
import humanityGlob from 'common/assets/image/charity/humanity-glob.png';

export const humanityData = {
  image: humanityGlob,
  slogan: 'ONLINE SOCIAL FUNDRAISING',
  title: 'Manual Process: Daunting Challenge of Time and Accuracy',
  text1:
    "Generating leads through the age-old manual process? We know it takes time to create a precise and qualified list of leads.",
  text2:
    "Make your sales team smarter, and help them generate highly accurate, relevant and qualified leads in no time with Clodura's AI powered, next-gen automated lead gen platform.",
  lists: [
    {
      id: 1,
      text: 'Let them drink pure',
    },
    {
      id: 2,
      text: 'Ensure them medicare',
    },
    {
      id: 3,
      text: 'create opportunity of education',
    },
  ],
};

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */
import happyKids from 'common/assets/image/charity/promotion.svg';

export const promotionData = {
  slogan: 'GET YOUR COMMUNITY ON BOARD',
  title: 'Multiple Tool Usage: Intimidating Augmented Cost of Lead Acquisition',
  text1:
    'Using various tools at different lead generation stages often increases the chance of losing quality leads owing to disjointed integration. Multiple tools also add to the net cost of lead acquisition.',
  text2:
    'Make your sales team more efficient with the power of Intelligence, Data and Outreach, all on one single platform. Experience Clodura.AI and improve your ROI on lead acquisition. ',
  lists: [
    {
      id: 1,
      text: 'Let them drink pure',
    },
    {
      id: 2,
      text: 'Ensure them medicare',
    },
    {
      id: 3,
      text: 'create opportunity of education',
    },
  ],
  image: happyKids,
};

/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: 'One Time',
    value: 'oneTime',
    text: 'One Time donation given',
  },
  {
    id: 2,
    title: 'Ongoing',
    value: 'ongoing',
    text: 'Everymonth donation given',
  },
];

export const currencyOptions = [
  {
    id: 1,
    value: 'usd',
    title: '$ USD',
  },
  {
    id: 2,
    value: 'gbp',
    title: '£ GBP',
  },
  {
    id: 3,
    value: 'cny',
    title: '¥ CNY',
  },
];

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */
import thumb1 from 'common/assets/image/charity/blog/thumb-1.png';
import thumb2 from 'common/assets/image/charity/blog/thumb-2.png';

export const posts = [
  {
    id: 1,
    title: 'Uganda Embraces South Sudanese Refugees, For Now',
    excerpt:
      '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
    thumbUrl: thumb1,
    btnText: 'Learn More ',
    btnUrl: '#1',
  },
  {
    id: 2,
    title: 'BRITs Week 2019 together with O2 is here',
    excerpt:
      '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
    thumbUrl: thumb2,
    btnText: 'Learn More ',
    btnUrl: '#1',
  },
];

/* ------------------------------------ */
// Client block data
/* ------------------------------------ */
import windows from 'common/assets/image/charity/clients/1.png';
import airbnb from 'common/assets/image/charity/clients/2.png';
import adidas from 'common/assets/image/charity/clients/3.png';
import ibm from 'common/assets/image/charity/clients/4.png';
import amazon from 'common/assets/image/charity/clients/5.png';
import google from 'common/assets/image/charity/clients/6.png';

export const clients = [
  {
    id: 1,
    logo: windows,
    name: 'windows',
    link: '#1',
  },
  {
    id: 2,
    logo: airbnb,
    name: 'airbnb',
    link: '#2',
  },
  {
    id: 3,
    logo: adidas,
    name: 'adidas',
    link: '#3',
  },
  {
    id: 4,
    logo: ibm,
    name: 'ibm',
    link: '#4',
  },
  {
    id: 5,
    logo: amazon,
    name: 'amazon',
    link: '#5',
  },
  {
    id: 6,
    logo: google,
    name: 'google',
    link: '#6',
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const menuWidgets = [
  {
    id: 1,
    title: 'FUNDRAISE FOR',
    menu: [
      {
        id: 1,
        text: 'Medical',
        link: '#1',
      },
      {
        id: 2,
        text: 'Emergency',
        link: '#1',
      },
      {
        id: 3,
        text: 'Memorial',
        link: '#1',
      },
      {
        id: 4,
        text: 'Education',
        link: '#1',
      },
      {
        id: 5,
        text: 'Charity',
        link: '#1',
      },
      {
        id: 6,
        text: 'Nonprofit organization',
        link: '#1',
      },
    ],
  },
  {
    id: 2,
    title: 'LEARN MORE',
    menu: [
      {
        id: 1,
        text: 'How invisiblechildren works',
        link: '#1',
      },
      {
        id: 2,
        text: 'Pricing and Fees',
        link: '#1',
      },
      {
        id: 3,
        text: 'Common questions',
        link: '#1',
      },
      {
        id: 4,
        text: 'Success stories',
        link: '#1',
      },
      {
        id: 5,
        text: 'Supported countries',
        link: '#1',
      },
    ],
  },
  {
    id: 3,
    title: 'RESOURCES',
    menu: [
      {
        id: 1,
        text: 'Help center',
        link: '#1',
      },
      {
        id: 2,
        text: 'Blog',
        link: '#1',
      },
      {
        id: 3,
        text: 'GoFundMe Stories',
        link: '#1',
      },
      {
        id: 4,
        text: 'Press center',
        link: '#1',
      },
      {
        id: 5,
        text: 'Careers',
        link: '#1',
      },
      {
        id: 6,
        text: 'About',
        link: '#1',
      },
    ],
  },
];

export const copyright = [
  {
    id: 1,
    text: 'Privacy Policy',
    link: '1#',
  },
  {
    id: 2,
    text: 'Terms and Conditions',
    link: '1#',
  },
];

import { Icon } from 'react-icons-kit';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';

export const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={linkedin} />,
    name: 'linkedin',
    link: '1#',
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: 'facebook',
    link: '2#',
  },
  {
    id: 3,
    icon: <Icon icon={twitter} />,
    name: 'twitter',
    link: '3#',
  },
  {
    id: 4,
    icon: <Icon icon={github} />,
    name: 'github',
    link: '4#',
  },
];
