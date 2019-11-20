/**
 * 评论接口相关请求模块
 */
import request from '@/utils/request'

/**
 * 获取评论列表
 */
export function getComments (params) {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params
  })
}

/**
 * 发布评论
 */
export function addComment (data) {
  return request({
    method: 'POST',
    url: '/app/v1_0/comments',
    data
  })
}

/**
 * 对评论点赞
 */
export function addCommentLike (commentId) {
  return request({
    method: 'POST',
    url: '/app/v1_0/comment/likings',
    data: {
      target: commentId
    }
  })
}

/**
 * 取消对评论点赞
 */
export function deleteCommentLike (commentId) {
  return request({
    method: 'DELETE',
    url: '/app/v1_0/comment/likings/' + commentId
  })
}
