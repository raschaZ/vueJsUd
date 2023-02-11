<template>
  <div >
    hi
    <Greeting :age="age"/>
    <User :age="age" @age-change="updateAge"/>

  </div>

</template>

<script >
import Greeting from "./components/Greeting.vue"
import User from "./components/User.vue"

export default {
  name: "App",
  components: {
    Greeting,
    User
  },
  data() {
    return {
      age : 20
    }
  },
  methods :  {
    updateAge(numb){
      this.age+=numb
    }
  }
}
</script>



<style>

</style>
