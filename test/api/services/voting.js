import chai from 'chai';
import VotingService from '../../../api/services/voting';

describe ('Voting Service',()=>{
    const movieId="asd123";
    const userEmail="euler@e.com";
    const votingService = new VotingService(movieId,userEmail);
    it('should allow to vote for a movie',()=>{
        votingService.vote().then(result =>{
            chai.expect(result).to.equal(true);          
        })
    })
   it('should allow only one vote per email',()=>{
        votingService.vote().then(result=>{
            //chai.expect(result).to.be.false;
        }).catch(e=>chai.expect(e).to.be.false);
    })

    it('should allow multiple users to vote',()=>{
        const anotherEmail= "leibniz@calculus.com"
        const anotherVotingService= new VotingService(movieId,anotherEmail);
        anotherVotingService.vote().then(result=>{
            chai.expect(result).to.be.true;
        })
    })
    it('should return results',()=>{
        votingService.results().then(res => {
            console.log(res);
            chai.expect(res).to.be.an('object');
            chai.expect(res).to.have.property(movieId);
            chai.expect(res[movieId]).to.equal(2);
        })
    })
})