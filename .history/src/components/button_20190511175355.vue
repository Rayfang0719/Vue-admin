<template>
    <div>
        <button type="button" class="btn btn-sm add ">
            <i class="iconfont iconfont-tianjia"></i>
            添加</button>
        <button type="button" class="btn btn-sm delete">删除</button>


    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
// @import '../../public/iconfont.css';
    button{
        width:1.733333rem;
        height:.733333rem;
        line-height:.733333rem;
        border: 1px solid #aaa;
        border-radius:5%;
        font-size:.293333rem;
        padding:0px;
        padding-right:.226667rem;
        text-align: right;
        &.add{
            background-color: #33AB9F;
            margin-right:.373333rem;
        }
    }
</style>

