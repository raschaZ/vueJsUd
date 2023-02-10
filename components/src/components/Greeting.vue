<template>
    <p>{{msg}}</p>
    <div class="example">hi</div>
</template>
  
  <script >
  export default{
    name:'Greeting',
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
  
