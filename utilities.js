function getTimeFormat(date){
  var timezone = "GMT+1";
  var timestamp_format = "yyyy-MM-dd HH:mm:ss";
  return Utilities.formatDate(date, timezone, timestamp_format)
}

