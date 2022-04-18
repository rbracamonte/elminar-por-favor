const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");

const fragment = document.createDocumentFragment();

const btnesBotones = document.querySelectorAll('.card .btn')

const carritoObjeto = {};


const agregarCarrito = (e)=>{
    // console.log(e.target.dataset.fruta);
    
    //*al hacer click capturamos los datos de la tarjeta - card
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    //*si exite la propiedad en mension se le adiciona una cantidad
    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad +1;
    }
    //*crea otro objeto: el producto se ingresa al carritoOjeto (no puede haber dos objeto iguales)
    carritoObjeto[producto.titulo] = producto;
    pintarCarrito(producto);

}

const pintarCarrito = (producto)=>{
    //recorremos el objeto carrito con Object.value para convertirlo a ARRAY
    carrito.textContent='';
    Object.values(carritoObjeto).forEach(item=>{
        //creamos el clone
        const clone = template.content.firstElementChild.cloneNode(true);

        //Seleccionamos la clases a modificar interactivamente
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        
        fragment.appendChild(clone)
    });

    //Añadimos el fragment a id carrito para que se muestren los elementos en la pagina
    carrito.appendChild(fragment);
}
btnesBotones.forEach(boton=>{
    boton.addEventListener('click',agregarCarrito)
});

// const agregarAlCarrito = (e) => {

//     console.log(e.target.dataset.fruta);
//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1
//     }
    
//     if(carritoObjeto.hasOwnProperty(producto.titulo)){
//         producto.cantidad = carritoObjeto[producto.titulo].cantidad +1;
//     }
//     carritoObjeto[producto.titulo] = producto;
//     pintarCarrito(producto);
//     // console.log(carritoObjeto);
    
// }

// btnesBotones.forEach((btn) => { 
//     // console.log(btn)
//     // console.log(e.target.textContent);
     
//     btn.addEventListener('click', agregarAlCarrito);
// });

// const pintarCarrito = (producto)=>{
//     // console.log('pintar carrito', producto) 
//     carrito.textContent ='';
//     Object.values(carritoObjeto).forEach(item=>{
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector('.lead').textContent = item.titulo;
//         clone.querySelector('.badge').textContent = item.cantidad;
        
//         fragment.appendChild(clone);
//     });

//     carrito.appendChild(fragment);
    
// };


