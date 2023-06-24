const express = require('express')
const app = express();
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');




const cors = require('cors')
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors())



const mysql = require('mysql')
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    database: "userinfo",
    password: "root"
})



///sign data accessing.................

app.post('/data', (req, res) => {
    let sql = 'insert into signdata values (?)'
    values = [
        req.body.name, req.body.email, req.body.password
    ]

    pool.query(sql, [values], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
    })
})


///login data accessing................
var id;

app.post('/login', (req, res) => {
    let sql = 'select * from signdata where userid= (?) and password=(?)'
    console.log("enter in", req.body.userid, req.body.password)
      id=req.body.userid;
    pool.query(sql, [req.body.userid, req.body.password], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length > 0) {

            
            res.json("success")

           
        
            var groupid
            app.get("/getpopup",(req,res)=>{
            
                console.log("login id differ",id)
                sql="select groupname,groupid from groupdetails where userid=(?) "
                pool.query(sql,[id] ,(err, results) => {
                    if (err) {
                      return res.json(err)
                      }
                       res.json(results)
                       console.log(results)
                     })
             })

             
         app.post("/popup",(req,res)=>{
           
                                 sql="insert into groupdetails values(?) "
            valu=[
                id,req.body.groupid,req.body.groupname,"yes"
            ]
            pool.query(sql, [valu], (err, results) => {
                       if (err) {
                         throw err
                         }
                          
                        })

                        let sql1="insert into friends values (?)"
            
                         val=[
                            req.body.groupname,
                            id,
                            id,
                            req.body.groupid
                         ]
                      pool.query(sql1,[val])


                })
    

            
             
            
        
         app.post("/getfriendname",(req,res)=>{

            sql="select friendname from friends where groupid=(?) "
            
            groupid=req.body.id
            
            
            pool.query(sql,[req.body.id],(err,result)=>{
                if(err)
                {
                   throw err
                }
                
                res.json(result)
                console.log("get:",result)
            })
            })
        
         app.post("/friendname",(req,res)=>{
            
          
           
           
          
           
           value=[
                req.body.groupname,
                req.body.friendname,
                id,
                req.body.id
            ]
            
            sql="insert into friends values(?)"
            pool.query(sql,[value],(err,result)=>{
                if(err)
                {
                    throw err
                }
            })
           

           let sql1="insert into groupdetails values(?)"
           
           
          
            val=[
                req.body.friendname,
                req.body.id,
                req.body.groupname,
                "no"
            ]
            pool.query(sql1,[val])
         

           
           
         })
         app.get("/getfriendname",(req,res)=>{

            sql="select friendname from friends where groupid=(?) "
            
            pool.query(sql,[groupid],(err,result)=>{
                if(err)
                {
                   throw err
                }
                
                res.json(result)
                console.log("raj",result)
            })
            })
         
         app.post("/expenceadd",(req,res)=>{
            console.log(groupid)
            console.log(req.body.expencename)
            console.log(req.body.groupname)
            console.log(req.body.amount)
            var arr=req.body.selected
            console.log(arr)
            sql="insert into expence values(?)"
            values=[
                id,
               
                req.body.groupname,
                req.body.expencename,
                req.body.amount,
                groupid,
                req.body.paidperson,
                req.body.date
            ]
            pool.query(sql,[values],(err,result)=>{
                if(err)
                {
                    throw err
                }
            })
            let amount= (req.body.amount/arr.length).toFixed(2);
            for(let i=0;i<arr.length;i++)
            {
                sql ="insert into involedpeople values(?)"
                value=[
                    groupid,arr[i],req.body.paidperson,req.body.expencename,id,req.body.amount,amount,req.body.groupname
                ] 
                pool.query(sql,[value],(err,result)=>{
                    if(err)
                    {
                        throw err
                    }
                })
            }
         })

         app.post("/expenceget",(req,res)=>{
            let groupname=req.body.groupname
            sql="select expencename,amount,date,paidperson from expence where groupid=(?)"
            pool.query(sql,[groupid],(err,result)=>{
                if(err)
                {
                    throw err
                }
                res.json(result)
                console.log(result)
            })
            app.get("/expenceget",(req,res)=>{
                console.log(groupname)
                sql="select expencename,amount,date,paidperson from expence where groupid=(?) "
                pool.query(sql,[groupid],(err,result)=>{
                    if(err)
                    {
                        throw err
                    }
                    res.json(result)
                })
             })
            

         })
        
         app.post("/delete",(req,res)=>{
            sql='delete from groupdetails where groupid=(?) and userid=(?)'
         
            pool.query(sql,[req.body.groupid,id],(err=>{
                if(err)
                throw err
            }))
            let sql1="delete from friends where groupid=(?) and friendname=(?)"
            pool.query(sql1,[req.body.groupid,id])
            // let sql2="delete from expence where groupid=(?) and userid=(?)"
            // pool.query(sql2,[req.body.groupid,id])

         })
         app.post("/deletefriend",(req,res)=>{
            
            sql='delete from friends where friendname=(?) and groupid=(?)'

            pool.query(sql,[req.body.friendname,groupid],(err,result=>{
                if(err)
                {
                    throw err
                }
                res.json(result)
            }))
         })
         var expencename;
         app.post("/deleteExpence",(req,res)=>{
            expencename=req.body.expencename
            console.log(id)
            console.log(req.body.expencename)
            console.log(groupid)
            sql="delete from expence where expencename=(?) and groupid=(?)"
            pool.query(sql,[req.body.expencename,groupid],(res=>{
                if(err)
                {
                    throw err
                }
            }))
            let  sql1="delete from involedpeople where involvedid=(?) and expencename=(?) and groupid=(?)"

            pool.query(sql1,[id,req.body.expencename,groupid])
            
            
            
         })
        
         app.post("/getSelectedData",(req,res)=>{
            console.log(groupid)
            console.log(req.body.expencename)
            sql="select expencename,involvedid,paidto,amount,paidperson from involedpeople where groupid=(?) and expencename=(?)"
            pool.query(sql,[groupid,req.body.expencename],(err,result)=>{
                if(err)
                {
                    throw err
                }
                res.json(result)
                console.log("datain",result)
            })
        })
        
       app.get("/fetchdata",(req,res)=>{
        console.log(id)
        console.log(groupid)
        sql="select * from involedpeople where  groupid=(?)"
        pool.query(sql,[groupid],(err,result)=>{
            if(err)
            {
                throw err
            }
            res.json(result);
            console.log(result)
        })
       })

        }
        else {
            res.json("false")
        }
    })
})

app.get("/signinfo",(req,res)=>{
    sql="select userid from signdata"
    pool.query(sql,(err,result)=>{
        if(err)
        {
            throw err
        }
        res.json(result)
    })
})




app.listen(8000, (err) => {
    if(err)
    {
        throw err
    }
    console.log("server running");
})