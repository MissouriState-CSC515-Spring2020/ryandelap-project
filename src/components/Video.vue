<template>
  <div>
    <!-- <h1>Video: {{ videoInfo.snippet.title }}</h1> -->

    <b-row class="text-center">
      <div v-if="success">
        <youtube :video-id="videoInfo.id"></youtube>
        <p>video id: {{ videoInfo.id }}</p>
      </div>
    </b-row>
  </div>
</template>
<script>
import youtubeService from "@/service/youtubeService.js";
export default {
  name: "Single",
  data() {
    return {
      success: false,
      videoInfo: {}
    };
  },
  mounted() {
      console.log("Mounted called.")
    this.loadInfo(this.$route.params["id"])
  },
  methods: {
    loadInfo(id) {
      youtubeService
        .getVideoById(id)
        .then(response => {
          this.videoInfo = response.items[0]
          this.success = true
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};

</script>

<style scoped>
</style>