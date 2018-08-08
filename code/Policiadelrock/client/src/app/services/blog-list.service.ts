import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {
  
  constructor() { }

  blogs: Array<any> = [
    {
      _id:0,
      name: "Los Genaros.",
    //   price: 123,
      desc: "Somos los Genaros, Banda de Rock oriunda del norte de la ciudad (Atizapán), con una mezcla de ritmos y distintos estilos, nos gusta decir que somos banda de rock por que contempla desde Rockpop hasta Hardrock. Nuestra música la consideramos distinta e única, en donde te llevaremos por un viaje cósmico mientras tengas problemas para conciliar el sueño, describimos lo que se siente estar así con nuestra canción “Sonambulo”, te motivamos a dejar ese amor que te trata como quiere con la canción “tu pendejo” y cuando poner un alto con “Semaforo”, como lograr alejarte con “Piruli”, como puedes sentirte al alejarte y arrastrar esa sobra con “Hoy sin Ti” pero también tenemos una canción para ella, que te hace sentir que es la única persona con quien quieres estar “Unicornios sobre arcoíris de menta”.",
      pic: ''
    },
    {
      _id:1,
      name: "Los Caligaris",
    //   price: 788,
      desc: "Con tantos kilómetros recorridos desde ya un lejano 1997 la banda Cordobesa liderada por los hermanos Martin y Diego Pampiglione, de nombre Caligaris, en honor a un payaso leyenda, ha forjado no solo una reputación propia, digna de reconocerse, también ha desarrollado un estilo propio y único al combinar actos  circenses, música rock, ska y cuarteto entre otros, todo en un mismo escenario. Agregando también, siempre una buena comedia con el fin de dar vida a una “Ideología nacida para divertir hasta el final”.",
      pic: ''
    },
    {
      _id:2,
      name: "Epica",
    //   price: 999,
      desc: "Epica es una banda neerlandesa de metal sinfónico10​11​fundada en el año 2002 por el compositor, guitarrista y vocalista Mark Jansen después de su salida de After Forever. Su música mezcla la voz mezzosoprano12​ de Simone Simons acompañada con guitarras melódicas y contundentes, usando voces guturales, coros y pasajes en latín, con un concepto filosófico en sus canciones. El estilo de la banda también muestra sonidos cercanos al metal progresivo13​ que han mejorado significativamente en los últimos discos, encontrando así por ellos mismos, el propio estilo de su música.",
      pic: ''
    },
    // {
    //   _id:3,
    //   name: "Leche",
    //   price: 123,
    //   desc: "Sirve pa tomar café... ",
    //   pic: ''
    // },
  ]

  getList(){
    return this.blogs
  }
  
  getOneBlog(id){
    return this.blogs.find(p=>p._id == id)
  }

  updateBlog(blog){
    return new Promise((resolve, reject)=>{
      this.blogs = this.blogs.map(p=>{
        if(p._id == blog._id) return blog
        return p
      }) //map
      return resolve(this.blogs)
    })


  }
  
}
