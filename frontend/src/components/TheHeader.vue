<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router="true"
  >
    <el-menu-item index="/">Домой</el-menu-item>
    <el-menu-item index="/tournaments">Турниры</el-menu-item>
    <el-menu-item index="/admin">Админ</el-menu-item>
    <el-menu-item index="/about">О нас</el-menu-item>
    <el-menu-item index="/contact">Контакты</el-menu-item>
    <el-menu-item index="/profile">Профиль</el-menu-item>
  </el-menu>
</template>
<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
