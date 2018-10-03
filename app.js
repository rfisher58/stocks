let stockList = ["aapl", "msft", "goog", "tsla", "amzn", "fb", "nke", "sne", "tm", "f",]

const baseURL = "https://api.iextrading.com/1.0/"




const bGen = function(){
	$("#stocks").empty();
	for(let i = 0; i < stockList.length; i++){
		$("#stocks").append(`<button class='button' value=${stockList[i]}> ${stockList[i]}</button>`);
	}
}

valList = [];


$("#stocks").on("click",".button",function(){
	
	let stock = $(this).val();

	$.ajax({
		url: baseURL + `stock/${stock}/company`,
		method: "GET"
	
	}).then(function(response){

		console.log(response)
		$("#stockI").append(`<p class = "name">${response.companyName}</p>`)
		$("#stockI").append(`<p class = "CEO">CEO: ${response.CEO}</p>`)
		$("#stockI").append(`<p class = "exchange"> Exchange: ${response.exchange}</p>`)
		$("#stockI").append(`<p class = "website"><a href=${response.website}>${response.website}</a></p>`)
		$("#stockI").append(`<p class = "description">${response.description}</p>`)
		news(response.symbol);
	})
	
})


let news = function(stock){

	$.ajax({
		url: baseURL + `/stock/${stock}/news`,
		method: "GET"
	}).then(function(response){
		console.log(response)
		for(let i = 0; i < response.length; i++){
			$("#news").append(`<div class="card" style="width: 18rem;">
			<div class="card-body">
			  <a href = ${response[i].url} target="_blank" class="card-title">${response[i].headline}</a>
			  <p class="card-text">${response[i].summary}</a>
			</div>
		  </div>`)
		}
	})

}

// let add = function(){
// 	let stockN = $("#stock-input").val();
// 	if(valList.inlcudes(stockN)){
// 		<button class = "buttonN">stockN</button>
// }


let verify = function(){
	
	$.ajax ({
		url:`https://api.iextrading.com/1.0//ref-data/symbols`,
		method: "GET"
	
	}).then(function(response){
		valList.push(response[i].symbol)

	})
}

bGen();
verify();