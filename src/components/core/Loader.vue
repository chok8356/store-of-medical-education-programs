<template>
  <div class="loader">
    <b-spinner
      label="Loading..."
      variant="primary" />
  </div>
</template>

<script lang="ts">
import { BSpinner } from 'bootstrap-vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Loader',
  components: {
    BSpinner
  }
})
export default class Loader extends Vue {
}
</script>

<style lang="scss">
.loader {
  align-items: center;
  background-color: rgba(#fff, 0.75);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 1;
  position: absolute;
  top: 0;
  transition: opacity 0.1s ease-in;
  width: 100%;
  z-index: 1;
}

.loader-parent {
  &--relative {
    position: relative;
  }
}
</style>
