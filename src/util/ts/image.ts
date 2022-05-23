const dataURLtoFile = (dataurl: string, filename = ''): File => {
  let arr: any = dataurl.split(','),
    mime: any = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  if (mime === 'image/jpeg') filename = filename + '.jpg'
  if (mime === 'image/png') filename = filename + '.png'
  return new File([u8arr], filename, { type: mime })
}

const compressImage = (file: File) => {
  return new Promise((resolut) => {
    let img = new Image()
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      img.src = this.result as string
    }
    img.onload = function (e: any) {
      let canvas = document.createElement('canvas')
      let context = canvas.getContext('2d')

      // 图片原始尺寸
      let originWidth = e?.path[0].width
      let originHeight = e?.path[0].height

      // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
      let maxWidth = 900,
        maxHeight = 900
      // 目标尺寸
      let targetWidth = originWidth,
        targetHeight = originHeight
      // 图片尺寸超过300x300的限制
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
          // 更宽，按照宽度限定尺寸
          targetWidth = maxWidth
          targetHeight = Math.round(maxWidth * (originHeight / originWidth))
        } else {
          targetHeight = maxHeight
          targetWidth = Math.round(maxHeight * (originWidth / originHeight))
        }
      }
      // canvas对图片进行缩放
      canvas.width = targetWidth
      canvas.height = targetHeight
      // 清除画布
      context?.clearRect(0, 0, targetWidth, targetHeight)
      // 图片压缩
      context?.drawImage(img, 0, 0, targetWidth, targetHeight)
      let newUrl = canvas.toDataURL('image/jpeg', 0.92)
      resolut(dataURLtoFile(newUrl))
    }
  })
}

export { dataURLtoFile, compressImage }
