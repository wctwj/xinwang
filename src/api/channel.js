/**
 * 频道相关接口模块
 */
import request from '@/utils/request'

/**
 * 获取用户默认推荐的频道列表
 */
export function getDefaultChannels () {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}

/**
 * 获取所有频道列表
 */
export function getAllChannels () {
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}
