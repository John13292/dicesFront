<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Генератор эффектов</router-link> |
      <router-link to="/EditEffects">Редактирование эффектов</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scope>
#app {

}

#nav {
  padding: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
