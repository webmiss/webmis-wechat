Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    checked: {type: Boolean, value: false},
  },
  attached(){
  },
  data: {
  },
  methods: {

    /* 状态 */
    click(){
      let val: boolean = !this.data.checked;
      this.setData({checked: val});
      this.triggerEvent('checked', {value: val});
    },

  }
})
