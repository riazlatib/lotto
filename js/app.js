// ----------------------------------------------- Ready Stage
jQuery(document).ready(function() {

  // Init setup
  lotto_gen();

  // On click event
  jQuery('#button').on('click', function() {
    lotto_gen();
  });
});
// ----------------------------------------------- Ready Stage

// ----------------------------------------------- Lotto number generator
function lotto_gen() {
  var set_one = Math.floor(Math.random() * 53);
  var set_two = Math.floor(Math.random() * 53);
  var set_three = Math.floor(Math.random() * 53);
  var set_four = Math.floor(Math.random() * 53);
  var set_five = Math.floor(Math.random() * 53);
  var set_six = Math.floor(Math.random() * 53);

  var numbers = set_one.toString() + set_two.toString() + set_three.toString() + set_four.toString().toString() + set_five.toString() + set_six.toString();

  jQuery('.lotto_numbers').val(numbers);

  // Number format mask
  var cleave = new Cleave('.lotto_numbers', {
    blocks: [2,2,2,2,2,2],
    uppercase: true
  });
}
// ----------------------------------------------- Lotto number generator
