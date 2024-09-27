<template>
    <div>
        我是搜索<hr>
        <h1>params参数：{{ $route.params.keyword }}</h1>
        <h1>query参数：{{ $route.query.keyword }}</h1>

    </div>
</template>

<script>
export default {
    name: 'SearchIndex'

}
</script>

<style>

</style>