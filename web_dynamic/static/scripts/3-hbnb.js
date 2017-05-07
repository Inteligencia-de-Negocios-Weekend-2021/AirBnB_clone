$(document).ready(function () {
  console.log('Javascript is ready');
  get_api_status();
  get_places_list();
  let amenityChecklist = [];
  $('ul li input[type=checkbox].amen_chxbox').change(function () {
    let item_checked = $(this).attr('data-id');
    if (this.checked && $.inArray(item_checked, amenityChecklist) === -1) {
      amenityChecklist.push(item_checked);
    } else {
      amenityChecklist.splice(amenityChecklist.indexOf(item_checked), 1);
    }
    $('#amenity_h4').html(amenityChecklist.length > 0 ? '<em>' + amenityChecklist.join(', ') + '</em>' : '&nbsp;');
  });
});

/** API_STATUS **/
function get_api_status(){
  $.get('http://0.0.0.0:5001/api/v1/status/', (data, error) => {
	if (data.status === "OK")
        $('#api_status').addClass('available');
	else
		$('#api_status').removeClass('available');
  });
}
/** Get Places Lists **/
function get_places_list(){
  $.ajax('http://0.0.0.0:5001/api/v1/places_search/', {
	data: JSON.stringify({}),
	headers: {'Content-Type': 'application/json'},
	type: 'POST', 
	success: (data) => {
		for (key of data) {
			$('.places').append("<article>" +
			'<div class="price_by_night">$' + key.price_by_night + '</div>' +
			'<h2>' + key.name + '</h2>' +
			'<div class="informations">' +
				'<div class="max_guest">' + key.max_guest + ' Guests</div>' +
				'<div class="number_rooms">' + key.number_rooms + ' Rooms</div>' +
				'<div class="number_bathrooms">' + key.number_bathrooms + ' Bathrooms</div>' +
			'</div>' +
			'<div class="user"><b>Owner</b>: ' + key.owner + '</div>' +
			'<div class="description">' + key.description + '</div>' +
			'</article>');

			console.log(key);
		}
	},
	error: (error) => { console.log(error) }
	});
}
