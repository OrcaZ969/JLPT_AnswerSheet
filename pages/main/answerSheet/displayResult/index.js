// pages/main/answerSheet/displayResult/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markByPart:[0,0,0],
    rightAnswerByPart:[0,0,0],
    wrongAnswer:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages()
    var prePage = pages[pages.length - 2]
    console.log(prePage)
    console.log(prePage.data.answer)
    this.data.markByPart[0] = (prePage.data.markByPart[0] * 1.0 / 59 * 60).toFixed(2)
    this.data.markByPart[1] = (prePage.data.markByPart[1] * 1.0 / 55 * 60).toFixed(2)
    this.data.markByPart[2] = (prePage.data.markByPart[2] * 1.0 / 56 * 60).toFixed(2)
    this.setData({
      markByPart:this.data.markByPart,
      rightAnswerByPart:prePage.data.rightAnswerByPart,
      wrongAnswer:prePage.data.wrongAnswer,
    })
  },

  displayMistakes:function(e){
    wx.navigateTo({
      url: 'displayMistake/index',
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