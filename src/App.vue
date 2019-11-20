<template>
  <div id="app">
    <!-- 路由出口组件，它是动态的 -->
    <keep-alive :exclude="['ArticleIndex']">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
