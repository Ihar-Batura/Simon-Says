function createElement(options) {
  const {
    tag = 'div',
    classes = [],
    id = '',
    text = '',
    href = '',
    target = '',
    disabled = '',
    parent,
  } = options;

  const element = document.createElement(tag);

  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.id = id;
  }
  if (text) {
    element.textContent = text;
  }
  if (href) {
    element.href = href;
  }
  if (target) {
    element.target = target;
  }
  if (disabled) {
    element.setAttribute('disabled', disabled);
  }
  if (parent != null) {
    parent.append(element);
  }

  return element;
}

export default createElement;
