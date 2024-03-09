import express, { json } from "express";
import { Movie,Person } from "../model/post";
import { conn } from "../dbconnect";
import mysql from "mysql";

export const router = express.Router();

router.post("/movie",(req,res)=>{
    const movie: Movie = req.body;
    let sql = "INSERT INTO `movie`(`m_name`,`m_img`,`m_detail`,`m_year`,`m_rating`)VALUES(?,?,?,?,?)";
    sql = mysql.format(sql,[movie.m_name,movie.m_img,movie.m_detail,movie.m_year,movie.m_rating]);
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(201).json({
            affected_row: result.affectedRows,
            last_idx: result.insertID,
        });
    });
});

router.post("/person",(req,res)=>{
    const per: Person = req.body;
    let sql = "INSERT INTO `person`(`p_name`,`p_img`,`p_brithday`)VALUES(?,?,?)";
    sql = mysql.format(sql,[per.p_name,per.p_img,per.p_brithday]);
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(201).json({
            affected_row: result.affectedRows,
            last_idx: result.insertID,
        });
    });
});

router.post("/stars/:idmov/:idper",(req,res)=>{
    const per: Person = req.body;
    const movid = req.params.idmov;
    const perid = req.params.idper;

    let checkmov = "SELECT * FROM `movie` WHERE `m_id` = ?";
    conn.query(checkmov,[movid],(checkMovieErr,checkMovieresult)=>{
        if(checkMovieErr){
            throw checkMovieErr;
        }
        if(checkMovieresult.length === 0){
            return res
            .status(404)
            .json({ success: false,message:"Movie not found" });
        }
        let sql = "INSERT INTO `stars`(`m_id_fk`,`p_id_fk`) VALUES(?,?)";
        sql = mysql.format(sql,[movid,perid]);
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.status(201).json({
                affected_row: result.affectedRows,
                last_idx: result.insertID,
            });
        });
    });
});


router.post("/creators/:m_id_pk2/:p_id_pk2",(req,res)=>{
    const per: Person = req.body;
    const movid = req.params.m_id_pk2;
    const perid = req.params.p_id_pk2;

    let checkmov = "SELECT * FROM `movie` WHERE `m_id` = ?";
    conn.query(checkmov,[movid],(checkMovieErr,checkMovieresult)=>{
        if(checkMovieErr){
            throw checkMovieErr;
        }
        if(checkMovieresult.length === 0){
            return res
            .status(404)
            .json({ success: false,message:"Movie not found" });
        }
    })
    let sql = "INSERT INTO `creators`(`m_id_fk2`,`p_id_fk2`) VALUES(?,?)";
    sql = mysql.format(sql,[movid,perid]);
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(201).json({
            affected_row: result.affectedRows,
            last_idx: result.insertID,
        });
    });
});