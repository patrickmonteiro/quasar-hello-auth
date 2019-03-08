import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: 'XXXXXXXXX'
  })
  Vue.prototype.$hello = hello
}
