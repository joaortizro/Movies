
const vote = (req,res)=>{
    const id = req.swagger.params.voteRequest.value.movieId;
    console.log(id);
    res.json("test");
}

module.exports = {
    vote
}