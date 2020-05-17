// 处理iphonX 等几款全面屏手机底部按钮与bar重叠的情况
export default ()=>{
  const { model } = wx.getSystemInfoSync()

  if (['iPhone X', 'iPhone XR', 'iPhone 11'].some(m => model.includes(m))){
    return 68
  }else {
    return 0
  }
}