// pages/swiper/swiper.js
Page({
  data: {
    imgs: [
      {url: '/img/banner1.png'},
      {url: '/img/banner1.png'},
      {url: '/img/banner1.png'} 
    ],
    currentSwiper: 0,
    circular:true,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  }
})