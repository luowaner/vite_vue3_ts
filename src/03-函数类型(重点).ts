export { //添加导入、导出或空的 "export {}" 语句来使它局部成为模块, 不加export 则报错
}
/* 
1- TS 函数类型 给函数指定类型
    两部分 :
    函数"参数"   的类型 
    函数"返回值" 的类型
*/

//  函数 "参数" 类型 
function fn(name: string, age: number) {
    console.log(name, age);
}
// 问题1  不指定类型 则参数为any any代表类型不明确 传什么都可以 会报错
function fnError(name) {
    console.log(name);
}

// 问题2 不传参 报错内容:应有 2 个参数，但获得 0 个。
fn()
// 问题3 传1个参 报错内容:应有 2 个参数，但获得 1 个。
fn('张三')
// 正确写法 按定义函数的"参数类型"以及"个数"保持一致传参
fn('李四', 18)

// 注意: 箭头函数 只有一个形参 指定类型时 不可省略括号
const fn2 = (name: string) => {
    console.log(name);
}
fn2('张三')

//函数 " 返回值 " 类型
// 语法
function fn3(): number {
    return 99
}
// 调用
fn3().toFixed(99)  //99.00

// 箭头函数 语法
const fn4 = (): string => {
    return 'hello'
}
// 调用 如果使用非字符串api 则报错 如:属性“tofixed”在类型“string”上不存在。
fn4().tofixed(99)
fn4().toLocaleLowerCase('HI')

