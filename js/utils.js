export const getElementfromTemplate = (template, classes = ``, wrp = `section`) => {
  const wrapper = document.createElement(wrp);
  wrapper.className = classes;
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const contentWrp = document.querySelector(`.main`);

export const renderScreen = (state, template) => {
  contentWrp.innerHTML = ``;
  contentWrp.appendChild(template);

  const inputs = contentWrp.querySelectorAll(`.artist__input`);
  Array.from(inputs).forEach((input) => {
    input.addEventListener(`change`, () => {
      state.level += 1;
      renderScreen(state, template);
    });
  });
};
