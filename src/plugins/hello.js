import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '813095469028245'
  })
  Vue.prototype.$hello = hello
}
