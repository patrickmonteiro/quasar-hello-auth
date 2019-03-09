import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '268844877324096'
  })
  Vue.prototype.$hello = hello
}
