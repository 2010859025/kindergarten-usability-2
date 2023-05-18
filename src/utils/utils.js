export const isNumber = (n) => {
  n = n.replaceAll(" ", "").replaceAll(",", ".").replaceAll("/", "");
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const isMailAddress = (n) => {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/im;
  return !!n.match(regexEmail);
};

export const isPhoneNumber = (n) => {
  const regexPhoneNumber =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/im;
  return !!n.replaceAll(" ", "").match(regexPhoneNumber);
};

export const joinAbbreviations = (v) =>
  v.map((g) => g.split(" ")[0]).join(", ");
