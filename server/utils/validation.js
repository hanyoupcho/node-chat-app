/*jshint esversion: 6 */
var isRealString = (string) => {
  return typeof string === 'string' && string.trim().length > 0;
};

module.exports = {isRealString};
