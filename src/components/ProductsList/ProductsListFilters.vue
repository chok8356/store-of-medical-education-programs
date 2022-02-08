<template>
  <div
    v-if="filters"
    class="products-list-filters card p-4 shadow-sm">
    <b-form-group
      class="products-list-filters__search"
      label="Программы НМО">
      <b-form-input
        placeholder="Поиск"
        type="text"
        :value="filters.query"
        @input="onQueryInput" />
    </b-form-group>

    <hr class="mt-3 mb-4">

    <div class="products-list-filters__categories">
      <h5 class="d-block mb-3">
        Категории
      </h5>
      <b-nav
        pills
        vertical>
        <b-nav-item
          :active="filters.selectedCategory === null"
          @click="onCategoryClick(null)">
          Все категории
        </b-nav-item>
        <b-nav-item
          v-for="category in categories"
          :key="category.id"
          :active="filters.selectedCategory === category.id"
          @click="onCategoryClick(category.id)">
          {{ category.name }}
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script lang="ts">
import { BNav, BNavItem, BFormGroup, BFormInput } from 'bootstrap-vue'
import { PropType } from 'vue'
import { Vue, Component, Prop, Model } from 'vue-property-decorator'
import { ICategory } from '../../../types/ICategory'
import { IProductFilters } from '../../../types/IProduct'

@Component({
  name: 'ProductsListFilters',
  components: {
    BNav, BNavItem, BFormGroup, BFormInput
  }
})
export default class ProductsListFilters extends Vue {
  @Model('change', { type: Object as PropType<IProductFilters> }) filters!: IProductFilters
  @Prop({ type: Array as PropType<ICategory[]> }) categories!: ICategory[]

  onCategoryClick(id: ICategory['id'] | null) {
    this.$emit('change', {
      ...this.filters,
      selectedCategory: id
    })
  }

  onQueryInput(value: string) {
    this.$emit('change', {
      ...this.filters,
      query: value
    })
  }
}
</script>

<style lang="scss">
.products-list-filters {
  position: sticky;
  top: 104px;
  z-index: 1;
}
</style>
