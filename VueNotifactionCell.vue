<template>
  <li
    class="p-4 rounded shadow text-dark dark:text-light w-full overflow-hidden"
    :class="[background, 'notif-' + notification.id]"
  >
    <div class="flex flex-row items-center space-x-4">
      <Icn :icon="notification.icon" v-if="notification.icon" />
      <div class="flex flex-col">
        <div class="font-bold">{{ notification?.title ?? "" }}</div>
        <div class="text-sm">{{ notification?.content ?? "" }}</div>
      </div>
    </div>
  </li>
</template>

<script>
import { FontAwesomeIcon as Icn } from "@fortawesome/vue-fontawesome";

export default {
  name: "VueNotifactionCell",
  components: { Icn },
  props: {
    notification: {
      type: Object,
      default: () => ({
        title: "Titre",
        content: "Vous avez oubliez quelque chose",
      }),
    },
  },
  computed: {
    background() {
      let color = this.notification?.bg ?? "bg-blue-500";
      return `${color}`;
    },
  },
};
</script>

<style scoped></style>
