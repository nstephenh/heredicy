module.exports = function(content) {
    content = (0,eval)(content.replace(/^module.exports = /, ''));
    let result = require('peggy').generate(content, {
        format: 'commonjs',
        output: 'source'
    });
    return result;
};