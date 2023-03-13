<script>
    export default {
        name: 'SinglePost',
        props: {
            post: Object,
            baseUrl: String
        }
                
    }
</script>
<template lang="">
    <div>
        <div class="card my-3">
                        <img :src="post.image != null ? `${baseUrl}/storage/${post.image}` : 'https://picsum.photos/200/300'" class="card-img-top" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title">{{post.title}}</h5>
                            <p class="card-text">Tipologia progetto: {{post.type.name}}</p>
                            <p class="card-text ">Tecnologie utilizzate: <span class="badge bg-warning mx-1" v-for="technology in post.technologies"> {{technology.name}} </span></p>
                            <a href="#" class="btn btn-sm btn-success">Leggi l'articolo</a>
                        </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>