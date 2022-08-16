export { }
// js 无类型注解 
let age
age = 19
age = 'hello'

// age.toFixed(2) 

// ts 类型注解  对变量进行约束 语法 变量 : 类型
// 普通类型:  number/string/boolean/null/undefined symbol (注意 : 全小写)
let a: number = 2.34

a.toFixed(2)