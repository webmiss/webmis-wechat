/* UI-跳转页面 */
export default (url:string, parm?:any)=>{
  // 参数
  parm = parm || '';
  let str: string = '?';
  if(parm){
    for(let i in parm) str += `${i}=${parm[i]}&`;
    url += str;
  }
  // 跳转
  return wx.navigateTo({url: url});
}