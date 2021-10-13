Page({
  data:{
    num:0
  },
  // 输入框的input事件的执行逻辑
  handleinput(e){
    // console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    })
  },
  //加减按钮事件
  handleclick(e){
      //console.log(e);
      //获取自定义属性operation
      const operation=e.currentTarget.dataset.operation;
      this.setData({
        num:this.data.num+operation
      })
  }
})