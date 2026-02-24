<template>
  <div>
    <div class="switch-org flex items-center">
      <div class="title-select">Switch organization:</div>
      <div
        class="box-select flex items-center justify-between no-select cursor-pointer"
        @click="open()"
      >
        <div class="flex items-center">
          <img src="~/assets/images/icon/org.svg" class="icon-org" />
          <div class="name-org">
            {{ orgName }}
          </div>
        </div>
        <div class="btn-arrow">
          <img src="~/assets/images/icon/arrow_down.svg" />
        </div>
      </div>
    </div>
    <div v-show="show" class="dialog-org" @click="open()">
      <div
        v-for="(item, index) in dataOrg"
        :key="index"
        class="list-org flex items-center cursor-pointer no-select"
        @click="selectOrg(item)"
      >
        <img src="~/assets/images/icon/org.svg" class="icon-org" />
        <div class="name-list">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div v-show="show" class="modal-backdrop" @click="open()" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      show: false,
      isLoading: false,
    }
  },
  computed: {
    ...mapState({
      dataOrg: (state) => {
        return state.user.dataOrg
      },
      orgId: (state) => {
        return state.user.orgId
      },
      orgName: (state) => {
        return state.user.orgName
      },
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    selectOrg(data) {
      this.$store.dispatch('user/setOrganization', data)
      if (this.$route.path === '/') {
        this.$router.go(0)
      } else {
        this.$router.push(
          {
            path: '/',
            force: true,
          },
          () => {
            this.$router.go(0)
          }
        )
      }
    },
    open() {
      this.show = !this.show
    },
    getData() {
      this.isLoading = true
      this.$store
        .dispatch('user/getOrganization', { all: false })
        .then((res) => {
          const data = res?.data.data.find((x) => x.id === this.orgId)
          this.$store.dispatch('user/setOrganization', data)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-org {
  position: fixed;
  top: 10px;
  right: 145px;
  width: 300px;
  background: #ffffff;
  z-index: 9999;
  border-radius: 5px;
  .list-org {
    height: 40px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    background: #ffffff;
    border-radius: 10px;
    .name-list {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #5c6b7a;
      margin-left: 10px;
    }
  }
  .list-org:hover {
    background-color: #f5f7fa;
  }
}
.switch-org {
  margin-right: 15px;
  .title-select {
    margin-right: 10px;
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #5c6b7a;
  }
  .box-select {
    background: #ffffff;
    border: 1px solid #c3ced9;
    border-radius: 5px;
    height: 40px;
    width: 300px;
    padding-left: 14px;
    padding-right: 10px;
    .icon-org {
      margin-right: 10px;
    }
    .name-org {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #5c6b7a;
    }
    .btn-arrow {
      padding: 8px 4px 6px 4px;
    }
  }
}
</style>
