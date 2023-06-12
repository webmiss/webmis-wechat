Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    width: {type: String, value: '100%'},           //宽度
    height: {type: String, value: '48px'},          //高度
    padding: {type: String, value: '0 20px'},       //内部间距
    margin: {type: String, value: '0 4px'},         //外部间距
    borderRadius: {type: String, value: '4px'},     //圆角
    bgColor: {type: String, value: 'auto'},         //背景颜色
    color: {type: String, value: 'auto'},           //文本颜色
    fontSize: {type: String, value: '16px'},        //文字大小
    disabled: {type: Boolean, value: false},        //是否禁用
  },
})
