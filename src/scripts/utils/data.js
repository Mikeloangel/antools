import imgFigma from '../../images/fixtures/01.png';
import imgSketch from '../../images/fixtures/02-sketch.png';
import imgVsc from '../../images/fixtures/03-vsc.png';
import imgNotion from '../../images/fixtures/04-notion.png';
import imgSlack from '../../images/fixtures/05-slack.png';
import imgInvision from '../../images/fixtures/06-invision.png';

import imgTestimonial from '../../images/fixtures/testimonial-portrait.png'

/** Selectors */
export const toolsWrapperSelector = 'popular__wrapper';
export const toolsTemplateSelector = '#tool';
export const toolBtnMoreSelector = '#btn-load-more';

/** Hardcode initial data */

// tool items list
export const toolList = [
  {
    name: 'Figma',
    tier: 'Free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgFigma,
    link: 'https://figma.com/',
    isLiked: false
  },
  {
    name: 'Sketch',
    tier: 'Trial & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgSketch,
    link: 'https://www.sketch.com/',
    isLiked: false
  },
  {
    name: 'Visual Studio Code',
    tier: 'Free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgVsc,
    link: 'https://code.visualstudio.com/',
    isLiked: false
  },
  {
    name: 'Notion',
    tier: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgNotion,
    link: 'https://notion.so/',
    isLiked: false
  },
  {
    name: 'Slack',
    tier: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgSlack,
    link: 'https://slack.com/',
    isLiked: true
  },
  {
    name: 'Invision',
    tier: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgInvision,
    link: 'https://www.invisionapp.com/',
    isLiked: false
  },
];

// testimonial data
export const testimonialList = [
  {
    name: 'Ronald Richards',
    position: 'Product Manager',
    description: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
    img: imgTestimonial,
  },
  {
    name: 'Ronald Richards IInd',
    position: 'PM middle',
    description: 'Incididunt cillum do sint sin occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
    img: imgTestimonial,
  },
  {
    name: 'Ronald Richards IIIrd',
    position: 'PM senior',
    description: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cill',
    img: imgTestimonial,
  },
];