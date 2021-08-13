const { THEME_NAME } = require('../../constants/theme');

module.exports = {
  [THEME_NAME]: {
    font: {
      base: {
        value: `{${THEME_NAME}.color.gray.100.value}`
      },
    }
  }
}
