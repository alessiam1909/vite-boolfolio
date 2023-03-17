<script>
export default {
    name: 'ThankYou'
}
</script>
<template lang="">
    <div class="container">
        <div class="row my-5">
            <div class="col-12 text-center">
                <h2>Abbiamo ricevuto la tua richiesta, grazie per averci contattato!</h2>
                <router-link :to="{ name : 'projects'}" class="btn btn-sm btn-success mt-5 text-uppercase">Torna ai post</router-link>
            </div>
        </div>
        
    </div>
</template>
<style lang="">
    
</style>