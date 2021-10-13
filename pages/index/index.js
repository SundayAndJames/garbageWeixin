//获取应用实例
const app=getApp()

Page({
    data:{
      tempFilePaths:'',
      hidden:true,
      nocancel:true,
      image_url:'',
      result:''
    },

    // 定义函数：confirm
    confirm:function(){
      this.setData({
        hidden:!this.data.hidden,
        result:''
      });
    },
    // 定义chooseimage函数
    chooseimage:function(){
      // that作为中间变量来进行该函数内对this的操作
      var that=this;
      // 弹出选项:wx小程序自带功能
      wx:wx.showActionSheet({
        // 此处定义可以弹出的选项
        itemList: ['拍照','从相册中选择','键盘输入','语言输入'],
        itemColor: '#00bfff',
        success: function(res){
          if(!res.cancel){
            // 如果没有点击取消按钮
            if(res.tapIndex==0){
              // 启动系统相机
              that.chooseimage('camera')
            }
            // 访问系统相册
            else if(res.tapIndex==1){
              that.chooseimage('album')
            }
            // 打开键盘输入垃圾物品名
            else if(res.tapIndex==2){
              that.chooseimage('键盘输入')
            }
            // 打开语言输入模块识别语言输入的内容
            else if(res.tapIndex==3){
              that.chooseimage('语音输入')
            }
          }
        }
      })
    },
    // chooseWxImage:function(type){
    //   var that=this;
    //   wx.chooseImage({
    //     sizeType:['original','compressed'],
    //     sourceType:[type],
    //     success:function(res){
    //       console.log(res);
    //       that.uploadImg(res.tempFilePaths[0])
    //       that.setData({
    //         tempFilePaths:res.tempFilePaths[0],
    //         hidden:false
    //       })
    //     },
    //   })
    // },
    // uploadImg:function(filePath){
    //   var that=this;
    //   wx.uploadFile({
    //     filePath: 'filePath',
    //     name: 'file',
    //     url: 'http://127.0.0.1:5000/classification',
    //     success:function(res){
    //       that.setData({
    //         result:unescape(res.data.replace(/\\/g,"%"))
    //       })
    //     }
    //   })
    // }
})