export { //添加导入、导出或空的 "export {}" 语句来使它局部成为模块, 不加export 则报错
}
/*  开发技巧 : 把"类型定义"写到等号左边更友好
可以正常书写js基本结构 利用变量说明没有指定类型的报错 const add2: (a: any, b: any) => any 鼠标悬停变量上 复制一下报错提示 用于定义类型别名 大驼峰 */
type AppType = (a: number, b: number) => number
const add4: AppType = (a, b) => {
    return a + b
}

/**
 * 开发技巧 当不确定这个函数是否需要传参 利用vscode悬停提示查看类型推论结果 内涵vscode的内置手册
 * */ 
// 随机生成小数 0-1之间不包括1
Math.random()  
/* 鼠标悬停提示 :(method) Math.random(): number 表示不需要传参  
(method)    表示 方法(函数)
:number 表示返回值为数值
 */


/**
 * TS  接口类型
 * interface 和 type 都可以用于定于对象结构
 */

// interface vs type
interface ObjType {
    name:string
    age:number
}
type ObjType2 = {
    name:string
    age:number
}

/**
 * TS  接口继承 extends
 */
interface Point2D{
    x:number
    y:number
}
/* interface Point3D{
    x:number
    y:number
    z:number
} */

//extends 继承
interface Point3D extends Point2D {
    z:number
}
// 测试结果 实现继承
let obj : Point3D = {
    x:10,
    y:20,
    z:20
}

/**
 *   type 结合 & 实现继承
 *   & 符号可以让 type 也实现类似 interface 继承效果
 */

type P2D = {
    x:number 
    y:number
}

type P3D = P2D & {Z : number}

// 测试结果  type 结合 & 实现继承
let obj2 : P3D = {
    x:1,
    y:2,
    Z:3
}