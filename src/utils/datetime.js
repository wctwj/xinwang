/**
 * 专门处理时间的工具模块
 */
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import rTime from 'dayjs/plugin/relativeTime'
import Vue from 'vue'

dayjs.extend(rTime)

dayjs.locale('zh-cn')

/**
 * value: 2019-10-14 11:41:40、1515156156156、日期对象 都可以
 * 计算并返回指定时间到现在最新时间的相对时间
 */
// export function relativeTime (value) {
//   return dayjs().from(dayjs(value))
// }

Vue.filter('relativeTime', value => {
  return dayjs().from(dayjs(value))
})

// 我们把处理时间的代码都封装成一个一个的小函数，然后在需要的时候加载调用
// export xxx
// export xxx
// export xxx
// export xxx
// export xxx
