import request from '@/utils/request'

export const getBwdInfoApi = (current, size, data = {}, isAdvance = false) => {
  return request({
    method: 'post',
    url: isAdvance ? '/dataset/advanceSearch' : '/dataset/getInfo',
    params: {
      current,
      size
    },
    data
  })
}
