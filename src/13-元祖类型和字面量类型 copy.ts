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
 *  TS 元祖类型
 * 在ts中 "元祖"实际上就是"特殊的数组" 可以明确规定数组元素的长度 元素的类型
 */

let arr :number[]=[1,2]
arr[3] = 100 //js的数组 即使只写了两个元素 一样可以给第n个元素赋值 js的数组长度 是不固定的 所以不会报错

let arr2 :[number,number]=[1,2]
// 长度为 "2" 的元组类型 "[number, number]" 在索引 "3" 处没有元素。
arr2[3]=100 //元祖长度是固定的 只有两个元素的情况是不允许给下标3的元素赋值


/**
 * TS 字面量类型(经常和"联合类型"一起使用 尤其是字符串)
 * 可以限制类型 把类型范围收窄 书写时可以精确检查类型和精确代码提示 利用"引号" 配合vscode提示 可以查看该联合类型的所有字面量类型
 */

// 提示:let a: string
let a = "hello ts" //类型为: string

// const aa: "hello ts"
const aa = "hello ts" //类型为:"hello ts"

// 练习
interface Methods {
    url:string;
    // 字面量类型 和 联合类型结合  做一个类型的收窄和限制 意思是 methods只能是post get put 
    methods?:"post" | "get" | "put"

}
const axios = function (params:Methods) {}

axios({
    url:'xxx',
    //(property) Methods.methods?: "post" | "get" | "put" | 
    methods: 'aa' // 不按照定义传参 则报错:不能将类型“"aaa"”分配给类型“"post" | "get" | "put" | undefined”。
})