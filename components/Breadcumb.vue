<template>
  <div>
    <div v-if="$route.name === 'index'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Dashboard </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'campaign'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'survey'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Survey </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'audience'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Audience </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'creative'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Creative </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'report'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Report </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'tools'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Tools </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'campaign-create'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign </el-breadcrumb-item>
        <el-breadcrumb-item> Create Campaign </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'campaign-detail-edit'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign </el-breadcrumb-item>
        <el-breadcrumb-item> Edit Campaign </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'campaign-detail-index'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign Details </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'campaign-detail-index-placement-create'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign Details </el-breadcrumb-item>
        <el-breadcrumb-item> Create Placement </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'campaign-detail-index-placement-edit'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign Details </el-breadcrumb-item>
        <el-breadcrumb-item> Placement Details </el-breadcrumb-item>
        <el-breadcrumb-item> Edit Placement </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'campaign-detail-index-placement'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign </el-breadcrumb-item>
        <el-breadcrumb-item> Campaign Details </el-breadcrumb-item>
        <el-breadcrumb-item> Placement Details </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'creative-templates'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Creative </el-breadcrumb-item>
        <el-breadcrumb-item> Templates Creative </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'creative-upload'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Creative </el-breadcrumb-item>
        <el-breadcrumb-item> Bulk Upload </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'profile'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> My Profile </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'admin-template'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> Template Uploader</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="$route.name === 'admin-user'">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          class="cursor-pointer"
          @click.native="toHome()"
        >
          UNIMIND
        </el-breadcrumb-item>
        <el-breadcrumb-item> User Mangement</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
// import startCase from 'lodash.startcase'

export default {
  name: 'Breadcrumb',
  computed: {
    crumbs () {
      const pathArray = this.$route.path.split('/')
      const nameArray = this.$route.name.split('-')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          title: path
        })
        return breadcrumbArray
      }, [])
      return breadcrumbs
    }
  },
  methods: {
    toHome () {
      this.$router.push({
        path: '/'
      })
      this.$store.commit('user/SET_ACTIVE', 'Dashboard')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-breadcumb {
  font-weight: 400;
  font-size: 14px;
  color: #757575;
  margin-right: 8px;
  cursor: pointer;
}
.icon-right {
  margin-right: 8px;
}
.route-breadcumb {
  font-weight: 700;
  font-size: 14px;
  color: #454545;
  text-transform: capitalize;
}
</style>
