// pages/advertisingUpdate/advertisingUpdate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adData:{},
    edit:false,
    
    videoList:['晚安家居15s'],
    videoIndex:0,
    videoName:'',

    adDuration:'',
    dropScreen:'',
    billingMode:'',
    charge:'',
  }, 


  bindPickerVideoChange(e) {
    console.log(e);
    this.setData({
      videoIndex: Number(e.detail.value),
      videoName: this.data.videoList[Number(e.detail.value)]
    })
  },

  handleAdDuration(e) {
    this.setData({
      adDuration: e.detail.value
    });
  },
  
  handleDropScreen(e) {
    this.setData({
      dropScreen: e.detail.value
    });
  },

  handleBillingMode(e) {
    this.setData({
      billingMode: e.detail.value
    });
  },

  handleCharge(e) {
    this.setData({
      charge: e.detail.value
    });
  },
  
  handleSure(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options.adData){
      let temp = JSON.parse(options.adData);
      this.setData({
        adData:temp,
        edit:true,
        videoName: temp.videoName,
        adDuration: temp.adDuration,
        dropScreen: temp.dropScreen,
        billingMode: temp.billingMode,
        charge: temp.charge,
      });
    }
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