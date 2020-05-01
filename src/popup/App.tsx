import { h } from "preact";
import { useCallback, useEffect, useReducer, useState } from "preact/hooks";

import { Checkbox } from "./Checkbox";
import { initialState, reducer } from "./reducer";

export const App = () => {
  const [hasUnchecked, setHasUnchecked] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    chrome.storage.local.get(["config"], ({ config }) => {
      dispatch({ type: "$load", payload: config });
    });
  }, []);

  const onInput = useCallback(
    (name: Reducer.Action["type"]) => (e: any) => {
      const isChecked = e.currentTarget.checked;

      if (!isChecked) {
        setHasUnchecked(true);
      }

      dispatch({ type: name, payload: isChecked });
    },
    [dispatch, setHasUnchecked]
  );

  return (
    <div className="app">
      <h1>Day9.tv Optimizer 🧡</h1>
      <hr />
      <fieldset>
        <legend>Accessibility</legend>
        <Checkbox
          checked={state.font_contrast}
          detail="Increase font contrast"
          label="Font Contrast"
          name="font_contrast"
          onInput={onInput("font_contrast")}
        />
        <Checkbox
          checked={state.font_improvements}
          detail="Miscellaneous improvements to font"
          label="Font Improvements"
          name="font_improvements"
          onInput={onInput("font_improvements")}
        />
      </fieldset>
      <fieldset>
        <legend>Quality of Life</legend>
        <Checkbox
          checked={state.form_scaling}
          detail="Scale input field according to content"
          label="Form scaling"
          name="form_scaling"
          onInput={onInput("form_scaling")}
        />
      </fieldset>
      {hasUnchecked ? <strong>Reload the page to apply changes.</strong> : null}
      <hr />
      <em>This extension is not related to Day9.tv web developers.</em>
    </div>
  );
};
