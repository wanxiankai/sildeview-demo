# sildeview-demo

> 这个demo主要是展示如何使用微信的WeUI组件库实现左滑删除功能，以及在使用过程中需要注意的地方。

#### 效果展示
![image](https://upload-images.jianshu.io/upload_images/3728798-bb82f87a386581c9.gif?imageMogr2/auto-orient/strip)

#### 填坑总结
这里需要注意一点的是，如果你和我一样也需要在列表上层展示其他的元素，例如添加按钮，则需要将这个元素的`z-index`设置大于10，因为我查看了一下`slideview`组件的样式发现它设置的是`z-index:10`，如果你不设置自己的元素的`z-index`大于10，那么就会被覆盖掉，导致元素无法被看到。
