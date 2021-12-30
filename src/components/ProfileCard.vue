<template>
  <v-card
    color="darkblue"
    class="rounded-xl"
    :width="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '100%' : '90%'"
    height="100%"
  >
    <v-card class="rounded-xl" color="primary">
      <v-card-text>
        <v-container fluid>
          <v-row no-gutter justify="start" class="text-left">
            <v-col
              :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 2 : 12"
              class="justify-self-start"
            >
              <v-avatar style="border: 2px solid white" size="60">
                <img src="@/assets/images/image-jeremy.png" alt="John">
              </v-avatar>
            </v-col>

            <v-col
              :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'pb-2' : 'pb-12'"
            >
              <p>Report for</p>
              <p class="font-weight-light text-h4 mb-8">Jeremy Robson</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <v-tabs
      class="pt-4 pb-4"
      fixed-tabs
      background-color="transparent"
      active-class="white"
      :vertical="!($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)"
    >
      <v-tabs-slider color="transparent"></v-tabs-slider>
      <v-tab
        v-for="(item, i) in timeCats"
        :key="i"
        :ripple="false"
        active-class="white--text"
        disabled
      >
        {{ item.text }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
  export default {
    name: 'Dashboard',
    data: () => ({
      timeCats: [
        { text: 'Daily' },
        { text: 'Weekly' },
        { text: 'Monthly' },
      ],
    })
  }
</script>

<style lang="scss" scoped>

</style>