class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^\w\s\-\']/gi, "");
  }
  static titleize(string) {
    return string.replace(/([A-Z])/g, " $1");
  }
}
