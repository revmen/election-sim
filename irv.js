/* global _ */
/* global totalBallots */

function irvWinner(candidateList, ballots) {
    var candidates = _.reject(candidateList, function(c) {
        return c === "none";
    });
    
    var candidates = _.map(candidates, function(name) {
        var candidate = {};
        candidate.name = name;
        candidate.count = 0;
        candidate.ballots = [];
        
        _.forEach(ballots, function(b) {
            if (name === b.choices[0]) {
                candidate.ballots.push(b);
                candidate.count += b.count;
            }
        });
        
        return candidate;
    });
    
    var maxThreshold = _.floor(totalBallots()) + 1;
    var max = irvMax(candidates);
    
    for (var counter=0; counter < candidates.length - 2; counter++) {
        
        if (max >= maxThreshold || candidates.length < 3) {
            break;
        }
        
        var lowest = _.minBy(candidates, function(c) {
            return c.count;
        });
        
        var min = lowest.count;
        
        var losers = _.filter(candidates, function(c) {
            return c.count === min;
        });
        
        if (losers.length >= candidates.length - 1) {
            break;
        }
        
        candidates = _.pullAll(candidates, losers);
        
        _.forEach(losers, function(l) {
            _.forEach(l.ballots, function(b) {
                for (var i=0; i<b.choices.length; i++) {
                    var cIndex = _.findIndex(candidates, function(c) {
                        return c.name === b.choices[i];
                    });
                    
                    if (cIndex > -1) {
                        candidates[cIndex].ballots.push(b);
                        candidates[cIndex].count += b.count;
                        break;
                    }
                }
            });
        });
        
        max = irvMax(candidates);
    }
    
    var winners = _.filter(candidates, function(c) {
        return c.count === max;
    });
    
    if (winners.length === 1) {
        return winners[0].name;
    }
    
    var txt = "";
    _.forEach(winners, function(w) {
        txt += w.name + " ";
    });
    
    return txt + "(Tie)";
    
}

function irvMax(candidates) {
    var highest = _.maxBy(candidates, function(c) {
        return c.count;
    });
    return highest.count;
}