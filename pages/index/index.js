//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    status:1,//用户广告投放状态（0表示没有广告投放，1表示广告投放在排序中，2表示有广告投放历史）
    list:[{
      time:'昨日投放',
      num:987
    },
    {
      time: '2020-06-13',
      num: 1021
    }]
  },
  
  onLoad () {
    //随机一种状态
    this.setData({
      status: Math.floor(Math.random() * (3 - 0)) + 0
    });
  },

  handleToProfitDetail(){
    wx.navigateTo({
      url: '/pages/profitDetail/profitDetail',
    })
  },
  
})
