import store from '../../store'
import create from '../../libray/store/create'
import {Back} from '../../libray/ui/index'

create(store,{
  data:{
    isLogin: false,
    uInfo: {},
    lists:[0,1,2],
  },
  /* 分享 */
  onShareAppMessage(res: any){
    return {title:'',path:'',imageUrl:''};
  },
  /* 加载 */
  onLoad(e: any){
  },

  /* 返回 */
  back(e: any){
    let name = e.currentTarget.dataset.swipe || e.detail;
    if(name=='left') return Back(1);
  },

  /* 下拉刷新 */
  reFresh(e: any){
    this.setData({ lists: [0,1,2,3,4,5,6,7,8,9] });
  },

  /* 上拉加载 */
  upLoad(e: any){
    setTimeout(()=>{
      let list = this.data.lists;
      for(let i=0; i<10; i++) list.push(i);
      this.setData({ lists: list });
    },1000);
  }

});