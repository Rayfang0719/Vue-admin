<template>
  <div style="over-flow:auto">
     <div>
        <button type="button" class="btn btn-sm add ">
            <i class="iconfont iconfont-tianjia" style="font-size:20px; color:white"></i>
            添加</button>
        <button type="button" class="btn btn-sm _delete">删除</button>
   

    </div>
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>#</td>
          <td>商品id</td>
          <td>商品名称</td>
        
          <td>价格(原价)</td>
          <td>价格(现价)</td>
          <td>库存</td>
          <td>状态</td>
          <td>商品图片路径</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(goods,index) in goodsList" :key="index">
          <td>
            <input type="checkbox">
          </td>
          <td>{{index+1+start}}</td>
          <td>{{goods.id}}</td>
          <td>{{goods.name}}</td>
          
          <td>{{goods.del_price}}</td>
          <td>{{goods.price}}</td>
          <td>{{goods.xiaoliang}}</td>
          <td>{{goods.qty}}</td>
          <td>{{goods.imgurl}}</td>
          <td>
            <button>修改</button>
            <button>删除</button>
           
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pages"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

import button from "../../../components/button.vue";
export default {
  data() {
    return {
      goodsList: [],
      pages: null,
      currentPage: 1,
      total: 0,
      start:0
    };
  },
  created() {
    // let limit = 9;
    let start = 0;
    let params = {};
    this.$axios.get("/api/goods", {params}).then(({data}) => {
      this.total = data.data.length;
      this.goodsList = data.data.slice(0, 9);
      this.pages = Math.ceil(data.data.length / 9);
    });
  },
  mounted() {
  var add = $('.add');
  var _delete = $('._delete');
  var sumBtn = $('table thead input');
  var checkBtns = $('table tbody input');
  var deleteIDList = [];
  
  add.on('click',()=>{
    this.$router.replace('/admin/goods/addgoods')
  })
_delete.on('click',()=>{
$('table tbody input').each((index)=>{
    if($(this).prop('checked')){
      deleteIDList.push(index)
    }
    console.log(deleteIDList)
})
})
 
  sumBtn.on('click',()=>{
   
    if(sumBtn.prop('checked')){
   
      $('table tbody input').prop('checked',true);
    }
  })

  },
  methods: {
       handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
          let limit = 9;
         let start =( Number(val)-1)*limit;
         this.start = start;
         let params = { limit, start };
         this.$axios.get("/api/goods", {params}).then(({ data }) => {
      
         this.goodsList = data.data;

    });
    }
  }
};
</script>
<style lang="scss" scoped>
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
table {
  width: 100%;
  tr {
    &:nth-child(1) {
      background-color: #f2f2f2;
    }
    td {
      border: 0.013333rem solid #aaa;
      border-collapse: collapse;
      height: 0.8rem;
      text-align: center;
    }
  }
}
</style>


