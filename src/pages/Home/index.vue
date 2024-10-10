<template>
    <div>
        <!-- 三级联动全局组件，不需要再import引入 -->
        <TypeNav></TypeNav>

        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <ProductRank></ProductRank>
        <GuessLike></GuessLike> 
        <Floor v-for="(floor, index) in floorList" :key="floor.id" :floorListDemo="floor"></Floor>

        <Brand></Brand>

    </div>
</template>

<script>

import ListContainer from '@/pages/Home/ListContainer';
import TodayRecommend from '@/pages/Home/TodayRecommend';
import ProductRank from '@/pages/Home/ProductRank';
import GuessLike from '@/pages/Home/GuessLike';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';

import { mapState } from 'vuex';

export default {
    name: 'HomeIndex',
    components: {
        ListContainer,
        TodayRecommend,
        ProductRank,
        GuessLike,
        Floor,
        Brand
    },
    computed: {
        ...mapState({
            floorList: state => state.home.floorList
        })
    },
    mounted() {
        // 派发action，获取Floor组件的数组
        this.$store.dispatch('getFloorList')
    }

}
</script>

<style>

</style>