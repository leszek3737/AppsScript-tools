function getTimeFormat(date){
  var timezone = config.time.timezone;
  var timestamp_format = config.time.timestamp_format;
  return Utilities.formatDate(date, timezone, timestamp_format)
}

