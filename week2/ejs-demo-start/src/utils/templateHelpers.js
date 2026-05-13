const helpers = {
  uppie: (str) => str.toUpperCase(),
  lowie: (str) => str.toLowerCase(),
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  truncate: (str, length) =>
    str.length > length ? str.slice(0, length) + "..." : str,
  emojify: (name, classname) => `<span class="${classname}">👌 ${name}</span>`
};

export default helpers;
