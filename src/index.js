// components
import Section from './scripts/components/Section';
import Card from './scripts/components/Card';
import Slider from './scripts/components/Slider';

// utils
import {
  toolList,
  toolsWrapperSelector,
  toolsTemplateSelector,
  toolsTemplateSelectorSecondary,
  toolBtnMoreSelector,
  testimonialList,
  newcomerWrapperSelector,
  toolsListNewcomer
} from './scripts/utils/data';

// styles
import './index.scss';

// buttons
const toolBtnMoreElement = document.querySelector(toolBtnMoreSelector);

/* Tool section renderer */
const toolSection = new Section(
  {
    items: toolList,
    renderer: (toolItem) => {
      const newToolElement = createTool(toolItem, toolsTemplateSelector);
      toolSection.addItem(newToolElement);
    }
  },
  toolsWrapperSelector
);

toolSection.render();

// Secondary tools section
const toolsNewComer = new Section({
  items: toolsListNewcomer,
  renderer: (toolItem) => {
    const newToolElement = createTool(toolItem, toolsTemplateSelectorSecondary);
    toolsNewComer.addItem(newToolElement);
  }
}, newcomerWrapperSelector);

toolsNewComer.render();

/* Slider init */
const sliderTestimonial = new Slider({});
sliderTestimonial.loadCards(testimonialList);

/* Functions */
// creates new instance of Card and returns its template
function createTool(item, templateSelector) {
  const newTool = new Card(
    item,
    templateSelector,
  );

  return newTool.createCard();
}

function handleBtnMoreTool() {
  // HARDCODE: adds initial cards to Section
  toolSection.concatItems(toolList);
  toolSection.render();
}

// event listeners
toolBtnMoreElement.addEventListener('click', handleBtnMoreTool);
