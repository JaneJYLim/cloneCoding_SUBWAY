//달력UI 구현

$(".datepicker").datepicker({
  showOn: "both",
  buttonImage: "../images/search/calendar.png",
  buttonImageOnly: true,
  changeYear: true,
  dateFormat: "yy-mm-dd"
});

$.datepicker.setDefaults({
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  showMonthAfterYear: true
});


$(".datepicker2").datepicker({
  showOn: "both",
  buttonImage: "../images/search/calendar.png",
  buttonImageOnly: true,
  changeYear: true,
  dateFormat: "mm-dd"
});

$.datepicker.setDefaults({
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  showMonthAfterYear: true
});

