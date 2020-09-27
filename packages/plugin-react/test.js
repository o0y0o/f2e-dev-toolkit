const { RuleTester } = require('eslint')
const plugin = require('./index')

RuleTester.setDefaultConfig({ parser: require.resolve('babel-eslint') })

new RuleTester().run('@0y0/react', plugin.rules['no-undefined-effect-deps'], {
  valid: ['useEffect(() => {}, [])'],
  invalid: [{ code: 'useEffect(() => {})', errors: [{}] }]
})
