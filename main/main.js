// avvio Vue

const root = new Vue(

    {
        el:'#app',
        data:{
            items:[
                {
                    photo: 'img/01.jpg',
                    title: "Svezia",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
                },
                {
                    photo: 'img/02.jpg',
                    title: "Svizzera",
                    text: "Lorem ipsum."
                },
                {
                    photo: 'img/03.jpg',
                    title: "Gran Bretagna",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    photo: 'img/04.jpg',
                    title: "Germania",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                },
                {
                    photo: 'img/05.jpg',
                    title: "Paradise",
                    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                }
            ],

            activeS:0

        },
        methods: {
            previous () {
                this.activeS--;
                if(this.activeS < 0) {
                    this.activeS = this.items.length -1;
                }
            },
            next () {
                this.activeS++;
                if(this.activeS == this.items.length) {
                    this.activeS = 0;
                }
            },
            //bonus1 al click mi muovo all'interno del carosello mostrando le img cliccate 
            gotoSlide(index) {
                this.activeS = index;
            }
        }
    }


);
