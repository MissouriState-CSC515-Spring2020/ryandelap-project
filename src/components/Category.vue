<template>
  <div>
    
    <b-col class="text-center">
        <h2>Videos for: {{this.category}}</h2>
        <b-row>
            <b-col v-for="video in result.items" :key="video.id.videoId" class="p-3" cols="12" sm="6" md="4" lg="3">
                <h5>{{ video.snippet.title }}</h5>
                <router-link :to="'/video/' + video.id.videoId">
                    <img class="w-75" :src="video.snippet.thumbnails.high.url" alt="image detail"/>
                </router-link>
                <h6>Description: </h6>
                <p> {{ video.snippet.description}} </p>
            </b-col>
        </b-row>
    </b-col>
  </div>
</template>

<script>
import youtubeService from '@/service/youtubeService.js'

export default {
    name: 'Category',
    data() {
        return {
            category: this.$route.params.category,
            result: {} 
        }
    },
    methods: {
      getVideosByKeyword(keyword) {
          youtubeService.searchVideos(keyword)
          .then(response => {
              this.result = response
          })
          .catch(e => {
              console.log("Is this the error?")
              console.log(e)
          })
      },
  },
  beforeRouteUpdate(to, from, next) {
    this.category = to.params.category
    this.getVideosByKeyword(this.category)  
    next()
  },    
  mounted() {
    this.getVideosByKeyword(this.category)
  }
};


</script>

<style scoped>
img {
  width: 100%;
}
</style>