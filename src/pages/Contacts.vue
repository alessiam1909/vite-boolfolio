<script>
import axios from 'axios'; 
    export default {
            name: 'Contacts',
            data(){
                return{
                    name: '',
                    surname: '',
                    email: '',
                    phone: '',
                    message: '',
                    baseUrl: 'http://127.0.0.1:8000',
                    erroe: null
                }
            },
            methods: {
                sendForm(){
                    const data = {
                        name: this.name,
                        surname: this.surname,
                        email: this.email,
                        phone: this.phone,
                        message: this.message
                    }

                    axios.post(`${this.baseUrl}/api/contacts`, data).then((response) =>{
                        if(!response.data.success){
                            this.errors = response.data.errors
                        }
                        else{
                            this.name = '',
                            this.surname = '',
                            this.email = '',
                            this.phone = '',
                            this.message = ''
                        };
                        setTimeout(() => {
                        this.$router.push({ 'name': 'ThankYou' });
                    }, 2000)
                    })
                }
            }
    }
</script>
<template lang="">
    <div class="container">
        <div class="row my-5">
            <div class="col-12">
                <h1 class="text-center text-danger">Pagina contatti: </h1>
            </div>
            <div class="col-12">
                <h5 class="text-center my-5 text-danger">Informazioni di contatto</h5>
                <div class="row d-flex justify-content-center align-content-center">
                    <div class="col-12 col-md-6">
                        <div class=" d-flex flex-column justify-content-center px-5">
                            <p><strong> <i class="fa-solid fa-map-location-dot"></i> Indirizzo: </strong> Via Emilio Salgari 39, Sant'Ambrogio di Valpolicella, Verona</p>
                            <p><strong><i class="fa-solid fa-briefcase"></i> Partita Iva: </strong> 123456789</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div  class=" d-flex flex-column justify-content-center px-5">
                            <p><strong> <i class="fa-solid fa-phone"></i> Telefono: </strong> 3356784223</p>
                            <p><strong><i class="fa-solid fa-envelope"></i> Email:  </strong> info@boolbress.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <h5 class="text-center">Scrivici: </h5>
                <form  @submit.prevent="sendForm">
                    <div class="row">
                        <div class="col12- col-md-6 my-2 px-4">
                            <label class="control-label my-2" for="nome">Inserisci il tuo nome: </label>
                            <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome" v-model="name">
                        </div>
                        <div class="col-12 col-md-6 my-2 px-4">
                            <label class="control-label my-2" for="cognome">Inserisci il tuo cognome: </label>
                            <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Cognome" v-model="surname">
                        </div>
                        <div class="col-12 col-md-6 my-2 px-4">
                            <label class="control-label my-2" for="email">Inserisci la tua email: </label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" v-model="email">
                        </div>
                        <div class="col-12 col-md-6 my-2 px-4">
                            <label class="control-label my-2" for="telefono">Inserisci il tuo numero di telefono: </label>
                            <input type="tel" class="form-control" name="telefono" id="telefono" placeholder="Telefono" v-model="phone">

                        </div>
                        <div class="col-12 my-2 px-4">
                            <label class="control-label my-2" for="messaggio">Inserisci un messaggio: </label>
                            <textarea name="messaggio" id="messaggio" class="form-control" v-model="message" placeholder="Messaggio"></textarea>
                        </div>
                        <div class="col-12 my-2 text-center">
                            <button type="submit" class="send-email text-light p-2">Invia</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

.send-email{
    background-color: #d12a5c;
    border: none;
    outline: none;
    width: 100px;
    border-radius: 10px;
    margin-top: 50px;

    &:hover{
        background-color: #8b1a3c;
    }
}
    
</style>