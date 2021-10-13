Page({
  // onload页面一加载就会执行
  // 官方写法
  onLoad:function(){
    console.log("官方onload1执行");
    this.young1();
   // this.young2();
    this.young3("young3");
    this.add(10,20);
  },
  // 官方onload函数简写
  // onLoad(){
  //   console.log("onload2执行");
  // }
  
  // 函数的两种定义方法
  young1(){
    console.log("我是第一张定义函数的方式:简易版");
  },
  young2:function(){
    console.log("我是第二种定义函数的方法:复杂版");
  },
  young3(name){
    console.log("传进来的name是：",name);
  },
  add(num1,num2){
    console.log("a+b的和是：",num1+num2);
  },
  getname1(){
    console.log("点击了text组件，执行力getname1函数");
  },
  getname2(){
    console.log("点击了view组件，执行力getname2函数");
  },
  getname3(){
    console.log("点击了button组件，执行力getname3函数");
  },
  getcontent(neirong){
    //console.log("获取用户事件信息");
    //打印用户输入信息
    console.log("用户输入的内容是：",neirong.detail.value);
  }
})