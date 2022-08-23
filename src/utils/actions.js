export function createActionConstants(name) {
  return {
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
    FAILURE: `${name}_FAILURE`,
  };
}
