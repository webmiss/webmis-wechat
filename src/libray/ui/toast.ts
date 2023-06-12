/* UI-提示 */
export default (text:string, time:number=3000)=>{
  return wx.showToast({title:text, duration:time, icon:'none'});
}