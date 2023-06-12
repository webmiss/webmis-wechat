import store from '../../store'
import create from '../../libray/store/create'
import Start from '../../libray/Start'

import {NavigateTo} from '../../libray/ui/index'

// const app = getApp<IAppOption>();

create(store, {
  data: {
    /* 状态 */
    isLogin: false,
    uInfo: {},
    socket:null,
    // 底部导航
    tabBar: {active:0},
  },
  onShow(){
  },
  onLoad() {
    // 初始化
    Start.init(this);
  },

  /* 切换导航 */
  navTab(e: any){
    this.setData({['tabBar.active']:e.detail});
  },

  /* 测试 */
  Demo(){
    NavigateTo('../demo/demo',{id:123,sn:456});
  },

})
