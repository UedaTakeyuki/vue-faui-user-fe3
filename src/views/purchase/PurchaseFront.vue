<template>
  <v-card
    v-if="$isLogin && $isEmailVerified"
  >
    <v-card-title class="grey--text">
      Purchase
      <v-spacer/>
      <v-btn
        x-small
        class="grey--text"
        to="/docs/users-manual/purchase"
      >
        guide
        </v-btn>
      </v-card-title>
    <ContentsList
      :links='links'
    />
  </v-card>
</template>

<script>
import ContentsList from '../../components/ContentsList'
export default {
  components:{
    ContentsList,
  },
  props: {
    routeAdding:   Array,
    routeDeleting: Array,
  },
  data: function () {
    return {
      defaultLinks: [
        { icon: '', text: 'Purchase history', route: '/payments'},
      ],
    }
  },
  computed: {
    links: function(){
      let links = []
      DefaultLinks: for (let link of this.defaultLinks) {
        if (this.routeDeleting != null){
          for (let toDel of this.routeDeleting) {
            if (link.route == toDel){
              console.log("hit")
              continue DefaultLinks
            }
          }
          links.push(link)
        } else {
          links.push(link)
        }
      }
      if (this.routeAdding != undefined){
        links.push(...this.routeAdding)
      }
      return links
    }
  }
}
</script>