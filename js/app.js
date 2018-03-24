function lotto() {
// ---------------------------------------------------------------------------- ROUGH DRAFT
// BASIC SENTENCE STRUCTURE
// Parts of Sentences: Subject, Predicate, Object, Indirect Object, Complement

var subject = ['Asian Parents', 'Aliens', 'Asperger\'s Syndrome', 'Attention whore', 'As a friend', 'Villiage idiot', 'Affirmative action', 'Avenged sevenfold'];
var suject_total = subject.length;
var subject_random = Math.floor(Math.random() * suject_total);

var predicate = ['grow older every day', 'remains happy during her', 'would be perfect for', 'are perplexing when', 'is convincingly', 'is introspectively', 'smells piney and clean in', 'were ready, willing and able to'];
var predicate_total = predicate.length;
var predicate_random = Math.floor(Math.random() * predicate_total);

var object = ['berate', 'criticize', 'calculate', 'emphasize', 'collaborate', 'bathe', 'floss', 'urinate'];
var object_total = object.length;
var object_random = Math.floor(Math.random() * object_total);

var ind_object = ['the floor', 'inside the car', 'on the roof', 'in the kitchen', 'while in the bathroom', 'at college', 'near the park', 'on a boat'];
var ind_object_total = ind_object.length;
var ind_object_random = Math.floor(Math.random() * ind_object_total);

var compliment = ['with style and grace.', 'being excellently poised.', 'swung and a miss.', 'deeply coveted huggingly.', 'poised willingly.', 'ambidextrously challenged.', 'unilaterally screwed.', 'and went good night.'];
var compliment_total = compliment.length;
var compliment_random = Math.floor(Math.random() * compliment_total);

var sentance = subject[subject_random] + ' ' + predicate[predicate_random] + ' ' + object[object_random] + ' ' + ind_object[ind_object_random] + ' ' + compliment[compliment_random];

document.getElementById("wordbox").innerHTML = sentance;
// ---------------------------------------------------------------------------- ROUGH DRAFT
}
