const{Posts,Users}=require('../db/models')

async function createNewPost(userId,title,body){
     const post=await Posts.create({
         title,
         body,
         userId,
     })

     return post
}


async function findallPosts(query){

    // TODO:Handle query params
      const posts=await Posts.findAll({
          include:[Users] //This is possibloe only if we have one to many relationship 
      })
      return posts
}


// async function task(){
//     // console.log(await createNewPost(1,'This is a sample post','Body of goes here')),
//     // console.log(await createNewPost(2,'This is a sample post2','Body2 of goes here'))

//     const posts=await showallPosts()
//     for(let p of posts){
//         console.log(`${p.title}\nauthor:${p.user.username}\n${p.body}\n=========\n`)
//     }
// }

// task()

module.exports={
    createNewPost,
    findallPosts
}



