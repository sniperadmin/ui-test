<template>
  <v-card class="rounded-xl" :color="kpi.color">
    <div class="d-flex flex-row-reverse mr-3">
      <v-img
        :src="kpi.icon"
        max-width="70"
        aspect-ratio="1.2"
        contain
        content-class="pr-4"
      ></v-img>
    </div>

    <v-card
      max-height="200"
      color="darkblue"
      class="rounded-xl text-start"
      style="margin-top: -20px;"
    >
      <v-app-bar flat color="rgba(0, 0, 0, 0)" dense class="mb-0">
        <v-toolbar-title class="subtitle-1 white--text pl-0">
          {{ kpi.title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn color="white" icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-app-bar>

      <v-card-text>
        <v-row>
          <v-col :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 6 : 12">
            <p class="text-h2">{{ kpi.daily.duration + 'hrs' }}</p>
          </v-col>
          <v-col>
            <p class="body-2"> Last Week - {{ kpi.weekly.previous }} hrs</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
  export default {
    name: 'TheInfoCard',
    props: {
      kpi: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>