function getTimeFormat(date){
  var timezone = "GMT+1";
  var timestamp_format = "yyyy-MM-dd HH:mm:ss";
  return Utilities.formatDate(date, timezone, timestamp_format)
}
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


function twoDimensionalArrayToOne(data){
  var dataReturn = []
  for (var i = 0; i < data.length; i++){
    dataReturn[i] = data[i][0]
  }
  return dataReturn
}
function indexOf(array1, array2){
  var arrayReturn = []
  for (var i = 0; i < array1.length; i++) {
    arrayReturn[i] = array2.indexOf(array1[i])      
  }
  return arrayReturn
}

function clearValuesRange(sheet, row, col, longRow, longCol){
  if(longRow){
    return sheet.getRange(row, col, longRow, longCol).clear()
  } else {
    return sheet.getRange(row, col).clear()
  }
}
function clearSheet(sheet, config){
  sheet.getRange(config.rowStart, config.colStart, sheet.getLastRow(), sheet.getLastColumn()).clear();
}

function appendRows(data, sheet){
  for (var i = 0; i < data.length; i++) {
    sheet.appendRow(data[i])
  }
}
function appendRowByIndexToSheet(data, index, sheet){
  for (var i = 0; i < index.length; i++) {
    sheet.appendRow(data[index[i]])
  }
}

function dayInMiliSec(day){
  return 86400000 * day
}
function dateLessTime(time){
  return new Date(Date.now() - time)
}
function dateIsOld(dateLessTime){
  return function(date){
    if (date > dateLessTime){
      return true 
    } else {
      return false
    }
  }
}

function indexElementsNotExistingInArray(data, dataIn){
  var indexOf = []
  for(var i = 0; i < dataIn.length; i++) {
    if(data.indexOf(dataIn[i]) == -1 && dataIn[i]){
      indexOf.push(i)
    }
  }
  return indexOf
}


function getIdFromArray(data){
  var idData = []
  for (var i = 0; i < data.length; i++) {
    idData.push(data[i][0])
  }
  return idData
}

function sendMail(data) {
  MailApp.sendEmail({
    to: data.to,
    cc: data.cc,
    bcc: data.bcc,
    htmlBody: data.htmlBody,
    subject: data.subject,
    attachments: data.attachments
  })
}
function getBodyMail(template, data){
  var template = HtmlService.createTemplateFromFile(template);
  template.data = data;
  return template.evaluate().getBlob().getDataAsString();
}

function addDataToSheet(sheet, config, data){
  sheet.getRange(config.rowStart, config.colStart,  data.length , data[0].length).setValues(data)
}

//function pasteData(data, spreadsheet, configRegion){
//  var sheet = getSheet(spreadsheet, configRegion.name)
//  clearSheet(sheet, configRegion)
//  addDataToSheet(sheet, configRegion, data)
//}
//function copyAndPaste(){
//  var config = getConfig()
//  var dataSource =  (function downloadDataSource(){
//    var sheetSource = getSheet(config.copyFormSheet.SpreadSheet, config.copyFormSheet.name)
//    return sheetSource.getRange(config.copyFormSheet.rowStart, config.copyFormSheet.colStart, sheetSource.getLastRow(), config.copyFormSheet.colLong).getValues()
//  } ())
//    pasteData(dataSource, config.pasteToSheet.SpreadSheet, config.pasteToSheet)
//}




// DRIVE APP

function makeFolder(name, parent) {
   return parent.createFolder(name)
}
function getFolder(id){
  return DriveApp.getFolderById(id)
}

function makeCopyFiles(files, destination, name){
  if(name){
    files.makeCopy(name, destination)
  } else {
    files.makeCopy(destination)
  }
}
function getIdFromUrl(url) { 
  return url.match(/[-\w]{25,}/); 
}

function getFileFromUrl(url){
  return DriveApp.getFileById(getIdFromUrl(url))
}

