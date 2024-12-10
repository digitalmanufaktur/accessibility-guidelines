import container from 'markdown-it-container'

export default (md) => {
  md.use(container, 'hint', {
    validate: function(params) {
      return params.trim().match(/^(tip|note|info|warning|danger)$/);
    },
    render: function (tokens, idx) {
      const m = tokens[idx].info.trim().match(/^(tip|note|info|warning|danger)$/);
      if (tokens[idx].nesting === 1) {
        return `<HintContainer type="${m[1]}">\n`;
      } else {
        return '</HintContainer>\n';
      }
    }
  });
};