<script>
export default {
    name:'AppFooter', 
    data(){
        return{
            menu: [
                {
                    label: 'Progetti',
                    routeName: 'projects'
                },
                {
                    label: 'Homepage',
                    routeName: 'homepage'
                },
                {
                    label: 'Contatti',
                    routeName: 'Contacts'
                },
            ]
        }
    }
}
</script>


<template lang="">
    <footer class="background-footer">
        <div class="container">
            <div class="row ">
                <div class="col-4">
                    <div class="logo">
                        Logo
                    </div>
                    <ul class="list-unstyled d-flex mx-5">
                        <li v-for="(item, index) in menu" :key="index"  class="p-3 ">
                        <router-link :to="{name:item.routeName}" class="text-light text-decoration-none text-uppercase" >{{item.label}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .background-footer{
        color: white;
        padding: 5px 0;
        background-color: #a75656;
    }
</style>