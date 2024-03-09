import mysql from "mysql";

export const conn = mysql.createPool(
    {
        connectionLimit : 10 ,//เรียกได้ 10 การเชื่อมต่อ
        host : "localhost", //ของอาจารย์
        user : "work5",
        password : "1234",
        database : "work5"
    }
)