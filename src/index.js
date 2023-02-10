import _ from 'lodash';


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this  script
  element.innerHTML = _.join(['Hello', 'webpack', 'potato', 'kwek', 'kwek'], ' ');

  return element;
}

document.body.appendChild(component());
