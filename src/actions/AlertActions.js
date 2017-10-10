export const NEW_ALERT = "NEW_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export const newAlert = (msg) => ({
  type: NEW_ALERT,
  msg
});

export const removeAlert = (index) => ({
  type: REMOVE_ALERT,
  index
});
