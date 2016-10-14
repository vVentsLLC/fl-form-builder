import buildOptionsFieldConstructor from './buildOptionsFieldConstructor';

const typeInfo = {
  // Compulsory
  type: 'RadioButtons',
  displayName: 'Radio Button',
  group: 'Options Components',

  // Field type specific
  htmlInputType: 'radio',
};


const RadioButtons = buildOptionsFieldConstructor(typeInfo);

export default RadioButtons;