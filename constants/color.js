const Color = require('tinycolor2');

const white = {
  900: { value: Color('#fff').toHsvString() },
  800: { value: Color('rgba(255, 255, 255, 0.96)').toHsvString() },
  700: { value: Color('rgba(255, 255, 255, 0.84)').toHsvString() },
  600: { value: Color('rgba(255, 255, 255, 0.72)').toHsvString() },
  500: { value: Color('rgba(255, 255, 255, 0.6)').toHsvString() },
  400: { value: Color('rgba(255, 255, 255, 0.48)').toHsvString() },
  300: { value: Color('rgba(255, 255, 255, 0.36)').toHsvString() },
  200: { value: Color('rgba(255, 255, 255, 0.24)').toHsvString() },
  100: { value: Color('rgba(255, 255, 255, 0.12)').toHsvString() },
};

const gray = {
  900: { value: 'rgba(0, 7, 20, 1)' },
  800: { value: 'rgba(0, 7, 20, 0.96)' },
  700: { value: 'rgba(0, 7, 20, 0.84)' },
  600: { value: 'rgba(0, 7, 20, 0.72)' },
  500: { value: 'rgba(0, 7, 20, 0.6)' },
  400: { value: 'rgba(0, 7, 20, 0.48)' },
  300: { value: 'rgba(0, 7, 20, 0.36)' },
  200: { value: 'rgba(0, 7, 20, 0.24)' },
  100: { value: 'rgba(0, 7, 20, 0.12)' },
};

module.exports = {
  white,
  gray,
}
