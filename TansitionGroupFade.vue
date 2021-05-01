<template>
  <transition-group name="fade" tag="ul" class="p-4 flex flex-col space-y-4">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: "TansitionGroupFade"
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-70px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-70px);
}

.fade-move {
  transition: transform 0.8s ease;
}
</style>
