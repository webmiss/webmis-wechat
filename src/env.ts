/* 模式: dev(开发) */
const mode: string = 'dev';

/* 接口 */
let baseUrl: string, socket: string;
if(mode=='dev'){
  baseUrl = 'http://127.0.0.1:9000/';
  socket = 'ws://localhost:9001/';
}else{
  baseUrl = 'https://demo-api.webmis.vip/';
  socket = 'wss://demo-api.webmis.vip/wss';
}

export default {
  name: 'WebMIS-微信小程序',  //应用名称
  baseUrl: baseUrl, //数据地址
  apiUrl: baseUrl+'api/', //数据接口地址
  keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', //加密字符
  /* 请求 */
  request:{
    headers: {
      'Content-Type':'application/json;charset=utf-8'  //表单方式
    },
  },
  /* 状态栏 */
  statusBar:{
    color: '#333',  //字体颜色
    bgColor:'#FFF'  //背景颜色
  },
  /* Login */
  login: {
    start: true,        //Token验证
    api: 'user/token',  //验证接口
    uinfo: 'uinfo',     //用户信息
    time: 3000,        //间隔时间
  },
  /* 地图 */
  amapKey: '12d2caec68d29ea17f3f578d29607d44',  //高德KEY
  /* Socket */
  socket: {
    start: false, //启动
    server: socket, //链接地址
  },
  /* 消息阅读 */
  msgRead: 300, //延迟时间：0(不开启)
  msgContent: 'content',  //阅读：title(标题)、content(内容)
}