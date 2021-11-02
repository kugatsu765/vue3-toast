<template>
  <div
    class="fixed"
    :class="[position, optionsMerge.fullSize ? 'inset-x-0' : '']"
  >
    <component :is="transitionComponent">
      <component
        :is="cellComponent"
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
        class="inline-block"
      >
      </component>
    </component>
  </div>
</template>

<script>
import VueNotifactionCell from "./VueNotifactionCell.vue";
import TansitionGroupFade from "./TansitionGroupFade.vue";
import { state, conf } from "./notifications.js";

export default {
  name: "VueNotificationContainer",
  // eslint-disable-next-line vue/no-unused-components
  components: { VueNotifactionCell, TansitionGroupFade },
  data() {
    return {
      notifications: state.notifications,
      optionsBase: conf.merge,
    };
  },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    transitionComponent: {
      type: Object,
      default: () => TansitionGroupFade,
    },
    cellComponent: {
      type: Object,
      default: () => VueNotifactionCell,
    },
  },
  watch: {
    notifications(value) {
      console.log(value);
    },
  },
  computed: {
    optionsMerge() {
      return {
        ...this.optionsBase,
        ...this.options,
      };
    },
    position() {
      let p = "top-0 left-0";

      if (this.optionsMerge.position === "top-left") {
        p = "top-0 left-0";
      } else if (this.optionsMerge.position === "top-right") {
        p = "top-0 right-0";
      } else if (this.optionsMerge.position === "bottom-right") {
        p = "bottom-0 right-0";
      } else if (this.optionsMerge.position === "bottom-left") {
        p = "bottom-0 left-0";
      } else if (this.optionsMerge.position === "top-center") {
        p = "md:left-1/2 md:transform md:-translate-x-1/2 top-0";
      } else if (this.optionsMerge.position === "bottom-center") {
        p = "md:left-1/2 md:transform md:-translate-x-1/2 bottom-0";
      }

      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (this.optionsMerge.fullSizeMobile && width < 640) {
        p = p + " inset-x-0";
      }

      return p;
    },
  },
};
</script>

<style scoped></style>
