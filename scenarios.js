/* global _ data */

var scenarios = {};

scenarios["irv-spoiler"] = {};
scenarios["irv-spoiler"].name = "IRV Spoiler";
scenarios["irv-spoiler"].description = "Competitive independent Dr Pepper is popular with Pepsi voters. Pepsi will win without Dr Pepper in the race. A split in 1st-choice votes between Pepsi and Dr Pepper causes both Pepsi and Dr Pepper to lose in IRV.";
scenarios["irv-spoiler"].candidates = ["none", "Coke", "Pepsi", "Dr Pepper"];
scenarios["irv-spoiler"].ballots = [
		{name: "Coke Only", choices: ["Coke", "none"], count: 48},
		{name: "Pepsi > Coke", choices: ["Pepsi", "Coke"], count: 3},
		{name: "Pepsi > Dr Pepper", choices: ["Pepsi", "Dr Pepper"], count: 19},
		{name: "Dr Pepper > Pepsi", choices: ["Dr Pepper", "Pepsi"], count: 30}
	];
	
scenarios["bullet"] = {};
scenarios["bullet"].name = "Bullet Voting";
scenarios["bullet"].description = "Competitive independent Dr Pepper is popular with Pepsi voters and has some support from Coke voters. Dr Pepper wins in Approval if all voters are honest, but some Pepsi voters strategically leave Dr Pepper off their ballots to give Pepsi the Approval win.";
scenarios["bullet"].candidates = ["none", "Coke", "Pepsi", "Dr Pepper"];
scenarios["bullet"].ballots = [
		{name: "Coke only (honest)", choices: ["Coke", "none"], count: 43},
		{name: "Coke > Dr P (honest)", choices: ["Coke", "Dr Pepper"], count: 5},
		{name: "Pepsi > Dr P (honest)", choices: ["Pepsi", "Dr Pepper"], count: 22},
		{name: "Pepsi only (strategic)", choices: ["Pepsi", "none"], count: 10},
		{name: "Dr P > Pepsi (honest)", choices: ["Dr Pepper", "Pepsi"], count: 20},
	];
	
scenarios["center-squeeze"] = {};
scenarios["center-squeeze"].name = "Center Squeeze";
scenarios["center-squeeze"].description = "Centrist Dr Pepper is popular with both Pepsi and Coke voters and has a preferential majority. Dr Pepper is squeezed by cautious Coke/Pepsi voters in plurality and is eliminated in the first IRV round.";
scenarios["center-squeeze"].candidates = ["none", "Coke", "Pepsi", "Dr Pepper"];
scenarios["center-squeeze"].ballots = [
		{name: "Coke First", choices: ["Coke", "Dr Pepper"], count: 35},
		{name: "Pepsi First", choices: ["Pepsi", "Dr Pepper"], count: 33},
		{name: "Dr Pepper > Pepsi", choices: ["Dr Pepper", "Pepsi"], count: 22},
		{name: "Dr Pepper > Coke", choices: ["Dr Pepper", "Coke"], count: 10}
	];
	
scenarios["burlington"] = {};
scenarios["burlington"].name = "Burlinton VT 2009";
scenarios["burlington"].description = "The 2009 mayoral election in Burlington, VT, is an oft-cited example of a non-monotonicity failure. To see the failure, increase 'K > W' to 1124, reduce 'W > K' to 0, and reduce 'W' to 1031. Increasing support for Kiss causes Kiss to lose / Decreasing support for Montroll causes Montroll to win.";
scenarios["burlington"].candidates = ["none", "Montroll", "Kiss", "Wright"];
scenarios["burlington"].ballots = [
		{name: "M > K", choices: ["Montroll", "Kiss"], count: 1332},
		{name: "M > W", choices: ["Montroll", "Wright"], count: 767},
		{name: "M", choices: ["Montroll", "none"], count: 455},
		{name: "K > M", choices: ["Kiss", "Montroll"], count: 2043},
		{name: "K > W", choices: ["Kiss", "Wright"], count: 371},
		{name: "K", choices: ["Kiss", "none"], count: 568},
		{name: "W > M", choices: ["Wright", "Montroll"], count: 1513},
		{name: "W > K", choices: ["Wright", "Kiss"], count: 495},
		{name: "W", choices: ["Wright", "none"], count: 1289}
	];

function loadScenario(key) {
	//data.candidates = scenarios[key].candidates;
	//data.candidates = _.map(scenarios[key].candidates, function(c) { return c; });
	//data.ballots = scenarios[key].ballots;
	//data.ballots = _.map(scenarios[key].ballots, function(b) { return b; });
	data.candidates = JSON.parse(JSON.stringify(scenarios[key].candidates));
	data.ballots = JSON.parse(JSON.stringify(scenarios[key].ballots));
}