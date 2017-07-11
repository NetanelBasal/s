<template>

  <section class="main-nav">
    <nav class="container flex align-center">
      <ul class="flex align-center">
        <li class="logo flex align-center justify-center">
          <router-link :to="{ name: 'home'}" exact>
            <img src="~../assets/logo.png" alt="sitaro">
          </router-link>
        </li>
        <li class="name">
          <router-link :to="{ name: 'home'}" exact><img src="~../assets/name.png" alt="sitaro"></router-link>
        </li>

        <li class="nav-item dashboard">
          <router-link :to="{ name: 'dashboard'}">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'threat-managment'}">Threat Management
          </router-link>
        </li>
        <li class="seperator search"><img src="~../assets/search.png" alt="sitaro"></li>
        <li class="nav-item flex align-center user">Roger Harris <img src="~../assets/user.png" alt="sitaro"> <img
                src="~../assets/down-arrow.png" alt="sitaro"></li>
      </ul>
    </nav>

  </section>

</template>


<style scoped lang="scss">

  .router-link-active {
    position: relative;
    &::after {
      width: 5px;
      height: 5px;
      content: '';
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      top: 45px;
    }
  }

  .main-nav {
    background: linear-gradient(90deg, #675dc6 0%, #473bc0 100%);
    box-shadow: 0px 5px 25px 0px rgba(81, 72, 164, 0.4);
    margin-bottom: 50px;
  }

  ul {
    background: url(~../assets/nav-effect.png) no-repeat center bottom;
  }

  .logo {
    width: 60px;
    height: 60px;
    background-color: #fff;
  }

  ul, nav {
    height: 60px;
    width: 100%;
  }

  .seperator {
    margin-left: auto;
  }

  .name {
    margin-left: 15px;
    margin-right: 50px;
    img {
      transform: translateY(-3px);
    }
  }

  .dashboard {
    margin-right: 30px;
  }

  a {
    text-transform: uppercase;
    color: #fff;
  }

  .nav-item {
    font-weight: 300;
    font-size: 13px;
    color: #fff;
  }

  .search {
    margin-right: 33px;
  }

  .user {

    @media (max-width: 1366px) {
      padding-right: 35px;
    }
    img:first-child {
      margin-right: 11px;
      margin-left: 7px;
    }
  }

  li {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    a {
      display: flex;
      height: 100%;
      align-items: center;
    }
  }

</style>


<script lang="js">
  export default  {
    name: 'main-nav',
  }
</script>
