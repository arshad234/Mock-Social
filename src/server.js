const express=require("express")

const models=require('./db/models')
const db=models.db

const{userRoutes}=require("./routes/users")
const{postsRoutes}=require("./routes/posts")


const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRoutes)
app.use('/api/posts', postsRoutes)
app.use('/',express.static(__dirname + "/public"))

db.sync()
  .then(()=>{
    app.listen(8383,()=>{
       console.log("Server stated on http:://localhost:8383");    
      })
   }).catch((err)=>{
        console.error(new Error("Could not start database"))
        console.error(err)
})


