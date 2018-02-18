//
// Translated from: https://raw.githubusercontent.com/google/caja/master/src/com/google/caja/lang/css/CssPropBit.java
// and https://caja.appspot.com/v6012-es53-2-ge0690ee2/ses-single-frame.js?debug=1
//

/* Copyright Google Inc.
 * Licensed under the Apache Licence Version 2.0
 * Autogenerated at Tue Dec 05 10:44:00 PST 2017
 * \@overrides window
 * \@provides cssSchema, CSS_PROP_BIT_QUANTITY, CSS_PROP_BIT_HASH_VALUE, CSS_PROP_BIT_NEGATIVE_QUANTITY, CSS_PROP_BIT_QSTRING, CSS_PROP_BIT_URL, CSS_PROP_BIT_UNRESERVED_WORD, CSS_PROP_BIT_UNICODE_RANGE, CSS_PROP_BIT_GLOBAL_NAME, CSS_PROP_BIT_PROPERTY_NAME */
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_QUANTITY = 1;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_HASH_VALUE = 2;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_NEGATIVE_QUANTITY = 4;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_QSTRING = 8;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_URL = 16;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_UNRESERVED_WORD = 64;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_UNICODE_RANGE = 128;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_GLOBAL_NAME = 512;
/**
 * @const
 * @type {number}
 */
export const CSS_PROP_BIT_PROPERTY_NAME = 1024;

