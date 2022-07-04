import { getAllFilesFrontMatter } from "../../lib/mdx";

export default async function (req, res) {
    const allPosts = await getAllFilesFrontMatter()

    const {apiKey} = req.query
    const sorted = allPosts.sort((a, b) => {
        return (new Date(b.date) - new Date(a.date))
      })
    
     
      const counted = sorted.length

    if(apiKey !== process.env.NEXT_PUBLIC_API_KEY){
        return res.status(401).send("go get yourself a life")
    }
    res.status(200).send(counted)
}