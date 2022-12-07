import imgFigma from '../../images/fixtures/01.png';
import imgSketch from '../../images/fixtures/02-sketch.png';
import imgVsc from '../../images/fixtures/03-vsc.png';
import imgNotion from '../../images/fixtures/04-notion.png';
import imgSlack from '../../images/fixtures/05-slack.png';
import imgInvision from '../../images/fixtures/06-invision.png';

export const toolList = [
  {
    name: 'Figma',
    tier: 'Free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgFigma,
    link: '',
    isLiked: false
  },
  {
    name: 'Sketch',
    tier: 'Trial & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgSketch,
    link: '',
    isLiked: false
  },
  {
    name: 'Visual Studio Code',
    tier: 'Free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgVsc,
    link: '',
    isLiked: false
  },
  {
    name: 'Notion',
    tier: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgNotion,
    link: '',
    isLiked: false
  },
  {
    name: 'Slack',
    tier: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgSlack,
    link: '',
    isLiked: true
  },
  {
    name: 'Invision',
    tier: 'Free & Paid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: imgInvision,
    link: '',
    isLiked: false
  },
];

/** Selectors */
export const toolsWrapperSelector = 'popular__wrapper';
export const toolsTemplateSelector = '#tool';
export const toolBtnMoreSelector = '#btn-load-more';