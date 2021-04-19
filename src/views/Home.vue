<template>
  <div class="home">
    <!-- 顶部图片部分 -->
    <section>
      <div class="header">
        <div class="big-img">
          <img :src=backImg alt="" />
        </div>
        <div class="gif-img">
          <img :src=logoImg alt="" />
        </div>
      </div>
    </section>
    <!-- 搜索部分 -->
    <section>
      <div class="input">
        <input type="text" class="search-input">
        <div class="search-img">
          <img src="../assets/images/search_icon.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      backImg: require('../assets/images/1.jpg'),
      logoImg: require('../assets/images/Google.gif'),
    };
  },
  mounted() {},
  methods: {},
  created() {},
};
</script>

<style  lang="scss" scoped>
html{
  background: #000  !important;
}
.header{
  max-height: 5.16rem;
  position: relative;
  overflow: hidden;
  .big-img{
    img{
      width: 100vw;
      height: 5.16rem;
      
    }
  }
  .gif-img{
    position:absolute;
    bottom: 0;
    left: 38vw;
    img{
      width: 4rem;
    }
  }
}

.input{
  // width: 1rem;
  margin: .5rem auto;
  width: 5rem;
  
  height: .5rem;
  // background: #6774f6;
  display: flex;
  // img{
  //   width: .5rem;
  //   height: .5rem;
  // }
  .search-input{
    display: block;
    width: 5rem;
    padding: 0 1em;
    // border: 1px solid #333;
    box-shadow: 0px 0px 10px #888888;
    height: .4rem;
    border-radius: .5rem;
    font-size: .18rem;
  }
  .search-img{
    width: .46rem;
    height: .4rem;
    border-radius: 50%;
    margin-left: -.38rem;
    background: #6774f6;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: .2rem;
      height: .2rem;
    }
  }
}
</style>
