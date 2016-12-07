function approvalWinner(candidateList, ballots) {
	var results = _.reject(candidateList, function(c) {
		return c === "none";
	});
	
	results = _.map(results, function(c) {
		var r = {name: c, count: 0};
		
		for (var i=0; i < ballots.length; i++) {
		    for (var j=0; j < ballots[i].choices.length; j++) {
		        if (r.name === ballots[i].choices[j]) {
		            r.count += ballots[i].count;
		        }
		    }
		}
		
		return r;
	});
	
	var winner = _.maxBy(results, function(r) {
		return r.count;
	});
	
	var winners = _.filter(results, function(r) {
		return r.count === winner.count;
	});
	
	if (winners.length > 1) {
		var txt = "";
	    _.forEach(winners, function(w) {
	        txt += w.name + " ";
	    });
    
    	return txt + "(Tie)";
	} else {
		return winner.name;
	}
};