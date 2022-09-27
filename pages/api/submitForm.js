

export default function submitForm(req,res) {


    if (req.method === "POST") {


        const payload = req?.body

        console.log(payload)
        
        return res.json({msg:  "Its a post!"})
    }

    return res.status(500).json({msg: "not a post"})

} 