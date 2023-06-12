/* 获取DOM信息 */
export default (self: any, dom: any, callback: any)=>{
  const query = wx.createSelectorQuery();
  query.in(self);
  query.select(dom).boundingClientRect();
  query.selectViewport().scrollOffset();
  query.exec((res)=>{
    return callback(res);
  });
}