var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var	newText = 'Zielone słonie';
var newText = newText.toUpperCase();
var textRepleced = text.replace('Papugi', newText)
var textReplacedHalf = textRepleced.substring(0, 45);

alert(textReplacedHalf);
