//logs.js
var TAG = 'logs.js'
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    console.log(TAG + ' | onLoad | options -> ' + options)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function () {
    console.log(TAG + ' | onReady')
  },
  onShow: function () {
    console.log(TAG + ' | onShow')
  },
  onHide: function () {
    console.log(TAG + ' | onHide')
  },
  onUnload: function () {
    console.log(TAG + ' | onUnload')
  },
  onPullDownRefresh: function () {
    console.log(TAG + ' | onPullDownRefresh')
  },
  onReachBottom: function () {
    console.log(TAG + ' | onReachBottom')
  },
  onShareAppMessage: function () {
    console.log(TAG + ' | onShareAppMessage')
  },
})
