const $optionsPanel = $("#options-panel")
const $hotelSelect = $optionsPanel.find("#hotel-choices")
const $restaurantSelect = $restaurantPanel.find("#restaurant-choices")
const $activitySelect = $activityPanel.find("#activity-choices")

$optionsPanel.on("click", "button", function(){

	$.ajax({
		method: 'POST',
		url: '/api/hotels',
		data: {
			id: 1
		}
	})
	.then(function(){
		console.log('hi')
	})
	.catch(function(err) {
		console.log(err)
	})



})

$hotelSelect.next().on("click", "button", function(){

	$.ajax({
		method: 'POST',
		url: '/api/hotels',
		data: {
			id: $(this).val()
		}
	})
	.catch(function(err) {
		console.log(err)
	})
})

$restaurantSelect.on("click", "button", function(){
	$.ajax({
		method: 'POST',
		url: '/api/hotels',
		data: {
			id: $(this).val()
		}
	})
	.catch(function(err) {
		console.log(err)
	})
})



$activitySelect.on("click", "button", function(){

	$.ajax({
		method: 'POST',
		url: '/api/activities',
		data: {
			id: $(this).val()
		}
	})
	.catch(function(err) {
		console.log(err)
	})
	
})



// to submit with ajax, just do $.ajax({
// 	method: 'POST',
// 	url: '/api/hats',
// 	data: {
// 		kind: kindInput.val()



// 		res.status(201).json(createdHat)

// 		.catch(function (err {
// 			next(err)
// 		}))
// 	}
// }')