import store from '../../store'
import create from '../../libray/store/create'
import { Back } from '../../libray/ui/index'

const app: any = getApp<IAppOption>();
const w: number = app.globalData.screenWidth - 80;

create(store,{
  data:{
    isLogin: false,
    uInfo: {},
    param: {
      src:'',               // 图片地址
      width: w,             // 裁切宽度
      height: w,            // 裁切高度
    },
  },
  /* 加载 */
  onLoad(e:any){
    // 参数
    // this.setData({['param.src']:'https://file03.16sucai.com/2017/1100/16sucai_P591F3A055.JPG'});
    if(e.src) this.setData({['param.src']:e.src});
    if(e.width) this.setData({['param.width']:e.width});
    if(e.height) this.setData({['param.height']:e.height});
    // 初始化
    this.cropper = this.selectComponent("#image-cropper");
    wx.showLoading({ title: '加载中' });
    // 缓存图片
    this.store.data.imgSrc = '';
    this.update();
  },
  /* 销毁 */
  onUnload(){
    // 状态
    this.store.data.imgState = true;
    this.update();
  },

  /* 加载完成 */
  loadImage(){
    wx.hideLoading();
    this.cropper.imgReset();
  },

  /* 点击放大 */
  clickCut(e:any){
    wx.previewImage({current: e.detail.url,  urls: [e.detail.url]});
  },

  /* 保存图片 */
  subData(){
    // 裁切
    this.cropper.getImg((res:any)=>{
      this.store.data.imgSrc = res.url;
      this.update();
      return Back(1);
    });
  },

});