<template>
  <button type="button" @click="flag= !flag">Toggle</button>
  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World!</h2>
    <h2 v-else="flag" key="secondary">Hi World!</h2>
  </transition>
  <transition name="zoom" type="animation" appear>
    <h2 v-if="flag" key="main">Hello World!</h2>
    <h2 v-else="flag" key="secondary">Hi World!</h2>
  </transition> -->
    <transition  mode="out-in" appear
    @before-enter="before-enter"
    @enter="enter"
    @after-enter="after-enter"
    @before-leave="before-leave"
    @leave="leave"
    @after-leave="after-leave"
    :css="false"
    >
    <h2 v-if="flag" key="main">Hello JS World!</h2>
    <h2 v-else="flag" key="secondary">Hi JS World!</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag : true ,
    }
  },
  methods: {
    beforeEnter(el){
    console.log('beforeEnter event fierd',el); 
    },
    enter(el,done){
    console.log('enter event fierd',el); 
    const  animation =el.animate([{transform:"scale3d(0,0,0)"},{}],{duration : 1000,})
    animation.onfinish =()=>{
      done();
    }
    },
    afterEnter(el){
    console.log('afterEnter event fierd',el); 
    },
    beforeLeave(el){
    console.log('beforeLeave event fierd',el); 
    },
    leave(el,done){
      console.log('enter event fierd',el); 
    const  animation =el.animate([{},{transform:"scale3d(0,0,0)"}],{duration : 1000,})
    animation.onfinish =()=>{
      done();
    }    },
    afterLeave(el){
    console.log('afterLeave event fierd',el); 
    },
  },
}
</script>

<style>
.fade-enter-from{
  opacity : 0 ;
}
.fade-enter-active {
  transition: all 0.25s linear;
}

.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}

h2{
  width: 400px;
  padding: 20px;
  margin: 20px;
}
.zoom-enter-active{
 animation:zoom-in 1s linear forwards;
 transition: all 2s linear;
}

.zoom-leave-active {
  animation:zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from{
  opacity : 0 ;
}

.zoom-leave-to {
  opacity: 0 ;
}

@keyframes zoom-in {
  from{
    transform: scale(0,0);
  }
  to{
    transform: scale(1,1);
  }
}
@keyframes zoom-out{
  from{
    transform: scale(1,1);
  }
  to{
    transform: scale(0,0);
  }
}
</style>
