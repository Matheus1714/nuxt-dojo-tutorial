<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel vero laborum expedita possimus, in soluta ducimus fuga nisi itaque voluptas assumenda labore molestias odit placeat libero incidunt amet magni.</p>

        <div>
            {{ data }}
        </div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style lang="scss" scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>