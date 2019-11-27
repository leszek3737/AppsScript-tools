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
