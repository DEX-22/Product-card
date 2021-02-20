Vue.component('productImg',{
    props:{
        
    },
    template:`
        <div>
        <img  class="imgProducto" v-bind:src="img" alt="imagen del producto">
        </div>`,
    data(){
    return
            {
                

            }
    },

});

Vue.component('productInfo',{
    props:{
        
    },
    template:`
    `,
    data(){
    return
            {
                

            }
    },

});


Vue.component('productcard',{
    template:`
        <div class="container">
        <img  class="imgProducto" v-bind:src="img" alt="imagen del producto">
        
        <div class="infoProducto">
    <div class="colores">
        <div v-for="(variante,index) in variantes" 
             class="color"
             :class="variante.variantColor"
             @mouseover="updateProduct(index)"

             ></div>
        
    </div>
    <div class="titulo">{{producto}}</div>
    <p class="descripcion">{{descripcion}}</p>
    <div class="precio-btn"> 
        <h5 class="precio">{{precio}}</h5>
        <button class="btn">ADD TO CAR</button>
    </div>
</div>
        </div>`,
    data(){
        return {
            producto: 'Camiseta nike anaranjada',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, officiis rem cupiditate similique dolor quasi suscipit enim deserunt esse velit.',
            img: 'img/polo-clemson.jpg',
            precio: '$49.99',
            color: 'anaranjado',
            varianteSeleccionada: 0,
            variantes:[
                {   variantId: 01,
                    variantName:'Camiseta anaranjada',
                    variantColor:'anaranjado',
                    variantImage:'img/polo-clemson.jpg',
                    variantPrecio: '$49.99'
                
                },{
                    variantId: 02,
                    variantName: 'Camiseta roja',
                    variantColor:'rojo',
                    variantImage:'img/polo-florida-state.jpg',
                    variantPrecio: '$69.99'    
                },{
                    variantId: 03,
                    variantName: 'Camiseta gris',
                    variantColor:'gris',
                    variantImage:'img/polo-oregon.jpg',
                    variantPrecio: '$59.99'
                },],
        }
    },
    methods:{
        updateProduct: function(index){
            varianteSeleccionada = index
            this.img = this.variantes[varianteSeleccionada].variantImage
            this.producto = this.variantes[varianteSeleccionada].variantName
            this.precio = this.variantes[varianteSeleccionada].variantPrecio

        },},
    

});

var app = new Vue({
    el: '#Card',
    data:{
        hola: 'bienvenido',

    },
    
})

