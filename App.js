class Product {
    constructor(nom, preu, descripcio, categoria){
        this.name = nom;
        this.price = preu;
        this.description = descripcio;
        this.category = categoria;

    }
    
}

class UI {
    addProduct(product){
       const productList = document.getElementById('product-list');
       const element = document.createElement('div');
       element.id = 'pare';
       element.innerHTML = `
            <div class="card text-center m-5">
                <div class="card-body"> 
                    <strong>Nom:</strong> ${product.name}
                    <strong>Preu:</strong> ${product.price}
                    <strong>Descripció:</strong> ${product.description}
                    <strong>Categoria:</strong> ${product.category}
                    <a href="#" class="btn btn-danger" name="delete">Elimina</a>
                </div>
            </div>
       `;
       productList.appendChild(element);
       
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deteleProduct(element){
        if(element.name === 'delete' ){
            //accedeix a l'element inicial per borrar-lo
          document.getElementById('pare').remove();
          this.showMessage('Producte eliminat satisfactòriament', 'info');
        }
    }
    showMessage(message, cssClass){
        const div= document.createElement('div');
        div.className = `alert alert-${cssClass} m-4`;
        div.appendChild(document.createTextNode(message));
        //mostrar al DOM
         const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        //elimina en 3 segons
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

//DOM Events
document.getElementById('product-form')
.addEventListener('submit', function(e){
   //alert(document.getElementById("nom").value);
 //captura els elements introduits
   const name = document.getElementById('nom').value;
   const price = document.getElementById('preu').value;
   const description = document.getElementById('descripcio').value;
   const category = document.getElementById('categoria').value;
   //console.log(name, price, description, category);
    //construeix objecte amb elements rebuts
   const product = new Product(name, price, description, category);
   //insertem l'element al DOM
   const ui = new UI(); 

   if(name === '' || price === ''|| description==='' || category===''){
      return ui.showMessage('Completa els camps buits, siusplau', 'danger');
   }
   ui.addProduct(product);
   ui.resetForm();
   ui.showMessage('Producte agregat satisfactoriament', 'success');

    e.preventDefault();
});
document.getElementById('product-list').addEventListener('click', function(e){
    //eliminem producte 
    const ui = new UI(); 
    ui.deteleProduct(e.target);
})