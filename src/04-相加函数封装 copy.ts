export { //添加导入、导出或空的 "export {}" 语句来使它局部成为模块, 不加export 则报错
}
/* 
1- TS 函数类型 给函数指定类型
    两部分 :
    函数"参数"   的类型 
    函数"返回值" 的类型
*/

function add(a: number, b: number): number {
    return a + b
}
add(11, 22).toFixed(1) //33.0
add(Number('11'), Number('22')) //33 若是获取输入框的值等情况 可以先转number再传参

// 箭头函数 
const add2 = (a: number, b: number): number => {
    return a + b
}

const res = add2(1, 2).toFixed(1)
console.log(res);

