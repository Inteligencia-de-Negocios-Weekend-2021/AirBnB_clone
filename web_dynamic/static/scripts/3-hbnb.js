$(document).ready(function () {
  console.log('Javascript is ready');
  get_api_status();
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
