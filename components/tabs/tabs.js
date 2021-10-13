// components/tabs/tabs.js
// 此处的最外层名字变成component，而不再是page
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 接收父向子传递的数据
    },

    /**
     * 组件的初始数据
     */
    data: {
        // 存放组件自己内部的数据

        // tabs数组
        tabs: [{
                id: 0,
                name: "首页",
                isActive: true
            },
            {
                id: 1,
                name: "原创",
                isActive: false
            },
            {
                id: 2,
                name: "分类",
                isActive: false
            },
            {
                id: 3,
                name: "关于",
                isActive: false
            }
        ]
    },

    // 1.页面的js文件中存放事件的回调函数的时候，是存放在data同层级下
    // 2.组件的js文件中：存放事件回调函数时，必须存放在methods中

    methods: {
      handleitemtap(e) {
            // 1.绑定我们的点击事件：需要在methods中绑定
            // 2.获取被点击事件的索引
            // 3.对数组循环
            // 4.对数组循环：
            //①给每一个循环项：选中属性改为false
            //②给当前的索引的项添加激活选中效果

            // 获取索引
            const { index } = e.currentTarget.dataset;
            //3.获取data中的数组
            let { tabs } = this.data;
            //4.循环数组
            tabs.forEach((v, i) => i == index ? v.isActive = true : v.isActive = false);
            this.setData (
              {
                tabs
              }
            )
        }
    }
})