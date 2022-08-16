export { //添加导入、导出或空的 "export {}" 语句来使它局部成为模块, 不加export 则报错
}
/*  常用小技巧 : 把"类型定义"写到等号左边更友好
可以正常书写js基本结构 利用变量说明没有指定类型的报错 const add2: (a: any, b: any) => any 鼠标悬停变量上 复制一下报错提示 用于定义类型别名 大驼峰 */
type AppType = (a: number, b: number) => number
const add4: AppType = (a, b) => {
    return a + b
}

/**
 * TS 对象类型
*/

// 1-对象的属性
type ObjType = {
    name: string;
    age: number;
}
let obj1: ObjType = {
    name: '张三',
    age: 18
}
// 报错内容:不能将类型“number”分配给类型“string”。
obj1.name = 18

/**
 * 2-对象的可选属性
*/
type ObjType2 = {
    age: number;
    name: string;
    gender?: string;//属性后面带个问号? 就是可选属性的意思
}

let obj: ObjType2 = {
    age: 18,
    name: '王五',
    gender: '男'
}

// 若少传了属性 报错内容:类型 "{ age: number; name: string; }" 中缺少属性 "gender"，但类型 "ObjType2" 中需要该属性。
// 此时可以把这些可传可不传的属性写成可选属性 避免报错
let obj2: ObjType2 = {
    age: 18,
    name: '王五',
}

//需求 axios({...}) method可写可不写 
type AxiosType = {
    url: string
    method?: string
}
const axios = (params: AxiosType) => {
    // 传入axios的配置项 method可省略
}

axios({
    url: 'xxx',
    method: 'get'
})
axios({
    url: 'xxx',
})