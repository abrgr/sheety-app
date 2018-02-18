// TODO: THIS IS DISGUSTING.
//       caja (https://developers.google.com/caja/) is intended to run
//       on the server but we are monkeying with it to get it to be an
//       html/css sanitizer.
import 'sanitizer/lib/html4';
import 'sanitizer/lib/uri';
import './csslexer';
import './cssparser';
import './sanitizecss';
import sanitizer from 'sanitizer';

export default sanitizer;
