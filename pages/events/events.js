// pages/events/events.js
Page({
  clickMe(e){
    console.log(e);
  },
  /**
   * 页面的初始数据
   */
  data: {
    articles:[
      {
        "id":1,
        "title":"文章1"
      },
      {
        "id": 2,
        "title": "文章2"
      },
      {
        "id": 3,
        "title": "文章3"
      },
      {
        "id": 4,
        "title": "文章4"
      }
    ]
  },
  /**
   * 文章点击事件
   */
  onTabArticle: function(e) {
    //console.log(e)
    var dataset = e.currentTarget.dataset;
    console.log(dataset.title)
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