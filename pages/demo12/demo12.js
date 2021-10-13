Page({
  data:{
    get_sex:"",
    list:[
      {
        id:0,
        name:"🍎",
        value:"🍎"
      },
      {
        id:1,
        name:"🍌",
        value:"🍌"
      },
      {
        id:2,
        name:"🍇",
        value:"🍇"
      },
      {
        id:3,
        name:"🍊",
        value:"🍊"
      }
    ],
    checkedlist:[]
  },
  // 复选框的选中事件
  checkchange(e){
        // console.log(e);
        // 获取被选中的事件的值
        const checkedlist=e.detail.value;
        this.setData({
          checkedlist:checkedlist
        }
        )
  },
  handlechange(e){
    // 1。获取单选框中的值
    let get_sex=e.detail.value;
    // 2.吧值赋值给data中的数据
    this.setData({
      get_sex:get_sex
    })
  }
})