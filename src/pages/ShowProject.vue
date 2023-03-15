

<script>
import axios from 'axios';
    export default {
            data(){
                return{
                    project: null,
                    loading: true,
                    baseUrl: 'http://127.0.0.1:8000'
                }
            },
            mounted(){
                axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`).then((response ) =>{
                    this.project = response.data.results;
                    this.loading = false; 
                })
            }
    }
</script>
<template lang="">
    <div class="container-show bg-dark">
    <div class="row-show">
        <div v-if="loading" class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
        </div>
        <div class="single-card-show" v-else>
                <h1 class="titolo">{{project.title}}</h1>
                <div class="card-img-show ">
                    <img :src="project.image != null ? `${baseUrl}/storage/${project.image}` : 'https://picsum.photos/200/300'" class="card-img-top" alt="Image">
                </div>
                <div class="content-show text-center">
                  <div class="title-show">{{project.slug}}</div>
                  <p class="">{{project.content}}</p>
                  <h5>Tipologia:</h5>
                  <p>{{ project.type ?  project.type.name : 'Senza tipologia'}}</p>
                  <p class="card-text ">Tecnologie utilizzate: <span class="badge bg-warning mx-1" v-for="technology in project.technologies"> {{technology.name}} </span></p>
                  
                </div>
        </div>
    </div>
</div>
</template>
<style lang="scss">
    
.container-show {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Poppins', sans-serif;
}

.single-card-show {
    width: 800px;
    margin-bottom: 100px;

    .titolo {
        margin: 10px;
        text-align: center;
    }


    .card-img-show {
        width:100%;
        height: 700px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;

        img {
            width: 600px;
            height: 100%;
        }
    }

    .content-show {
        margin: 30px;
        align-items: center;

        .title-show {
            font-size: 28px;
            margin: 30px;
            line-height: 10px;
        }

        .contents-show {
            width: 100%;
        }

    }
}
</style>