<template>
  <div id="app">
    <div class="menu" id="menu">
      <div class="brand" id="brand">
        <router-link to="/">
          <img src="/images/logo.png" />
        </router-link>
      </div>
      <div class="side" id="side">
        <router-link to="/browse">
          <div class="browse">
            <img src="/images/globe.png" />
            <p>Browse</p>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="cart">
            <img src="/images/love.png" />
            <p>{{ itemsInCart }} items</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
