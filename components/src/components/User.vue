<template>
    <p>the user is {{ age }} years old</p>
    <button type="button" @click="onClickAge()"> increase age event</button>
    <button type="button" @click="ageChangeFn(3)"> increase age CB </button>
<p> {{ ageDoubled }}</p>
</template>
  
<script>
export default {
    name: "User",
    props:  {
        age: {
        type: Number,
        // default: 20,
        // required : true 
        validator(value){
            // this.onClickAge()
            return value > 30
        }
        },
        ageChangeFn : Function
    },
    emits: ["age-change"],
    computed: {
        ageDoubled() {
         return this.age * 2
        }
    },
    methods: {
        onClickAge() {
            this.$emit('age-change', 3)
        }
    }
}
</script>

  
  