var cssSchema = (function () {
    var L = [ [ 'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
        'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet',
        'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral',
        'cornflowerblue', 'cornsilk', 'crimson', 'currentcolor', 'cyan',
        'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen',
        'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange',
        'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
        'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
        'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
        'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
        'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow',
        'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki',
        'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue',
        'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
        'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
        'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue',
        'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon',
        'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple',
        'mediumseagreen', 'mediumslateblue', 'mediumspringgreen',
        'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
        'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive',
        'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod',
        'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip',
        'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple',
        'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown',
        'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
        'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
        'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato',
        'transparent', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke',
        'yellow', 'yellowgreen' ], [ 'all-scroll', 'col-resize', 'crosshair',
        'default', 'e-resize', 'hand', 'help', 'move', 'n-resize', 'ne-resize',
        'no-drop', 'not-allowed', 'nw-resize', 'pointer', 'progress',
        'row-resize', 's-resize', 'se-resize', 'sw-resize', 'text',
        'vertical-text', 'w-resize', 'wait' ], [ 'color', 'color-burn',
        'color-dodge', 'darken', 'difference', 'exclusion', 'hard-light',
        'hue', 'lighten', 'luminosity', 'multiply', 'overlay', 'saturation',
        'screen', 'soft-light' ], [ 'armenian', 'decimal',
        'decimal-leading-zero', 'disc', 'georgian', 'lower-alpha',
        'lower-greek', 'lower-latin', 'lower-roman', 'square', 'upper-alpha',
        'upper-latin', 'upper-roman' ], [ '100', '200', '300', '400', '500',
        '600', '700', '800', '900', 'bold', 'bolder', 'lighter' ], [
        'block-level', 'inline-level', 'table-caption', 'table-cell',
        'table-column', 'table-column-group', 'table-footer-group',
        'table-header-group', 'table-row', 'table-row-group' ], [ 'condensed',
        'expanded', 'extra-condensed', 'extra-expanded', 'narrower',
        'semi-condensed', 'semi-expanded', 'ultra-condensed', 'ultra-expanded',
        'wider' ], [ 'inherit', 'inline', 'inline-block', 'inline-box',
        'inline-flex', 'inline-grid', 'inline-list-item', 'inline-stack',
        'inline-table', 'run-in' ], [ 'behind', 'center-left', 'center-right',
        'far-left', 'far-right', 'left-side', 'leftwards', 'right-side',
        'rightwards' ], [ 'large', 'larger', 'small', 'smaller', 'x-large',
        'x-small', 'xx-large', 'xx-small' ], [ 'dashed', 'dotted', 'double',
        'groove', 'outset', 'ridge', 'solid' ], [ 'ease', 'ease-in',
        'ease-in-out', 'ease-out', 'linear', 'step-end', 'step-start' ], [
        'at', 'closest-corner', 'closest-side', 'ellipse', 'farthest-corner',
        'farthest-side' ], [ 'baseline', 'middle', 'sub', 'super',
        'text-bottom', 'text-top' ], [ 'caption', 'icon', 'menu',
        'message-box', 'small-caption', 'status-bar' ], [ 'fast', 'faster',
        'slow', 'slower', 'x-fast', 'x-slow' ], [ 'above', 'below', 'higher',
        'level', 'lower' ], [ 'cursive', 'fantasy', 'monospace', 'sans-serif',
        'serif' ], [ 'loud', 'silent', 'soft', 'x-loud', 'x-soft' ], [
        'no-repeat', 'repeat-x', 'repeat-y', 'round', 'space' ], [ 'blink',
        'line-through', 'overline', 'underline' ], [ 'block', 'flex', 'grid',
        'table' ], [ 'high', 'low', 'x-high', 'x-low' ], [ 'nowrap', 'pre',
        'pre-line', 'pre-wrap' ], [ 'absolute', 'relative', 'static' ], [
        'alternate', 'alternate-reverse', 'reverse' ], [ 'border-box',
        'content-box', 'padding-box' ], [ 'capitalize', 'lowercase',
        'uppercase' ], [ 'child', 'female', 'male' ], [ '=', 'opacity' ], [
        'backwards', 'forwards' ], [ 'bidi-override', 'embed' ], [ 'bottom',
        'top' ], [ 'break-all', 'keep-all' ], [ 'clip', 'ellipsis' ], [
        'contain', 'cover' ], [ 'continuous', 'digits' ], [ 'end', 'start' ], [
        'flat', 'preserve-3d' ], [ 'hide', 'show' ], [ 'horizontal', 'vertical'
      ], [ 'inside', 'outside' ], [ 'italic', 'oblique' ], [ 'left', 'right' ],
      [ 'ltr', 'rtl' ], [ 'no-content', 'no-display' ], [ 'paused', 'running' ]
      , [ 'suppress', 'unrestricted' ], [ 'thick', 'thin' ], [ ',' ], [ '/' ],
      [ 'all' ], [ 'always' ], [ 'auto' ], [ 'avoid' ], [ 'both' ], [
        'break-word' ], [ 'center' ], [ 'circle' ], [ 'code' ], [ 'collapse' ],
      [ 'contents' ], [ 'fixed' ], [ 'hidden' ], [ 'infinite' ], [ 'inset' ], [
        'invert' ], [ 'justify' ], [ 'list-item' ], [ 'local' ], [ 'medium' ],
      [ 'mix' ], [ 'none' ], [ 'normal' ], [ 'once' ], [ 'repeat' ], [ 'scroll'
      ], [ 'separate' ], [ 'small-caps' ], [ 'spell-out' ], [ 'to' ], [
        'visible' ] ];
    var schema = {
      'animation': {
        'cssPropBits': 517,
        'cssLitGroup': [ L[ 11 ], L[ 25 ], L[ 30 ], L[ 46 ], L[ 49 ], L[ 55 ],
          L[ 64 ], L[ 72 ], L[ 73 ] ],
        'cssFns': [ 'cubic-bezier()', 'steps()' ]
      },
      'animation-delay': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 49 ] ],
        'cssFns': [ ]
      },
      'animation-direction': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 25 ], L[ 49 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'animation-duration': 'animation-delay',
      'animation-fill-mode': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 30 ], L[ 49 ], L[ 55 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'animation-iteration-count': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 49 ], L[ 64 ] ],
        'cssFns': [ ]
      },
      'animation-name': {
        'cssPropBits': 512,
        'cssLitGroup': [ L[ 49 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'animation-play-state': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 46 ], L[ 49 ] ],
        'cssFns': [ ]
      },
      'animation-timing-function': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 11 ], L[ 49 ] ],
        'cssFns': [ 'cubic-bezier()', 'steps()' ]
      },
      'appearance': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 72 ] ],
        'cssFns': [ ]
      },
      'azimuth': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 8 ], L[ 43 ], L[ 57 ] ],
        'cssFns': [ ]
      },
      'backface-visibility': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 60 ], L[ 63 ], L[ 81 ] ],
        'cssFns': [ ]
      },
      'background': {
        'cssPropBits': 23,
        'cssLitGroup': [ L[ 0 ], L[ 19 ], L[ 26 ], L[ 32 ], L[ 35 ], L[ 43 ],
          L[ 49 ], L[ 50 ], L[ 53 ], L[ 57 ], L[ 62 ], L[ 69 ], L[ 72 ], L[ 75
          ], L[ 76 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'image()', 'linear-gradient()',
          'radial-gradient()', 'repeating-linear-gradient()',
          'repeating-radial-gradient()', 'rgb()', 'rgba()' ]
      },
      'background-attachment': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 49 ], L[ 62 ], L[ 69 ], L[ 76 ] ],
        'cssFns': [ ]
      },
      'background-color': {
        'cssPropBits': 2,
        'cssLitGroup': [ L[ 0 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'background-image': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 49 ], L[ 72 ] ],
        'cssFns': [ 'image()', 'linear-gradient()', 'radial-gradient()',
          'repeating-linear-gradient()', 'repeating-radial-gradient()' ]
      },
      'background-position': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 32 ], L[ 43 ], L[ 49 ], L[ 57 ] ],
        'cssFns': [ ]
      },
      'background-repeat': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 19 ], L[ 49 ], L[ 75 ] ],
        'cssFns': [ ]
      },
      'background-size': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 35 ], L[ 49 ], L[ 53 ] ],
        'cssFns': [ ]
      },
      'border': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 10 ], L[ 48 ], L[ 63 ], L[ 65 ], L[ 70 ],
          L[ 72 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'border-bottom': 'border',
      'border-bottom-color': 'background-color',
      'border-bottom-left-radius': {
        'cssPropBits': 5,
        'cssFns': [ ]
      },
      'border-bottom-right-radius': 'border-bottom-left-radius',
      'border-bottom-style': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 10 ], L[ 63 ], L[ 65 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'border-bottom-width': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 48 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'border-collapse': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 60 ], L[ 77 ] ],
        'cssFns': [ ]
      },
      'border-color': 'background-color',
      'border-left': 'border',
      'border-left-color': 'background-color',
      'border-left-style': 'border-bottom-style',
      'border-left-width': 'border-bottom-width',
      'border-radius': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 50 ] ],
        'cssFns': [ ]
      },
      'border-right': 'border',
      'border-right-color': 'background-color',
      'border-right-style': 'border-bottom-style',
      'border-right-width': 'border-bottom-width',
      'border-spacing': 'border-bottom-left-radius',
      'border-style': 'border-bottom-style',
      'border-top': 'border',
      'border-top-color': 'background-color',
      'border-top-left-radius': 'border-bottom-left-radius',
      'border-top-right-radius': 'border-bottom-left-radius',
      'border-top-style': 'border-bottom-style',
      'border-top-width': 'border-bottom-width',
      'border-width': 'border-bottom-width',
      'bottom': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 53 ] ],
        'cssFns': [ ]
      },
      'box': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 61 ], L[ 72 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'box-shadow': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 49 ], L[ 65 ], L[ 72 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'box-sizing': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 26 ] ],
        'cssFns': [ ]
      },
      'caption-side': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 32 ] ],
        'cssFns': [ ]
      },
      'clear': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 43 ], L[ 55 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'clip': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 53 ] ],
        'cssFns': [ 'rect()' ]
      },
      'color': 'background-color',
      'content': {
        'cssPropBits': 8,
        'cssLitGroup': [ L[ 72 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'cue': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 72 ] ],
        'cssFns': [ ]
      },
      'cue-after': 'cue',
      'cue-before': 'cue',
      'cursor': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 1 ], L[ 49 ], L[ 53 ] ],
        'cssFns': [ ]
      },
      'direction': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 44 ] ],
        'cssFns': [ ]
      },
      'display': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 5 ], L[ 7 ], L[ 21 ], L[ 53 ], L[ 68 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'display-extras': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 68 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'display-inside': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 21 ], L[ 53 ] ],
        'cssFns': [ ]
      },
      'display-outside': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 5 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'elevation': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 16 ] ],
        'cssFns': [ ]
      },
      'empty-cells': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 39 ] ],
        'cssFns': [ ]
      },
      'filter': {
        'cssPropBits': 0,
        'cssFns': [ 'alpha()' ]
      },
      'float': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 43 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'font': {
        'cssPropBits': 73,
        'cssLitGroup': [ L[ 4 ], L[ 9 ], L[ 14 ], L[ 17 ], L[ 42 ], L[ 49 ], L[
            50 ], L[ 70 ], L[ 73 ], L[ 78 ] ],
        'cssFns': [ ]
      },
      'font-family': {
        'cssPropBits': 72,
        'cssLitGroup': [ L[ 17 ], L[ 49 ] ],
        'cssFns': [ ]
      },
      'font-size': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 9 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'font-stretch': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 6 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'font-style': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 42 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'font-variant': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 73 ], L[ 78 ] ],
        'cssFns': [ ]
      },
      'font-weight': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 4 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'height': 'bottom',
      'left': 'bottom',
      'letter-spacing': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 73 ] ],
        'cssFns': [ ]
      },
      'line-height': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 73 ] ],
        'cssFns': [ ]
      },
      'list-style': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 3 ], L[ 41 ], L[ 58 ], L[ 72 ] ],
        'cssFns': [ 'image()', 'linear-gradient()', 'radial-gradient()',
          'repeating-linear-gradient()', 'repeating-radial-gradient()' ]
      },
      'list-style-image': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 72 ] ],
        'cssFns': [ 'image()', 'linear-gradient()', 'radial-gradient()',
          'repeating-linear-gradient()', 'repeating-radial-gradient()' ]
      },
      'list-style-position': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 41 ] ],
        'cssFns': [ ]
      },
      'list-style-type': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 3 ], L[ 58 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'margin': 'bottom',
      'margin-bottom': 'bottom',
      'margin-left': 'bottom',
      'margin-right': 'bottom',
      'margin-top': 'bottom',
      'max-height': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 53 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'max-width': 'max-height',
      'min-height': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 53 ] ],
        'cssFns': [ ]
      },
      'min-width': 'min-height',
      'mix-blend-mode': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 2 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'opacity': {
        'cssPropBits': 1,
        'cssFns': [ ]
      },
      'outline': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 10 ], L[ 48 ], L[ 63 ], L[ 65 ], L[ 66 ],
          L[ 70 ], L[ 72 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'outline-color': {
        'cssPropBits': 2,
        'cssLitGroup': [ L[ 0 ], L[ 66 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'outline-style': 'border-bottom-style',
      'outline-width': 'border-bottom-width',
      'overflow': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 53 ], L[ 63 ], L[ 76 ], L[ 81 ] ],
        'cssFns': [ ]
      },
      'overflow-wrap': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 56 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'overflow-x': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 45 ], L[ 53 ], L[ 63 ], L[ 76 ], L[ 81 ] ],
        'cssFns': [ ]
      },
      'overflow-y': 'overflow-x',
      'padding': 'opacity',
      'padding-bottom': 'opacity',
      'padding-left': 'opacity',
      'padding-right': 'opacity',
      'padding-top': 'opacity',
      'page-break-after': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 43 ], L[ 52 ], L[ 53 ], L[ 54 ] ],
        'cssFns': [ ]
      },
      'page-break-before': 'page-break-after',
      'page-break-inside': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 53 ], L[ 54 ] ],
        'cssFns': [ ]
      },
      'pause': 'border-bottom-left-radius',
      'pause-after': 'border-bottom-left-radius',
      'pause-before': 'border-bottom-left-radius',
      'perspective': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 72 ] ],
        'cssFns': [ ]
      },
      'perspective-origin': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 32 ], L[ 43 ], L[ 57 ] ],
        'cssFns': [ ]
      },
      'pitch': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 22 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'pitch-range': 'border-bottom-left-radius',
      'play-during': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 53 ], L[ 71 ], L[ 72 ], L[ 75 ] ],
        'cssFns': [ ]
      },
      'position': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 24 ] ],
        'cssFns': [ ]
      },
      'quotes': {
        'cssPropBits': 8,
        'cssLitGroup': [ L[ 72 ] ],
        'cssFns': [ ]
      },
      'resize': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 40 ], L[ 55 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'richness': 'border-bottom-left-radius',
      'right': 'bottom',
      'speak': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 72 ], L[ 73 ], L[ 79 ] ],
        'cssFns': [ ]
      },
      'speak-header': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 52 ], L[ 74 ] ],
        'cssFns': [ ]
      },
      'speak-numeral': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 36 ] ],
        'cssFns': [ ]
      },
      'speak-punctuation': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 59 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'speech-rate': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 15 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'stress': 'border-bottom-left-radius',
      'table-layout': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 53 ], L[ 62 ] ],
        'cssFns': [ ]
      },
      'text-align': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 43 ], L[ 57 ], L[ 67 ] ],
        'cssFns': [ ]
      },
      'text-decoration': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 20 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'text-indent': 'border-bottom-left-radius',
      'text-overflow': {
        'cssPropBits': 8,
        'cssLitGroup': [ L[ 34 ] ],
        'cssFns': [ ]
      },
      'text-shadow': 'box-shadow',
      'text-transform': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 27 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'text-wrap': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 47 ], L[ 72 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'top': 'bottom',
      'transform': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 72 ] ],
        'cssFns': [ 'matrix()', 'perspective()', 'rotate()', 'rotate3d()',
          'rotatex()', 'rotatey()', 'rotatez()', 'scale()', 'scale3d()',
          'scalex()', 'scaley()', 'scalez()', 'skew()', 'skewx()', 'skewy()',
          'translate()', 'translate3d()', 'translatex()', 'translatey()',
          'translatez()' ]
      },
      'transform-origin': 'perspective-origin',
      'transform-style': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 38 ] ],
        'cssFns': [ ]
      },
      'transition': {
        'cssPropBits': 1029,
        'cssLitGroup': [ L[ 11 ], L[ 49 ], L[ 51 ], L[ 72 ] ],
        'cssFns': [ 'cubic-bezier()', 'steps()' ]
      },
      'transition-delay': 'animation-delay',
      'transition-duration': 'animation-delay',
      'transition-property': {
        'cssPropBits': 1024,
        'cssLitGroup': [ L[ 49 ], L[ 51 ] ],
        'cssFns': [ ]
      },
      'transition-timing-function': 'animation-timing-function',
      'unicode-bidi': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 31 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'vertical-align': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 13 ], L[ 32 ] ],
        'cssFns': [ ]
      },
      'visibility': 'backface-visibility',
      'voice-family': {
        'cssPropBits': 8,
        'cssLitGroup': [ L[ 28 ], L[ 49 ] ],
        'cssFns': [ ]
      },
      'volume': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 18 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'white-space': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 23 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'width': 'min-height',
      'word-break': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 33 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'word-spacing': 'letter-spacing',
      'word-wrap': 'overflow-wrap',
      'z-index': 'bottom',
      'zoom': 'line-height',
      'cubic-bezier()': 'animation-delay',
      'steps()': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 37 ], L[ 49 ] ],
        'cssFns': [ ]
      },
      'hsl()': 'animation-delay',
      'hsla()': 'animation-delay',
      'image()': {
        'cssPropBits': 18,
        'cssLitGroup': [ L[ 0 ], L[ 49 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'linear-gradient()': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 32 ], L[ 43 ], L[ 49 ], L[ 80 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'radial-gradient()': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 12 ], L[ 32 ], L[ 43 ], L[ 49 ], L[ 57 ],
          L[ 58 ] ],
        'cssFns': [ 'hsl()', 'hsla()', 'rgb()', 'rgba()' ]
      },
      'repeating-linear-gradient()': 'linear-gradient()',
      'repeating-radial-gradient()': 'radial-gradient()',
      'rgb()': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 49 ] ],
        'cssFns': [ ]
      },
      'rgba()': 'rgb()',
      'rect()': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 49 ], L[ 53 ] ],
        'cssFns': [ ]
      },
      'alpha()': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 29 ] ],
        'cssFns': [ ]
      },
      'matrix()': 'animation-delay',
      'perspective()': 'border-bottom-left-radius',
      'rotate()': 'border-bottom-left-radius',
      'rotate3d()': 'animation-delay',
      'rotatex()': 'border-bottom-left-radius',
      'rotatey()': 'border-bottom-left-radius',
      'rotatez()': 'border-bottom-left-radius',
      'scale()': 'animation-delay',
      'scale3d()': 'animation-delay',
      'scalex()': 'border-bottom-left-radius',
      'scaley()': 'border-bottom-left-radius',
      'scalez()': 'border-bottom-left-radius',
      'skew()': 'animation-delay',
      'skewx()': 'border-bottom-left-radius',
      'skewy()': 'border-bottom-left-radius',
      'translate()': 'animation-delay',
      'translate3d()': 'animation-delay',
      'translatex()': 'border-bottom-left-radius',
      'translatey()': 'border-bottom-left-radius',
      'translatez()': 'border-bottom-left-radius'
    };
    if (true) {
      for (var key in schema) {
        if ('string' === typeof schema[ key ] &&
          Object.hasOwnProperty.call(schema, key)) {
          schema[ key ] = schema[ schema[ key ] ];
        }
      }
    }
    return schema;
  })();
if (typeof window !== 'undefined') {
  window['cssSchema'] = cssSchema;
}
