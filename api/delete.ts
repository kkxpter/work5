import express from "express";
import { Movie,Person } from "../model/post";
import { conn } from "../dbconnect";
import mysql from "mysql";

export const router = express.Router();



router.delete("/movie/:id",(req,res)=>{
    const id = +req.params.id;
    let sql = "DELETE FROM movie where m_id = ?";
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json({
            affected_row : result.affectedRows
        });
    });
});

router.delete("/person/:id",(req,res)=>{
    const id = +req.params.id;
    let sql = "DELETE FROM person where p_id = ?";
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json({
            affected_row : result.affectedRows
        });
    });
});

router.delete("/stars/:m_id_fk/:p_id_fk",(req,res)=>{
    const movid = +req.params.m_id_fk;
    const perid = +req.params.p_id_fk;
    let sql = "DELETE FROM stars where m_id_fk = ? AND p_id_fk = ?";
    conn.query(sql,[movid,perid],(err,result)=>{
        if(err) throw err;
        res.status(200).json({
            affected_row : result.affectedRows
        });
    });
});

router.delete("/creators/:m_id_fk2/:p_id_fk2",(req,res)=>{
    const movid = +req.params.m_id_fk2;
    const perid = +req.params.p_id_fk2;
    let sql = "DELETE FROM creators where m_id_fk2 = ? AND p_id_fk2 = ?";
    conn.query(sql,[movid,perid],(err,result)=>{
        if(err) throw err;
        res.status(200).json({
            affected_row : result.affectedRows
        });
    });
});
