// Descrizione:
// Partendo dal markup HTML allegato creare uno slider di immagini in VueJS.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const images = [
  {
    src: 'img/01.jpg',
    title: 'Svezia',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  },
  {
    src: 'img/02.jpg',
    title: 'Svizzera',
    text: 'Lorem ipsum',
  },
  {
    src: 'img/03.jpg',
    title: 'Gran Bretagna',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    src: 'img/04.jpg',
    title: 'Germania',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  },
  {
    src: 'img/05.jpg',
    title: 'Paradise',
    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  },
];

const app = new Vue({
  el: '#root',
  data: {
    images,
    currentImage: 0,
  },
  methods: {
    nextImage() {
      if (this.currentImage === this.images.length - 1) {
        this.currentImage = 0;
      } else {
        this.currentImage++;
      }
    },
    previousImage() {
      if (this.currentImage === 0) {
        this.currentImage = this.images.length - 1;
      } else {
        this.currentImage--;
      }
    },
    selectImage(e, index) {
      this.currentImage = index;
    },
    // autoplay() {
    //   setInterval(this.nextImage(), 3000);
    //   console.log('ciao');
    // },
  },
});
