<template>
<vue-position-sticky sticky-class="sticky-class">
  <el-aside id="side" width="200px">
    <!-- menu -->
    <el-menu :default-active="$route.name" :default-openeds="defaultOpeneds" background-color="#304156" text-color="#bfcbd9" active-text-color="#42b983">
      <side-item :json="filterRoutes"></side-item>
    </el-menu>
  </el-aside>
</vue-position-sticky>
</template>

<script>
import {
  sideRoutes
} from '@/router'
import SideItem from "@/components/layout/sideItem"

export default {
  name: 'my-side',
  components: {
    SideItem
  },
  data() {
    return {
      filterRoutes: [], // 过滤后的路由
      defaultOpeneds: [] // 默认打开的二级菜单
    }
  },
  created() {
    this.filterRoutes = this.handleRoutes(sideRoutes)
  },
  methods: {
    // 递归过滤路由
    handleRoutes(Arr) {
      const Routes = Arr.filter(route => {
        if (route.name) {
          if (route.meta) {
            if (route.meta.hidden) {
              return false
            } else {
              if (route.meta.open) {
                this.defaultOpeneds.push(route.name)
              }
            }
          }
          if (route.children) {
            route.children = this.handleRoutes(route.children)
          }
          return true
        } else {
          return false
        }
      })
      return Routes
    }
  }
}
</script>

<style scoped>
#side {
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;
  overflow: hidden;
}

#side .el-menu {
  flex-grow: 1;
  padding-bottom: 15px;
  border: none;
}

#side .el-menu .el-menu-item {
  min-width: 180px;
}
</style>
