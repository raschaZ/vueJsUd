const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Racha',
            lastName: 'Zaibi',
            middleName: 'rach',
            url: 'https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/',
            raw_url: '    <p><a href="url" target="_blank"> Udemy </a></p>',
            age: 25
        };
    },
    methods: {
        increment() {
            return this.age++;
        },
        updateLastName(msg, event) {
            console.log(msg);
            return this.lastName = event.target.value;
        },
        updateMiddleName(event){
            return this.middleName= event.target.value;
        }
    },
    computed:{
        fullName() {
            console.log("full name");
            this.age;
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },

    },
    watch: {
        age(newValue, oldValue) {
            setTimeout(()=>{
                this.age = 20 
            },2000);
        }
    },
}).mount('#app')


// setTimeout(()=>{
//     vm.firstName = 'Roua' ;
// },2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Selma',
//             lastName: 'Khalifa'
//         }
//     }
// }).mount('#app2')