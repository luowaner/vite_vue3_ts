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
 *  TS 枚举类型  (表示一组明确可选类型)
 *  作用: 提高代码可读性
 * 语法:  enum  枚举名 {
 *          枚举1=枚举值, 
 *          枚举2=枚举值,
 * }
 * ts中其他类型会在编译为js代码是自动移除  只有枚举类型会保留 最终依然编译为js代码
 */

/* 
    枚举 -- 基本类型
    需求:用户性别  男 女 未知
        后端参数   1  0  -1
*/
enum Gender {
    girl = 0, //可以指定为数值 或者字符串
    boy = 1,
    unKnown = -1
}

const query = {
    gender : Gender.boy
}

console.log(query.gender,'性别参数');

// 枚举 -- 数字枚举
// 枚举的成员是有值的 默认为 从 0 开始自增的数值 称为数字枚举 枚举成员可以初始化值
enum Gender2 {
    girl, //枚举如果没有赋值 默认为从0开始自增的数值
    boy,
    unKnown
}