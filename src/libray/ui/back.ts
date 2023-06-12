/* UI-返回 */
export default (num:number)=>{
  wx.navigateBack({delta:num});
}