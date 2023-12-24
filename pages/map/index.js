
Component({
  data: {
    array1:["a","b","c"]
  },
  methods: {
    btn2(){
      wx.navigateTo({
        url: "../findCar/index",
      })
    }
  },
})
