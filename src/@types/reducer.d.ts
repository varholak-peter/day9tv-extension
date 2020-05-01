namespace Reducer {
  type Action =
    | { type: "$load"; payload: State }
    | { type: "contrast"; payload: boolean }
    | { type: "form_scaling"; payload: boolean };

  type ActionMapper<T extends Action["type"], P = Action> = P extends { type: T } ? P : never;

  type StateMap = {
    [T in Action["type"]]: ActionMapper<T>["payload"];
  };

  type State = Omit<StateMap, "$load">;
}
