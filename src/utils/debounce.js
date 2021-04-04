function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    function later() {
      fn.apply(this, args);
    }

    clearTimeout(timeout);

    timeout = setTimeout(later, delay);
  }
}

export { debounce };
