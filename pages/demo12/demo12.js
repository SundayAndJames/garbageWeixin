Page({
  data:{
    get_sex:"",
    list:[
      {
        id:0,
        name:"๐",
        value:"๐"
      },
      {
        id:1,
        name:"๐",
        value:"๐"
      },
      {
        id:2,
        name:"๐",
        value:"๐"
      },
      {
        id:3,
        name:"๐",
        value:"๐"
      }
    ],
    checkedlist:[]
  },
  // ๅค้ๆก็้ไธญไบไปถ
  checkchange(e){
        // console.log(e);
        // ่ทๅ่ขซ้ไธญ็ไบไปถ็ๅผ
        const checkedlist=e.detail.value;
        this.setData({
          checkedlist:checkedlist
        }
        )
  },
  handlechange(e){
    // 1ใ่ทๅๅ้ๆกไธญ็ๅผ
    let get_sex=e.detail.value;
    // 2.ๅงๅผ่ตๅผ็ปdataไธญ็ๆฐๆฎ
    this.setData({
      get_sex:get_sex
    })
  }
})