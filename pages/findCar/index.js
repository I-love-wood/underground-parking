// pages/findCar/index.js
Page({
  data: {
    focus: false,
    inputValue: '',
    show: false,
    isFindCarSet: null
  },
  //点击确定跳转最后一个页面
  goFinalPage(){
    wx.redirectTo({
      url: '../page1/page1',
    })
  },
  scanQrcode() {
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
    wx.redirectTo({
      url: '../finalPage/index',
    })
  },
  onClickLeft(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  onClose: function(){
    this.setData({ show: false });
  },
  inputQrnum: function(){
    this.setData({
      show:true
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let pages = getCurrentPages(); //页面对象
    let prevpage = pages[pages.length - 2]; //上一个页面对象
    console.log(prevpage.route)
    if(prevpage.route == "pages/map/index"){
      this.setData({
        isFindCarSet:true
      })
    }else{
      this.setData({
        isFindCarSet:false
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})