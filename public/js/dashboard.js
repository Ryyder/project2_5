/* var moment = require("moment"); */

var x = document.cookie;

console.log(x);

//pull data from db and display in our stuInfo container
$.ajax({
  url: "api/students/6", //pull this id from the database
  type: "GET"
}).then(function(res) {
  console.log(res);
  $("firstNameDisplay").append(res.firstname);
  $("#schoolNameDisplay").append(res.school_name);
  $("#edLvlDisplay").append(res.ed_level);
  $("#majorDisplay").append(res.cip_code_one);
  $("#prgEndDisplay").append(res.program_end);

  var endDate = moment(res.program_end, "YYYY-MM-DD");
  var current = moment().startOf("day");
  var diff = timeDiff(current, endDate);
  console.log(diff + " days");
  $("#dueDate").append(diff + " Days");
});

function timeDiff(start, end) {
  var remaining = moment.duration(end.diff(start, false)).asDays();
  return remaining;
}
