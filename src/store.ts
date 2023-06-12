export default {

  /* 数据 */
  data: {
    isLogin: false,     // 登录状态
    socket: null,       // Socket
    uInfo: {},          // 用户信息
    imgState: false,    // 切图状态
    imgSrc: '',         // 缓存图片
    geolocation:{},             // 定位信息
    uMsg: {scroll:null, group:[],num:'',id:'',name:'',msg:[],content:''},  // 消息
    uNotify: {},                // 通知
  },

  /* 监听 */
  listener(self:any, name:string, Callback:any, time:number=1000){
    self.time = setInterval(()=>{
      let state: boolean = self.store.data[name];
      if(state){
        self.store.data[name] = false;
        self.update();
        clearInterval(self.time);
        Callback();
      }
    }, time);
  },

}