// minipages/binding/binding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"王大锤",
    age: 18,
    students:[
      { id: 11, name: '妹妹1', age: 21 },
      { id: 12, name: '妹妹2', age: 22 },
      { id: 13, name: '妹妹3', age: 23 },
      { id: 14, name: '妹妹4', age: 24 },
    ],
    counter:0
  },
  tapHandler(){
    //console.log('被点击了');
    //下面是变更数据错误的做法
    //this.data.counter += 1;
    this.setData({
      counter: this.data.counter + 1
    })
  },

  subHandler(){
    if(this.data.counter>0){
      this.setData({
        counter:this.data.counter -1
      });
    }
    
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