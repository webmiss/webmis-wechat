export default {
  /* 保存 */
  setItem(key:string, data:string){
    return wx.setStorage({key:key, data:data});
  },
  /* 获取 */
  getItem(key:string){
    return wx.getStorageSync(key);
  },
  /* 清除 */
  clear(){
    return wx.clearStorageSync();
  },
}