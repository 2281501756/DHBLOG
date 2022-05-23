// import require from '../../../util/js/http/index'
// import { compressImage } from '../../../util/js/image'
// import { createDOM } from '../../../util/js/create'
// import ImageFill from '../../../components/imageFill/index.vue'

// export const mymixin = {
//   data() {
//     return {
//       imgList: [],
//       state1: '',
//       restaurants: []
//     }
//   },
//   watch: {
//     state1(newValue: any) {
//       this.formdata.label = newValue
//     }
//   },
//   methods: {
//     $imgAdd(pos: any, $file: any) {
//       // 第一步.将图片上传到服务器.
//       let formdata = new FormData()
//       formdata.append('file', $file)
//       require({
//         url: '/upload',
//         method: 'post',
//         data: formdata,
//         headers: { 'Content-Type': 'multipart/form-data' }
//       }).then((res) => {
//         this.$refs.md.$img2Url(pos, `${this.$base_url + res.data.url}`)
//       })
//     },
//     up() {
//       let file = this.$refs.file.files[0]
//       compressImage(file).then((res) => {
//         file = res
//         let data = new FormData()
//         data.append('file', file)
//         require
//           .post('/upload', data, {})
//           .then((res) => {
//             this.formdata.photo = `${this.$base_url + res.data.url}`
//             this.$message({
//               message: '上传成功',
//               type: 'success'
//             })
//           })
//           .catch((err) => {
//             console.log(err)
//             this.$message({
//               message: '上传失败',
//               type: 'error'
//             })
//           })
//       })
//     },
//     // 图片列表中的图片选中
//     imgListClick(value) {
//       this.formdata.photo = value
//     },
//     // 创建放大图片
//     createImg() {
//       createDOM(ImageFill, { url: this.formdata.photo })
//     },
//     // 点击选择图片
//     fileBoxClick() {
//       this.$refs.file.click()
//     },
//     // 获取5张图片
//     getImgList() {
//       let res = []
//       let set = new Set()
//       for (let i = 0; i < 5; i++) {
//         let rand = Math.floor(Math.random() * 70) + 1
//         let a = {
//           value: `${this.$base_url}/static/image/articleImage/` + rand + '.jpg'
//         }
//         if (!set.has(rand)) {
//           res.push(a)
//           set.add(rand)
//         } else {
//           i--
//         }
//       }
//       this.imgList = res
//     },
//     // 点击刷新
//     handleImageRefresh() {
//       this.getImgList()
//     },
//     // 标签框Element
//     querySearch(queryString, cb) {
//       var restaurants = this.restaurants
//       var results = queryString
//         ? restaurants.filter(this.createFilter(queryString))
//         : restaurants
//       // 调用 callback 返回建议列表的数据
//       cb(results)
//     },
//     // 标签框Element
//     createFilter(queryString) {
//       return (restaurant) => {
//         return (
//           restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
//           0
//         )
//       }
//     },
//     loadAll() {
//       return [
//         { value: '前端' },
//         { value: '后端' },
//         { value: 'js' },
//         { value: 'ts' },
//         { value: 'vue' },
//         { value: 'react' },
//         { value: 'node' },
//         { value: 'java' },
//         { value: 'spring' }
//       ]
//     }
//   },
//   mounted() {
//     this.restaurants = this.loadAll()
//   }
// }
