<template>
  <img :src="placeholderUrl" :alt="alt">
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 300 },
    height: { type: Number, default: 200 },
    text: { type: String, default: 'Platzhalterbild' },
    alt: { type: String, default: 'Platzhalterbild' }
  },
  computed: {
    placeholderUrl() {
      return `https://via.placeholder.com/${this.width}x${this.height}?text=${encodeURIComponent(this.text)}`;
    }
  }
}
</script>