import VotingService from '../services/voting'
const vote = (req,res)=>{
    const id = req.swagger.params.voteRequest.value.movieId;
    const email= req.swagger.params.voteRequest.value.userEmail;
    const votingService = new VotingService(id,email);

    votingService.vote().then(result=>{
        res.json(result)
    }).catch(error=>res.json(error));
}

module.exports = {
    vote,
}