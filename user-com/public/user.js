/*cors跨域*/
// console.log('user空间')
// const request = new XMLHttpRequest()
// request.open('GET', 'http://qq.com:8888/friends.json')
// request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status >= 200 && request.status <= 300) {
//         console.log(request.response)
//     }
// }
// request.send()
//friends.js是函数
const random = 'JSONPCallbackName' + Math.random()
console.log(random)
window[random] = (data) => {
    console.log(data)
}
// window.xxx = (data) => {
//     console.log(data)
// }
console.log('user空间')
const script = document.createElement('script')
script.src = `http://qq.com:8888/friends.js?functionName=${random}`
script.onload = () => {
    script.remove()
}
document.body.appendChild(script)