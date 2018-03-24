jQuery(document).ready(function() {

  var set_one = '11';
  var set_two = '22';
  var set_three = '33';
  var set_four = '44';
  var set_five = '55';
  var set_six = '66';

  var numbers = set_one + set_two + set_three + set_four + set_five + set_six;

  jQuery('.lotto_numbers').val(numbers);

  var cleave = new Cleave('.lotto_numbers', {
    blocks: [2,2,2,2,2,2],
    uppercase: true
  });
});
