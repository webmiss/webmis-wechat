Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    value: {type: String, value: ''},
    type: {type: String, value: 'text'},            //类型: textarea、text
    maxlength: {type: Number, value: -1},           //最大长度: 默认
    placeholder: {type: String, value: '请输入'},   //提示: 无
    width: {type: String, value: '100%'},           //宽度: '100%'
    maxWidth: {type: String, value: 'auto'},        //宽度: '100%'
    height: {type: String, value: '48px'},          //高度: '48px'
    lineHeight: {type: String, value: '48px'},      //行高: '48px'
    padding: {type: String, value: '0 10px'},       //间距: '0 10px'
    align: {type: String, value: ''},               //文本对齐方式: 'left'
    borderColor: {type: String, value: ''},         //边框
    borderRadius: {type: String, value: '4px'},     //边框圆角: '4px'
    bgColor: {type: String, value: '#F2F2F2'},      //背景颜色: ''
    color: {type: String, value: ''},               //文本颜色: ''
    fontSize: {type: String, value: '16px'},        //文本大小: '14px'
    disabled: {type: Boolean, value: false},        //是否禁用
    readonly: {type: Boolean, value: false},        //是否读写
    clearable: {type: Boolean, value: false},       //一键清空
    bottonText: {type: String, value: ''},          //右侧按钮
  },
  attached(){
  },
  data: {
  },
  methods: {

    /* 值 */
    inputVal(e: any){
      this.triggerEvent('input', e.detail);
    },

  }
})
