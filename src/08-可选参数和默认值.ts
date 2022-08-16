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
    ts  可选参数 符号为问号 ? 
    当参数携带问号? 表示参数可传可不传
    书写要求 必传参数必须写在可选参数的前面 有顺序要求 否则报错
*/
const fn = (start,end) => {
    console.log('执行某个任务');
    
}
fn()
fn(1)
fn(1,3)

// fn2 形参 可传可不传 参数数量不固定
const fn2 = (start?:number,end?:number) => {
    console.log('执行某个任务');
    
}
//结果 可传1个或者2个参数 也可以不传参数
fn2()
fn2(1)
fn2(1,3)

/* 
    ts  参数默认值
*/

// fn3 形参 可传可不传 参数数量不固定
const fn3 = (start = 0,end = 100):void => {
    console.log('执行某个任务');
    
}
fn3() //不传则为默认值
fn3(1) // start覆盖为1  end不传则为默认值100
fn3(1,3) // start 覆盖默认值为1  end覆盖默认值为3