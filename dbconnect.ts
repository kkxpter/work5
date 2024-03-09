import mysql from "mysql";

export const conn = mysql.createPool(
    {
        connectionLimit : 10 ,//เรียกได้ 10 การเชื่อมต่อ
        host : "sql6.freemysqlhosting.net", //ของอาจารย์
        user : "sql6689906",
        password : "126lIHCCwwRA34",
        database : "sql6689906"
    }
)