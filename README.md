# Day9.tv Optimizer

A simple extension that provides some UX benefits to https://day9.tv/ visitors.

[Chrome Web Store](https://chrome.google.com/webstore/detail/day9tv-optimizer/jaehlnfcnnapnhookcomgmmmkojebdla)

## Configuration

### Accessibility

#### Font Contrast

Increases font contrast across the website to comply with WCAG AAA standard where possible. ([Contrast checker](https://webaim.org/resources/contrastchecker/))

#### Font Improvements

Some miscellaneous improvements to fonts that didn't fit anywhere else.

### Quality of Life

#### Form Scaling

Scale WYSIWYG input fields' height according to content.

## Development setup

Requires Yarn & Node.js

Running `yarn dev` starts webpack in watch mode and outputs the bundle in `build` folder.

Running `yarn build` builds a production version of the extension and outputs the bundle in `dist` folder.

For further info how to work with extensions visit [Getting Started - Google Chrome](https://developer.chrome.com/extensions/getstarted).
