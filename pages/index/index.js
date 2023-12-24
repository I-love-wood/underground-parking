Component({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    show:false
  },
  methods: {
    clickFind (e){
      wx.showModal({
        title: '提示',
        content: '已为你规划好停车位，是否前往',
        success (res) {
          if (res.confirm) {
            wx.redirectTo({
              url: '../map/index',
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    clickFindCar(){
      wx.navigateTo({
        url: '../findCar/index',
      })
    },
    onClose (){
      // this.setData({ show: false });
    }
  },
  
})
