export default function handler(req, res) {
    console.log(req.query)
    const { user } = req.query
    res.end(`Post: ${user}`)
  }