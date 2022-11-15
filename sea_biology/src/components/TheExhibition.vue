<!-- ***************

    屏東海生館形象官網
    展館
    2022/11/15 開發中

     *************** -->

<template>
    <h1>展館消息</h1>
    <div>展館公告{{ seaData }}</div>
    <div v-for="data in seaData" v-bind:key="data" class="border-orange-800">
      <div>{{ data.Source }}</div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'App',
  components: { 
  },
  setup() {

    let seaData;

    let promiseData = new Promise( (resolve, reject) => {
      axios.get('https://www.nmmba.gov.tw/OpenData.aspx?SN=C7A4275096465BFB')
      .then((res, error) => {
          resolve(res)   // 結果成功
          reject(error)  // 結果失敗
      })

    });

    promiseData
    .then( res => {
      seaData = res.data
      console.table(seaData)
      return seaData

    })
    .catch( error => {
      // alert(`拒絕成功`)
      console.log(`Error： ${error}`)
    })

    return {
      seaData
    }

  }

}

</script>