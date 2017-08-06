// pages/cctv/index.js
var com = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cctvlist:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    function day (str,pd){
      if(pd==false){
        str=str+1
      }
      if(str.toString.length<2){
        str="0"+str
      }else{
        str=str
      }
      return str
    }
    console.log(com)
    let that = this
    // https://ahh5.com/pa.php?type=cctv&mydata=20170804
    // let mydata =
    let date = new Date()
    let mydata = date.getFullYear()+""+day(date.getMonth(),false)+day(date.getDate(),true)
    wx.request({
      url: 'https://www.ahh5.com/pa.php',
      method: 'GET',
      header: {
         'content-type': 'application/json'
     },
      data: {
        type: "cctv",
        mydata:mydata
      },
      success: function (res) {
        let data = res.data
        for(let i in data){
          data[i].liveSt=com.mytime(data[i].liveSt)
          data[i].channelName=com.zhuan(data[i].channelName)
          // data[i].isLive=com.zhuan(data[i].isLive)
        }
        that.setData({
          cctvlist:data
        })
        wx.setStorage({
          key:"cctvlist",
          data:data,
          success:function(res){
            console.log(res)
            // wx.getStorage({
            // key: 'cctvlist',
            // success: function(res) {
            //   console.log(res.data)
            // }
            // })
          }
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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
