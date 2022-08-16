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
 * 2-对象的方法类型  本质上就是个函数
 * fn2: () => void;
 * fn3(): void;
*/

type ObjType2 = {
    name: string;
    age: number;
    fn: () => void;
    fn2: (a: number, b: number) => number;
    fn3(str: string): void; //定义的时候就要把形参类型指定
}
let obj2: ObjType2 = {
    name: '李四',
    age: 18,
    fn: () => { },//箭头函数/匿名函数 this指向不明 很少用
    fn2: function (a, b) {
        return a + b
    },//有名函数
    fn3(str) { }, //es6写法

}
obj2.fn()
obj2.fn2(1, 2)
obj2.fn3('1')