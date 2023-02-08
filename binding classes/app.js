let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor : '',
            selectedStyle : '',
            size : 150,
            rotation : 10,
        }
    },
    computed: {
        circle_classes() {
            return  { purple:this.isPurple }
        },
        rotate() {
            return  { transform : 'rotate('+ this.rotation +'deg)' }
        },
        css_wh() {
            return  { width : this.size + 'px' , height : this.size + 'px' , 'line-height':this.size + 'px'}
        }
    },
}).mount('#app')