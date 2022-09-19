export const processDownloadFile = res => {
  const url = window.URL.createObjectURL(res.data)
  const fileName = decodeURIComponent(
    res.headers['content-disposition'].split('=')[1]
  )
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', fileName)
  document.body.append(a)
  a.click()
  document.body.removeChild(a)
}
