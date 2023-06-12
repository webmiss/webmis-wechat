import Env from '../env'
import Toast from './ui/toast'
import Post from './request/post'
import Storage from './storage'
import Socket from './Socket'

/* 启动 */
export default {

  self: null,

  /* 初始化 */
  init(self){
    this.self = self;
    /* 登录验证 */
    if(Env.login.start){
      this.tokenState(1);
      clearInterval(this.tokenInterval);
      this.tokenInterval = setInterval(()=>{
        this.tokenState(0);
      },Env.login.time);
    }
    /* 消息推送 */
    if(Env.socket.start) Socket.start(this.self);
  },

  /* 登录验证 */
  tokenState(uinfo){
    const token = Storage.getItem('token');
    if(token){
      Post(Env.login.api, {token:token,uinfo:uinfo}, (res)=>{
        const d = res.data;
        if(d.code==0){
          this.self.store.data.isLogin = true;
          if(d[Env.login.uinfo]){
            this.self.store.data.uInfo = d.uinfo;
          }
          this.self.update();
        }else{
          Toast(d.msg);
          this.logout();
        }
      }, ()=>{
        Toast('请检测网络!');
      });
    }else{
      this.logout();
    }
  },

  logout(){
    this.self.store.data.isLogin = false;
    this.self.store.data.uInfo = {};
    this.self.update();
    Storage.setItem('token','');
  },

}