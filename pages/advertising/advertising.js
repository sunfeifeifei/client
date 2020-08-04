// pages/advertising/advertising.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adData:[
      {
        orderNo: '5287485',
        videoName: '晚安家居15s',
        adDuration: '15s',
        dropScreen: '100',
        billingMode: '199元/月',
        launchTime:'2020-05-21',
        deadline:'2020-09-20',
        charge: '￥199',
        launched:'1212',
        status:'审核中'
      },
      {
        orderNo: '5287485',
        videoName: '晚安家居15s',
        adDuration: '25s',
        dropScreen: '100',
        billingMode: '399元/月',
        launchTime: '2020-05-21',
        deadline: '2020-09-20',
        charge: '￥199',
        launched: '1212',
        status: '审核中'
      },
      {
        orderNo: '5287485',
        videoName: '晚安家居15s',
        adDuration: '30s',
        dropScreen: '100',
        billingMode: '2199元/月',
        launchTime: '2020-05-21',
        deadline: '2020-09-20',
        charge: '￥199',
        launched: '1212',
        status: '审核中'
      },
      {
        orderNo: '5287485',
        videoName: '晚安家居15s',
        adDuration: '5s',
        dropScreen: '100',
        billingMode: '99元/月',
        launchTime: '2020-05-21',
        deadline: '2020-09-20',
        charge: '￥199',
        launched: '1212',
        status: '审核中'
      }, 
      {
        orderNo: '5287485',
        videoName: '晚安家居15s',
        adDuration: '15s',
        dropScreen: '100',
        billingMode: '199元/月',
        launchTime: '2020-05-21',
        deadline: '2020-09-20',
        charge: '￥199',
        launched: '1212',
        status: '审核中'
      }
    ],
  },
  
  handleUpdate(e){
    console.log(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '/pages/advertisingUpdate/advertisingUpdate?adData=' + JSON.stringify(e.currentTarget.dataset.item),
    })
  },
  handleAdd(){
    wx.navigateTo({
      url: '/pages/advertisingUpdate/advertisingUpdate',
    })
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