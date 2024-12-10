<template>
  <div :class="['hint-container', type]">
    <p class="hint-container-title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      const titles = {
        tip: 'Tips',
        note: 'Notiz',
        info: 'Information',
        warning: 'Warnung',
        danger: 'Gefahr'
      }
      return titles[this.type] || 'Hinweis'
    }
  }
}
</script>