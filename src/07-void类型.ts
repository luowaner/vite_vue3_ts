export { //添加导入、导出或空的 "export {}" 语句来使它局部成为模块, 不加export 则报错
}
/* 
1- TS 函数类型 给函数指定类型
    两部分 :
    函数"参数"   的类型 
    函数"返回值" 的类型
*/
/*  常用小技巧 : 把"类型定义"写到等号左边更友好
可以正常书写js基本结构 利用变量说明没有指定类型的报错 const add2: (a: any, b: any) => any 鼠标悬停变量上 复制一下报错提示 用于定义类型别名 大驼峰 */
type AppType = (a: number, b: number) => number
const add4: AppType = (a, b) => {
    return a + b
}

/* 
void 类型 
js  函数如果没有"返回值" 默认返回"undefined"  
TS  函数如果没有"返回值" 返回的是"void"
    "undefined"也可以作为ts的类型 一般项目中不会主动指定
*/
const fn = () : void => {
    console.log('执行某个任务');
    
}