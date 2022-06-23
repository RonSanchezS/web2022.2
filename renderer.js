const NOTIFICATION_TITLE = 'Notificacion'
const NOTIFICATION_BODY = 'Se ha creado una notificacion de la app ELECTRON'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE

  