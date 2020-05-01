export const initialState: Reducer.State = {
  font_contrast: false,
  font_improvements: false,
  form_scaling: false,
};

export const reducer = (state: Reducer.State, action: Reducer.Action): Reducer.State => {
  if (action.type === "$load") {
    return {
      ...initialState,
      ...action.payload,
    };
  }

  const newState = {
    ...state,
    [action.type]: action.payload,
  };

  chrome.storage.local.set({ config: newState });

  return newState;
};
