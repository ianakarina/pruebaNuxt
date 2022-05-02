<template>
    <div>
        <h1>Planta {{plantaName}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            param: null,
            plantaName:null
        }
    },
    created() {
        //Nuestros parans:
        this.plantaName= this.$route.params.planta;
        //Query params
        //console.log(this.$route.query)
    }
}

</script>