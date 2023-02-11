<template>
    <p v-if="age > 25">{{age}}</p>
    <p v-else>less then 25</p>
</template>
  
  <script >
  export default{
    name:'Greeting',
    props: ["age"],
    data(){
      return {
        msg : "hello world !"
      }
    }
  }
  </script>
  
<style scoped lang="scss">
p:hover {
  color: darken(#cc4444,15%);
}
</style>
  
