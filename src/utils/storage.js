function setToLS(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function getFromLS(key) {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
}

export {
  setToLS,
  getFromLS
}
