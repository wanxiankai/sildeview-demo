import getSafeAreaBottom from '../../utils/comm/getSafeAreaBottom';  
import { mockdata } from './mockdata.js';

const EMPTY_ADDRESS = "https://s.freshtxp.com/attachment/731898a6-6013-4c53-a330-fec8d68fa021.png";
const CHOOSE_ICON = "https://s.freshtxp.com/attachment/080e2ee9-33cf-4a02-bc1b-8022ef0e3b82.png";
const EDIT_ICON = "https://s.freshtxp.com/attachment/a4e9e6e8-c214-4a0c-b3a2-64ea4b67bb39.png";
const slideButtons = [{
  type: 'warn',
  text: '删除',
  extClass: 'silde-btn',
}];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    EMPTY_ADDRESS,
    CHOOSE_ICON,
    EDIT_ICON,
    type:"list", //决定当前列表是用于展示还是选择 list/choose
    safeAreaBottom: getSafeAreaBottom(),
    slideButtons,
    addressList: [],
    addressId: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({ type, checkInfoMode }) {
    // console.log("mockdata",mockdata)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.fetchListData();
  },
  /**
   * 初始化数据 
   **/
  fetchListData() {
    // 调用后端接口获取对应的数据，这里简单模拟一下
    this.setData({
      addressList:mockdata.data
    })
  },
  /**
   * 滑动删除 
   **/
  slideButtonTap({
    target: {
      dataset: {
        addressId
      }
    }
  }) {
    let param = {
      id: addressId
    }
  console.log("拿到对应的ID调用删除接口，需要注意的是接口调用成功之后还需要继续初始化一下当前列表")
  },

  /**
   * 选择地址 
   **/

  chooseAddress({
    currentTarget: {
      dataset: {
        addressId
      }
    }
  }) {
    // 如果支持列表选择的话，这里就是调用选择api接口
  },

  /**
   * 编辑地址 
   **/
  editAddress({
    currentTarget: {
      dataset: {
        addressId
      }
    }
  }) {
    // 这里拿到ID之后作为参数拼接到编辑页面url后面，在编辑页面初始化地址信息进行编辑
    console.log("编辑id:",addressId)
  },

  /**
   * 添加地址 
   **/

  addAddress() {
    console.log("跳转新增页面")
  },
})