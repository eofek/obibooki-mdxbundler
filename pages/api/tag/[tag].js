import { allPosts } from 'contentlayer/generated'
import Clear from '@/components/utils/Diacritics'

export default async function (req, res) {
    const {tag, apiKey, length} = req.query
    const unslugged = tag.replace(/-/g, ' ')

    
    const allSorted = allPosts.sort((a, b) => {
        return (new Date(b.date) - new Date(a.date))
      })  

    const filtered = allSorted.filter((post) => {
        const low = post.tags.map((tag) => Clear(tag).replace('ł', 'l').toLowerCase())
        return low.includes(unslugged)
    })

    const end = parseInt(length)+9
    const posts = filtered.slice(length, end)

    if(apiKey !== process.env.NEXT_PUBLIC_API_KEY){
        return res.status(401).send("go get yourself a life")
    }
    res.status(200).json(posts)
}