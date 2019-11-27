function getSheet(spreadsheet, name){
  return spreadsheet.getSheetByName(name)
}
function getSpreadSheet(id){
  return SpreadsheetApp.openById(id)
}
function getValuesRange(sheet, row, col, longRow, longCol){
  if(longRow){
    return sheet.getRange(row, col, longRow, longCol).getValues()
  } else {
    return sheet.getRange(row, col).getValue()
  }
}
function getValuesRangeFromOneRow(sheet, row, col){
  var date =[]
  for (var i = 0; i < col.length; i++) { 
    date.push(getValuesRange(sheet, row, col[i]))
  }
    return date
}
function setValuesRange(data, sheet, row, col, longRow, longCol){
  if(longRow){
    return sheet.getRange(row, col, longRow, longCol).setValues(data)
  } else {
    return sheet.getRange(row, col).setValue(data)
  }
}
function addDataToSheet(sheet, config, data){
  sheet.getRange(config.rowStart, config.colStart,  data.length , data[0].length).setValues(data)
}