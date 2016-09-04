function autoLastUpdated() {

  // Calculation for day difference
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;


  // Last updated day and current day
  var lastUpdated = new Date(modifiedDate);
  var now = new Date();

  console.log(lastUpdated);
  console.log(now);


  // Convert last updated and current days to milliseconds since 1970
  var lastUpdatedTime = lastUpdated.getTime();
  var nowTime = now.getTime();


  // Calculate difference between now and last updated date
  var lastUpdatedDate = Math.round(lastUpdatedTime / day);
  var nowDate = Math.round(nowTime / day);

  var lastUpdatedDiff = nowDate - lastUpdatedDate;

  console.log(lastUpdatedDiff);


  // Conditional programming for last updated date or static date if over 20 days ago
  if(lastUpdatedDiff <= 20) {
    document.write(lastUpdated.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}));
  } else {
    var d = new Date();
    d.setDate(d.getDate() - 20);
    document.write(d.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}));
  }

}