### 安装

首先通过npm安装

```bash
npm i wx-quark-table -S
```

在小程序开发工具中构建npm



#### 使用

```json
{
  "usingComponents": {
    "quark-table":"wx-quark-table/quark-table"
  }
}
```



#### 参数说明

> columns

```js
{
	width: [optional] String, // 列宽 eg: '200px'
    class: [optional] String, // 自定义列样式类名称
    slot: [optional] true|false, //是否使用插槽
    slotScope: [required if slot=true] String, //插槽名字
    dataIndex: [required] String, //列数据在object中的key,支持‘.’连接
    title: [required] String //表格列标题
}
```

>data

数据列表， 每一个数据是一个Object

> extClass

一个Object，用于自定义表格的各个部分样式

```js
{
    header: '表格标题的整体样式类1 表格标题的整体样式类2',
    headerItem:'表格标题每一个元素的样式',
    row:'每一个行的样式'
}
```



#### 使用案例

js

```js
  data: {
    goodsHistoryColumns:[
      {
        dataIndex:'company.name',
        title:'企业',
        width: '90px'
      },
      {
        dataIndex:'inUseCount',
        title:'在用数',
        width: '40px',
        class:'red'
      },
      {
        dataIndex:'consumeCount',
        title:'消耗数',
        width: '40px'
      },
      {
        dataIndex:'processedCount',
        title:'加工个数',
        width: '50px'
      },
      {
        slot:true,
        slotScope: 'action',
        title:'操作',
        width: '30px'
      }
    ],
    goodsHistoryData:[
      {company:{name:'企业A'},inUseCount:23,consumeCount:34,processedCount:231},
      {company:{name:'企业B'},inUseCount:12,consumeCount:2,processedCount:56},
      {company:{name:'企业C'},inUseCount:4,consumeCount:2,processedCount:23},
      {company:{name:'企业D'},inUseCount:43,consumeCount:22,processedCount:122},
    ],
    goodsClass:{
      header: '',
      headerItem:'',
      row:''
    }
  },
```

wxml

```xml
  <quark-table 
    columns="{{goodsHistoryColumns}}"
    data="{{goodsHistoryData}}"
    extClass="{{goodsClass}}"
  >
    <!-- 所有的slot都必须包裹在for循环内 -->
    <block wx:for="{{goodsHistoryData}}" wx:for-index="idx">
      <!-- 针对slotScope='action' 的插槽，需要添加行号 -->
      <view slot="action{{idx}}">
        行{{idx+1}}
      </view>
    </block> 
  </quark-table>
```

wxss

```css
.red {
  color:red;
}
```



预览效果

![预览效果](https://ftp.bmp.ovh/imgs/2021/01/22823d179f61245f.png)