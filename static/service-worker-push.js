self.addEventListener('push', function (event) {
  console.log('Received a push message', event)

  // Let's check if the browser supports notifications
  if (Notification.permission === 'granted') {
    self.registration.showNotification('push')
  }
})
