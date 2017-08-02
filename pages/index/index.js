// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytext:"",
    mydata:[
      {
        type:"user",
        text:"你好"
      },
      {
        type: "feifei",
        text: "我不好"
      }
    ]
  },
  bindinput:function(e){
    this.setData({
      mytext: e.detail.value
    })
  },
  mysend:function(){
    this.data.mydata.push({type:"user",text:this.data.mytext})
    // console.log(tmp)
    let text = this.data.mytext
    let that =this
    this.setData({
      mydata: this.data.mydata,
      mytext:""
    })
    wx.request({
      url: 'https://www.ahh5.com/i',
      method: 'GET',
      header: {
         'content-type': 'application/json'
     },
      data: {
        key: "free",
        appid: "0",
        msg: encodeURI(text)
      },
      success: function (res) {
        let rex=/{br}/g
        let text = res.data.content
        console.log(text)
        // if(text.test(rex)){
        //   // text = text.replace(rex,"\n")
        // }
        // tmp = tmp.replace(/{face:.*}/g,"")
        that.data.mydata.push({type:"feifei",text:text})
        that.setData({
          mydata: that.data.mydata
        })
      },
      fail: function (res) { },
      complete: function (res) { },
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
