<template>
  <div id="app">
    <router-view/>
  </div>
</template>
 
<script>

function initFontSize (doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function() {
      // var clientWidth = docEl.clientWidth
      let viewWidth = docEl.clientWidth || window.innerWidth;
      let size = 100 / 1920;
      docEl.style.fontSize = (viewWidth * size) + 'px';
      // docEl.style.backgroundColor = '#5b5ca9';
      // if (!clientWidth) {
      //   return
      // }
      // docEl.style.fontSize =  clientWidth / 7.5 + 'px'
    }
  if (!doc.addEventListener) {
    return
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}
initFontSize(document,window)

export default {
}
</script>
<style lang="scss">
 html{
        position: relative;
        // background: #F2F2F2;
        font-size: 100px;
      }
</style>
