const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        purgecss({
            content: ['./Game_Or_Die/ActiveCode/index.html', './Game_Or_Die/ActiveCode/forum.html', './Game_Or_Die/ActiveCode/makePost.html', './Game_Or_Die/ActiveCode/script.js', './Game_Or_Die/ActiveCode/forum.js']
        })
    ]
}