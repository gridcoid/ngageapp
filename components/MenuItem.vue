<template>
  <div>
    <!-- MULTIPLE -->
    <el-submenu
      v-if="
        item.type === 'multiple' &&
        Array.isArray(item.children) &&
        item.children.length
      "
      :index="uid"
    >
      <template #title>
        <div class="flex items-center h-full">
          <i :class="item.icon" class="mr-2" />
          <div v-if="!hideSidebar || level > 0" class="name-menu">
            {{ item.name }}
          </div>
        </div>
      </template>

      <menu-item
        v-for="(child, i) in item.children"
        :key="i"
        :item="child"
        :uid="`${uid}-${i}`"
        :level="level + 1"
        @active="$emit('active', $event)"
      />
    </el-submenu>

    <!-- SINGLE -->
    <el-menu-item v-else :index="uid" @click="$emit('active', item)">
      <div class="flex items-center h-full">
        <i :class="item.icon" class="mr-2" />
        <div v-if="!hideSidebar || level > 0" class="name-menu">
          {{ item.name }}
        </div>
      </div>
    </el-menu-item>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MenuItem',
  props: {
    item: Object,
    uid: String,
    level: { type: Number, default: 0 },
  },
  computed: {
    ...mapState({
      hideSidebar: (state) => {
        return state.user.sidebar
      },
    }),
  },
}
</script>

<style lang="scss" scoped>
.name-menu {
  font-family: 'Cabin';
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
  color: #5c6b7a;
  line-height: normal;
}
</style>
