async function notify(message) {
  if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    return new Notification(message);
  } else if (Notification.permission !== "denied")  {
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        return new Notification(message);
      }
    });
  } else {
    throw new Error("Can't send notification");
  }
}

export default notify;