<template>
  <q-layout view="lHh Lpr lFf"
    class="img-background" >
   <q-page-container class="container-fluid">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
.img-background{
  background: #fff url(../statics/background-img.jpg);
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px black
}
</style>
