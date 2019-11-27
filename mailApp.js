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