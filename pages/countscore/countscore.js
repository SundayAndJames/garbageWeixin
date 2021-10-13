var num=''
Page({
  data:{
    nums:[1,2,3,4],
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff'
  },
  onLoad(){
    this.setData({
      nbTitle:"数组元素增删系统",
      nbLoading:true,
      nbFrontColor:'#ffccdd',
      nbBackgroundColor:'#aaa000',
    })
  },
  //获取用户输入的内容
  getnum(event){
    console.log(event.detail.value);
    //num=event.detail.value-'0'
    //讲用户输入的数据通过parseint函数转成数字
    num=parseInt(event.detail.value);
  },
  //往数组中增加元素
  add(){
      var nums2=this.data.nums;
      console.log("获取数组：",this.data.nums);
      //console.log("要操作的数字是",num);
      nums2.push(num);
      console.log("增加元素之后的数组为:",nums2);
      this.setData({
        nums:nums2
      })
  },
  //删除数组中的用户输入的元素
  delete(){
    var arr=this.data.nums;
    /*for(var i=0;i<arr.length;i++){
      console.log(arr[i],'\n')
    }*/
    var nums3=[];
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i]!=num)
        nums3.push(arr[i]);
    }
    console.log("删除元素后的数组为:",nums3);
    this.setData({
      nums:nums3
    })
  }
})