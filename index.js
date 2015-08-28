// Section 1.
//   (a)
//     (i)
//       (A)
//         (I)

var lowerAlpha = require('lower-alpha')

var upperAlpha = function(i) {
  return lowerAlpha(i).toUpperCase() }

var upperRoman = require('romanize')

var lowerRoman = function(i) {
  return upperRoman(i).toLowerCase() }

var arabic = function(i) {
  return i.toString() }

var compound = function(primary, secondary) {
  return function(element, series) {
    return (
      (series ? secondary(series) + '-' : '') +
      primary(element) ) } }

var inTheHole = function(primary, secondary) {
  var compounded = compound(primary, secondary)
  return function(element, series) {
    return '(' + compounded(element, series) + ')' } }

var LEVEL_FORMATTERS = [ null, compound(arabic, upperAlpha) ]

var REPEATING_FORMATTERS = [
  inTheHole(lowerAlpha, arabic),
  inTheHole(lowerRoman, arabic),
  inTheHole(upperAlpha, arabic),
  inTheHole(upperRoman, arabic) ]

var formatterForLevel = function(level) {
  if (level < LEVEL_FORMATTERS.length) {
    return LEVEL_FORMATTERS[level] }
  else {
    var offset = level - LEVEL_FORMATTERS.length
    var index = offset % REPEATING_FORMATTERS.length
    return REPEATING_FORMATTERS[index] } }

var renderComponent = function(component, level) {
  return formatterForLevel(level)(
    component.element.number,
    ( component.series.of > 1 ? component.series.number : null )) }

module.exports = function(numbering, abbreviated) {
  if (abbreviated) {
    var length = numbering.length
    return (
      renderComponent(numbering[length - 1], length) +
      ( length === 1 ? '.' : '' ) ) }
  else {
    return numbering.reduce(
      function(number, component, i) {
        return ( number + renderComponent(component, i + 1) ) },
      '') } }

