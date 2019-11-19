<template>
  <div>
     <a class="navbar" href="/">
        <img alt="" src='../../assets/images/dog.svg'/>
            Paw Shop - PetStore
        <img alt="" src='../../assets/images/cat.svg'/>
      </a>
    <nav class="main" >
      <router-link to="/register">Register</router-link>
      <router-link to="/list">Pets</router-link>
      <hr>
      <router-view></router-view>
    </nav>
  </div>
</template>
