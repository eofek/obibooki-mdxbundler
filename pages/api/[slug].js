import { getAllFilesFrontMatter } from "../../lib/mdx";


export default async function (req, res) {
    const allPosts = await getAllFilesFrontMatter()

    const {slug} = req.query
    const {apiKey} = req.query
    const sorted = allPosts.sort((a, b) => {
        return (new Date(b.date) - new Date(a.date))
      })
    
      const end = parseInt(slug)+9
      const posts = sorted.slice(slug, end)
    console.log("ile: " + slug)
    if(apiKey !== process.env.NEXT_PUBLIC_API_KEY){
        return res.status(401).send("go get yourself a life")
    }
    res.status(200).json(posts)
}