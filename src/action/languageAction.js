export const BAHASA = "BAHASA";

export const changeBahasa = (value) => ({
  type: BAHASA,
  payload: {
    bahasa: value,
  },
});
