<template>
  <div class="navbar">
    <div @click="$router.push('./')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О нас</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  padding: 5px;
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}

.navbar__btns {
  margin-left: auto;
}
</style>