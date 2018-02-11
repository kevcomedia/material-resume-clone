# Material Resume Clone

A clone of the Material Resume from
[here](https://creativemarket.com/ikonome/686585-Material-Resume-Blue/screenshots/#screenshot3).

The page is built using plain HTML and CSS. There are points where I wished I
used Sass instead.

The page is tested on Firefox Developer Edition 58 and Chromium 64. I don't have
any browsers in hand, and I'm not sure what the page looks like in other
browsers.

## Usage

### `npm run dev`

Spins up Browsersync and opens the page on port 3000.

### `npm run build`

Minifies the HTML and puts it in the `dist` directory. The CSS is auto-prefixed
with Autoprefixer (though when I checked there doesn't seem to be any
auto-prefixes. Either prefixes are entirely unnecessary, or I didn't config it
right) and then minified. A sourcemap is also created. The minified CSS and the
sourcemap go are put in the `styles` directory in `dist`. If a `dist` directory
exists prior, it will be deleted.
