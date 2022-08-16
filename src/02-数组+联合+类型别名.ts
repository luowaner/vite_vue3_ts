export { //添加导入、导出或空的 "export {}" 语句来使它局部成为模块, 不加export 则报错
}
/* 
 1-TS 数组类型
*/

// 写法1:(常用)
// string[] 字符串数组 number []  数值数组
let arr: number[] = [1, 2, 3, 4, 5]
let arrError1: number[] = ['1', '2']
let arr2: string[] = ['a', 'b']
let arrError2: string[] = [1, 2]

// 写法2:
// Array<string> 字符串数组 Array<number>  数值数组
let arr3: Array<number> = [1, 2, 3, 4, 5]
// 当一句代码多个错误时  后面提示语总是第一个错误 
let arrError: Array<number> = ['1', '2']
let arr4: Array<string> = ['a', 'b']

/* 
2- TS 联合类型
(符号为一根竖线 :  '|') : 将多个类型组合成一个联合类型 
表示数据可以是这些类型中的任意一种
 */

// 1 变量可以为 数值或者字符串的联合类型 符号为 |
let a: number | string = 1
let aa: number | string = 'hello'
let aaa: number | null | undefined = null  //可以是 "null" 或者 "数值" 或者 "undefined"
let aaaError: number | string = false 会报错: 不能将类型“boolean”分配给类型“string | number”。

// 2 既有number类型 又有 string类型 的数组类型 
// 表达式: (number | string) [] "注意类型必须括号包裹 类型不分顺序"

let arrStringError: number | string[] = [1, 'hello', 2] 会报书写的第一个类型的错 如: 不能将类型“number”分配给类型“string” ,

    let arrString: (number | string)[] = [1, 'hello', 2] // 数组只可以是"数值"或"字符串"

let arrString3: number[] | string[] = [1, 2, 3]   // 数组只可以是 "纯数值数组" 或者 "纯字符串数组"
let arrString4: number[] | string[] = ['hello', 'hi']   //数组只可以是 "纯数值数组" 或者 "纯字符串数组"


let arrString3Error: number[] | string[] = [1, '2', 3]   //数组只可以是 "纯数值数组" 或者 "纯字符串数组" 否则报错:不能将类型“(string | number)[]”分配给类型“number[] | string[]”

let arrString2: (string | number)[] = [1, 'hello', 2] // "类型不分顺序"

/* 
3 类型别名 
使用 type 关键字来创建自定义类型 别名用大写开头 遵守规范
*/

/* 如此写法繁琐又麻烦 因此可以使用类型别名
let arrString : (number | string) [] = [1,'hello',2]  
*/
type MyType = (string | number)[]

let typeEg1: MyType = [1, 2, 3, 'hello']
let typeError: MyType = false 报错: 不能将类型“boolean”分配给类型“myType”。

