/**
 * Singleton to create form components
 * @class FormFabric
 * @param {HTMLElement} el Where the fabric will be put.
 */
function FormFabric(el) {
  if (!(this instanceof FormFabric)) {
    return new FormFabric(el);
  }

  /**
   * @function createOptionsDropdown
   * @return {HTMLElement} The dropdown menu
   */
  function createOptionsDropdown() {
    var select = document.createElement('select');
    var options = [
      'Radio button',
      'Checkbox',
      'Text field',
      'Text area',
      'Dropdown',
    ];

    options.forEach(function (option) {
      var op = document.createElement('option');
      op.setAttribute('value', option);
      op.innerText = option;
      select.appendChild(op);
    });

    return select;
  }

  this.init = function init() {
    var addBtn = document.createElement('button');
    addBtn.innerText = 'Add';
    var options = createOptionsDropdown();

    el.appendChild(addBtn);
    el.appendChild(options);
  };

  this.init();
}