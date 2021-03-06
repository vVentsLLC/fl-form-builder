//
//    ACTION CREATORS
//

export const undo = _ =>
({
  type: "undo",
});

export const importCustomComponents = customComponents =>
({
  type: "importCustomComponents",
  customComponents,
});


export const importState = newFieldsState =>
({
  type: "importState",
  newFieldsState,
});

export const createField = fieldType =>
({
  type: "createField",
  fieldType,
});

export const fieldCreated = createdFieldState =>
({
  type: "fieldCreated",
  createdFieldState,
});

export const toggleConfig = fieldState =>
({
  type: "toggleConfig",
  fieldState,
});

export const toggleRequired = fieldState =>
({
  type: "toggleRequired",
  fieldState,
});

export const deleteField = fieldState =>
({
  type: "deleteField",
  fieldState,
});

export const updateField = newFieldState =>
({
  type: "updateField",
  newFieldState,
});

export const reorderFields = newFieldsOrder =>
({
  type: "reorderFields",
  newFieldsOrder,
});
