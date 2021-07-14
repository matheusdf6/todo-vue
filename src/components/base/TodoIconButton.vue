<template>
  <button
    class="icon-button"
    :class="{ 'contains-text': text }"
    :style="{ width: size, height: size, background: color }"
    v-on="$listeners"
  >
    <span v-if="text">{{ text }}</span>
    <component :is="svgIcon" :style="{ fill }" />
  </button>
</template>
<script>
export default {
  data: function() {
    return {
      svgIcon: () => import(`../../assets/icon-${this.icon}.svg`)
    };
  },
  props: {
    icon: String,
    text: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "48px"
    },
    fill: {
      type: String,
      default: "#000"
    },
    color: {
      type: String,
      default: "#fff"
    }
  }
};
</script>
<style lang="sass">
.icon-button
  padding: 0
  border: none
  border-radius: 24px
  background: #fff
  transition: filter 0.3s ease-in-out
  cursor: pointer

  &:hover
    filter: brightness(0.9)
</style>
