// pages/videoUpload/videoUpload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:null,

    uploadData:null,
  },

  handleVideo(){
    wx.chooseImage({
      success:(res)=>{
        this.data.tempFilePaths = res.tempFilePaths;
        
        //上传代码（成功后给把给uploadData赋值,当前为模拟值）
        this.setData({
          uploadData:{
            name:'晚安家居（6585748）',
            duration:'15s',
            imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597054007850&di=396b6097334fec9ed6b069c8e406c046&imgtype=0&src=http%3A%2F%2Fcdn4.hbimg.cn%2Fstore%2Fwm%2Fbigfiles%2F201130%2F887FDEBCE4C699B282F5D5C74AA787.jpg',
          }
        });

        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success:(res)=> {
        //     const data = res.data
        //     //do something
        //   }
        // })
      }
    })
  },

  submit(){
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
    //   filePath: this.data.tempFilePaths[0],
    //   name: 'file',
    //   formData: {
    //     'user': 'test'
    //   },
    //   success:(res)=> {
    //     const data = res.data
    //     //do something
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})