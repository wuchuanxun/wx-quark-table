// components/smart-table/smart-table.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    columns:{
      type:Array,
      value:[]
    },
    data:{
      type:Array,
      value: []
    },
    extClass:{
      type: Object,
      value:{}
    }
  },

  options: {
    multipleSlots: true,
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
