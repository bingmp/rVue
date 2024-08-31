//封装一个函数:获取一个结果:当前早上|上午|下午|晚上
export const getTime = () => {
  let message = ''
  //通过内置构造函数Date
  const hours = new Date().getHours()
  //情况的判断
  if (hours <= 6) {
    message = 'night'
  } else if (hours <= 12) {
    message = 'morning'
  } else if (hours <= 18) {
    message = 'afternoon'
  } else {
    message = 'evening'
  }
  return message
}
