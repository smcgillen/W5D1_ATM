$(document).ready(function () {

var checking_balance = 1000;
var saving_balance = 1000;

$('#checking_bal').text(checking_balance);
$('#saving_bal').text(saving_balance);

var checking_deposit = function () {
var amount = $('#checking_amt').val();
    amount = parseInt(amount);

  checking_balance = checking_balance + amount;
  $('#checking_bal').text(checking_balance);
 };

var checking_withdrawal = function () {
  var amount = $('#checking_amt').val();
  amount = parseInt(amount);


  if (amount <= checking_balance) {
   checking_balance = checking_balance - amount;
  } else {
    if (amount <= (checking_balance + saving_balance)) {
     saving_balance = saving_balance - (amount - checking_balance);
     checking_balance = 0;
    } else {
      alert ('insufficient funds');
    }


  }

  $('#checking_bal').text(checking_balance);
  $('#saving_bal').text(saving_balance);
};
  var saving_deposit = function () {
    var amount = $('#saving_amt').val();
    amount = parseInt(amount);

    saving_balance = saving_balance + amount;
    $('#saving_bal').text(saving_balance);

  };

  var saving_withdrawal = function () {
    var amount = $('#saving_amt').val();
    amount = parseInt(amount);

    saving_balance = saving_balance - amount;
    $('#saving_bal').text(saving_balance);

  };

  $('#checking_deposit').click(checking_deposit);
  $('#checking_withdrawal').click(checking_withdrawal);
  $('#saving_deposit').click(saving_deposit);
  $('#saving_withdrawal').click(saving_withdrawal);

});





















/*

$(document).ready(function () {
  $('h2').css('color', 'red');
  $('h2:last').text('I love jQuery');

  $('div:odd').addClass('success');
  $('div:even').addClass('alert');

  var cool_popup = function () {
    var name = $('#name').val();
    if (! name) {
      name = 'Contest winner';
    }
    alert(name + ', you have won 1 billion dollars');
  }

  $('#btn').click(cool_popup);

  var backgroundColor = function () {
    var color = $('#color').val();
    $('body').css('background-color', color);
  }

  $('#btncolor').click(backgroundColor);

  $('#hide').click(function () {
    $('h2').hide();
  });

  $('#show').click(function () {
    $('h2').show();
  });

  $('#toggle').click(function () {
    $('h2').toggle(500);
  });

  var compute_area = function () {
    var width = parseInt($('#width').val());
    var height = parseInt($('#height').val());
    var a = area(width, height);
    $('#area').text(a + ' square feet');
    $('#area').removeClass('alert success');
    if (a < 100) {
      $('#area').addClass('success');
    } else {
      $('#area').addClass('alert');
    }
  }

  var area = function (width, height) {
    return width * height;
  }
  $('#calc').click(compute_area);

});

*/