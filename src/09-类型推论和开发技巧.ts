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
    ts  类型推论
    在"变量"或者"函数形参" 初始化时 根据 赋值 作"类型推论" 
    开发过程尽量利用类型推论 简化类型注解 可省则省 提高开发效率

    鼠标悬停在变量/常量上 利用vscode自动提示类型
*/

// 类型推论结果 : let name : string  繁琐的类型注解
let name = '张三'  //利用类型推论 简化类型注解
name.trim() // 类型推论name为string类型 可以使用字符串的api

// 类型推论结果 : let age: number
let age = 18
age.toFixed(2)

// 类型推论结果 : let isNum: boolean
let isNum = false
isNum = true

const fn = (a : number , b : number ): number => {
    return a + b
}

// 类型推论结果 : const fn2: (a?: number, b?: number) => number
const fn2 = ( a = 1,b = 2) => {
    return a + b
}
// const fn3: () => void
const fn3 = () => {
    console.log('执行某个业务');

}

/**
 * 开发技巧 当不确定这个函数是否需要传参 利用vscode悬停提示查看类型推论结果 内涵vscode的内置手册
 * */ 
// 随机生成小数 0-1之间不包括1
Math.random()  
//鼠标悬停提示 :(method) Math.random(): number 表示不需要传参  
// (method)    表示 方法(函数)
// :number 表示返回值为数值