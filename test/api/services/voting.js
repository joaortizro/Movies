import chai from 'chai';

describe ('Voting Service',()=>{
    const movieId="asd123";
    const userEmail="euler@e.com"

    it('should allow to vote for a movie',()=>{
        VotingService.vote(movieId,userEmail).then(result=>{
            expect(result).to.not.be.false;
        })
    })
    it('should allow only one vote per email',()=>{
        VotingService.vote(movieId,userEmail).then(result=>{
            expect(result).to.not.be.true;
        })
    })
    it('should return results',()=>{
        VotingService.results().then(res => {
            expect(res).to.be.an('object');
            expect(res).to.have.property('movieId',movieId);
            expect(res).to.have.property('count',1);
        })
    })
    
})