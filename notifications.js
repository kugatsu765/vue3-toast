import { reactive } from "vue";

export const state = reactive({
  notifications: [],
});

let count = 0;

const generateId = () => {
  count = count + 1;
  return count;
};

export let conf = {
  base: {
    duration: 5000,
    position: "top-right",
    fullSize: false,
    fullSizeMobile: true,
    colors: {
      new: "bg-blue-500",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      error: "bg-red-500",
    },
  },
};

export const methods = {
  notify(notification, timeout) {
    notification.id = generateId();
    state.notifications.push(notification);
    setTimeout(() => {
      this.removeNotification(notification.id);
    }, timeout || conf.merge.duration);
  },

  success(notification, timeout) {
    notification.bg = conf.merge.colors.success;
    this.notify(notification, timeout);
  },

  new(notification, timeout) {
    notification.bg = conf.merge.colors.new;
    this.notify(notification, timeout);
  },

  warning(notification, timeout) {
    notification.bg = conf.merge.colors.warning;
    this.notify(notification, timeout);
  },

  error(notification, timeout) {
    notification.bg = conf.merge.colors.error;
    this.notify(notification, timeout);
  },

  removeNotification(id) {
    state.notifications.splice(
      state.notifications.findIndex((n) => n.id === id),
      1
    );
  },

  removeAllNotification() {
    state.notifications = [];
  },
};

export let apiNotification = {
  new: (data, timeout) => methods.new(data, timeout),
  success: (data, timeout) => methods.success(data, timeout),
  warning: (data, timeout) => methods.warning(data, timeout),
  error: (data, timeout) => methods.error(data, timeout),
  remove: (id) => methods.removeNotification(id),
  removeAll: () => methods.removeAllNotification(),
};
