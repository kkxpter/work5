import express from "express";
import { conn } from "../dbconnect";
import { Movie } from "../model/post";

export const router = express.Router();

router.get("/", (req, res) => {
    const name = req.query.name;
    const sql =`SELETE movie.*
    FROM movie 
    LEFT JOIN stars ON movie.m_id = stars.m_id_fk
    LEFT JOIN person ON stars.p_id = person.p_id
    LEFT JOIN creators ON movie.m_id = creators.m_id_fk2
    LEFT JOIN person AS creators_person ON creators.p_id_fk2 = creators_person.p_id
    WHERER (movie.m_name IS NULL OR movie.name LIKE ?)
    GROUP BY movie.m_id; `;

    conn.query(sql,["%" + name + "%"],(err,result)=>{
      if(err){
        res.status(400).json(err);
      }
      else{
        res.json(result);
      }
    });
});

    
    // const search = [req.query.m_id,"%" + req.query.title + "%"]
    // conn.query(sql,search,(err,result)=>{
    //   if(err){
    //     res.json(err);
    //   }
    //   else{
    //     const movie: Movie[] = result.map((row:Movie) =>{
    //       return {
    //         m_id: row.m_id,
    //         m_detail: row.m_detail,
    //         m_year: row.m_year
            // stars: row.actors
            //   ? row.actors.split(",").map((actor)=>{
            //     const [ p_id,p_name,p_img,p_brithday] = actor.split(" ");
            //     return { p_id,p_name,p_img,p_brithday};
            //   })
            // :[]
            // ,

            // creator: row.creator
            // ? row.creator.split(",").map((creator) =>{
            //     const [p_id,p_name,p_img,p_brithday] = creator.split(" ");
            //     return{ p_id,p_name,p_img,p_brithday};
            // })
            // :[],
//           };
//         });
//         res.json(movie);
//       }
//     });
// });
  