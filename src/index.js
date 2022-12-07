// components
import Section from './scripts/components/Section';
import Card from './scripts/components/Card';

// utils
import {
  toolList,
  toolsWrapperSelector,
  toolsTemplateSelector,
  toolBtnMoreSelector
} from './scripts/utils/data';

// styles and images
import './index.scss';

// buttons
const toolBtnMoreElement = document.querySelector(toolBtnMoreSelector);

/* Tool section renderer */
const toolSection = new Section(
  {
    items: toolList,
    renderer: (toolItem) => {
      const newToolElement = createTool(toolItem);
      toolSection.addItem(newToolElement);
    }
  },
  toolsWrapperSelector
);

toolSection.render();

/* Functions */
// creates new instance of Card
function createTool(item) {
  const newTool = new Card(
    item,
    toolsTemplateSelector,
  );

  return newTool.createCard();
}

function handleBtnMoreTool(){
  // HARDCODE: adds initial cards to Section
  toolSection.concatItems(toolList);
  toolSection.render();
}

// event listeners
toolBtnMoreElement.addEventListener('click',handleBtnMoreTool);

// easy FUOC fix (see index.html style tag)
function handleFuoc() {
  let body = document.querySelector('body');
  body.style.visibility = 'visible';
}

window.addEventListener('load', handleFuoc);
