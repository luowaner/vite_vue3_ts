
/**
 *  TS 枚举类型  (表示一组明确可选类型)
 *  作用: 提高代码可读性
 * 语法:  enum  枚举名 {
 *          枚举1=枚举值,
 *          枚举2=枚举值,
 * }
 *
 */
/*
    枚举 -- 基本类型
    需求:用户性别  男 女 未知
        后端参数   1  0  -1
*/

//  注意: ts中其他类型会在编译为js代码是自动移除  只有枚举类型会保留 最终依然编译为js代码
var Gender;
(function (Gender) {
    Gender[Gender["girl"] = 0] = "girl";
    Gender[Gender["boy"] = 1] = "boy";
    Gender[Gender["unKnown"] = -1] = "unKnown";
})(Gender || (Gender = {}));
var query = {
    gender: Gender.boy
};
console.log(query.gender, '性别参数');
// 枚举 -- 数字枚举
// 枚举的成员是有值的 默认为 从 0 开始自增的数值 称为数字枚举 枚举成员可以初始化值
var Gender2;
(function (Gender2) {
    Gender2[Gender2["girl"] = 0] = "girl";
    Gender2[Gender2["boy"] = 1] = "boy";
    Gender2[Gender2["unKnown"] = 2] = "unKnown";
})(Gender2 || (Gender2 = {}));
