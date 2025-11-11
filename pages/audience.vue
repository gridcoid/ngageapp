<template>
  <div class="kg-containers" style="width: 100%">
    <div class="flex items-center justify-between header-content">
      <div class="title-header">
        Audience Segments
      </div>
      <div class="flex">
        <ButtonDefault
          icon="plus"
          text="Create Custom Audience"
          class="mr-3"
        />
      </div>
    </div>
    <div class="desc-page">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut ullamcorper dui, in sollicitudin ipsum. Nunc vulputate cursus mi, non mollis urna auctor vitae.
    </div>
    <div class="body-content flex flex-col">
      <div v-for="(item,index) in dataAudience" :key="index" class="card-list flex flex-row items-center justify-between">
        <div class="flex items-center justify-start flex-row">
          <img src="~/assets/images/thumb_audience.png" class="thumbnail">
          <div class="name-data">
            <span v-if="item.segment_name !== null">
              {{ item.segment_name.toString().split('_').join(' ') }}
            </span>
            <span v-else>
              -
            </span>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="flex user-data items-center justify-start">
            <IconUser class="mr-1" bg-color="#7A8A99" style="height:14px;" />
            {{ Number(item.total_audience).toLocaleString() }} users
          </div>
          <button
            type="button"
            class="k-btn focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-100 ease-in-out flex align-center items-center justify-center"
          >
            <IconInfo class="mr-1" style="height:16px;" />
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AudiencePage',
  layout: 'default',
  data () {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    ...mapState({
      dataAudience: (state) => {
        return state.audience.dataAudience
      }
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$store
        .dispatch('audience/getAudience')
        .then(() => {
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.kg-containers {
  padding: 20px;
  .header-content {
    .title-header {
      font-family: "Cabin";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #454545;
    }
    .btn-create {
      font-family: "Cabin";
      width: 94px;
      font-size: 12px;
      padding-right: 0px;
      padding-left: 0px;
    }
    .btn-create:hover {
      background-color: rgb(243 244 246);
      border: 0px;
    }
  }
  .desc-page {
    font-family: "Cabin";
    font-weight: 400;
    font-size: 16px;
    color: #757575;
    margin-top: 20px;
  }
  .body-content {
    margin-top:30px;
    gap:15px;
    .card-list {
      border-radius: 5px;
      border: 1px solid #C3CED9;
      background: #FFF;
      height: 100%;
      width: 100%;
      .thumbnail {
        width: 96px;
        height: 96px;
        object-fit: cover;
        border-top-left-radius: 5px;
        border-end-start-radius: 5px;
        margin-right:20px;
      }
      .name-data {
        color: #5C6B7A;
        font-family: 'Cabin';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        text-transform: capitalize;
      }
      .user-data {
        color: #7A8A99;
        font-family: 'Cabin';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        width:180px;
        text-align: left;
      }
      .k-btn {
        font-family: "Cabin";
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        color: #1b63d4;
        font-size: 14px;
        font-weight: 700;
        height: 36px;
        width: 138px;
        align-items: center;
        margin-right:20px;
      }
      .k-btn:hover {
        background-color: rgb(243 244 246);
      }
    }
  }
}
</style>
