<template>
  <v-container>
    <v-row no-gutters class="justify-content-center">
      <v-col :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 12 : 3" class="mb-4">
        <v-card color="darkblue" class="rounded-xl" :width="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '100%' : '90%'">
          <v-card class="rounded-xl" color="primary">
            <v-card-text>
              <v-container fluid>
                <v-row no-gutter justify="start" class="text-left">
                  <v-col :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 2 : 12" class="justify-self-start">
                    <v-avatar style="border: 2px solid white" size="60">
                      <img
                        src="@/assets/images/image-jeremy.png"
                        alt="John"
                      >
                    </v-avatar>
                  </v-col>

                  <v-col :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'pb-2' : 'pb-12'">
                    <p>Report for</p>
                    <p class="font-weight-light text-h4 mb-8">Jeremy Robson</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-tabs class="pt-4" :vertical="!($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)" fixed-tabs background-color="transparent" active-class="white">
            <v-tabs-slider color="transparent"></v-tabs-slider>
            <v-tab v-for="(item, i) in timeCats" :key="i" active-class="white--text" :ripple="false">
              {{ item.text }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>

      <!-- right side -->
      <v-col :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 12 : 9">
        <v-row>
          <v-col :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 12 : 4" v-for="(kpi, index) in kpis" :key="index">
          <v-card class="rounded-xl" :color="kpi.color">
            <div class="d-flex flex-row-reverse mr-3">
              <v-img :src="kpi.icon" max-width="70" aspect-ratio="1.2" contain content-class="pr-4"></v-img>
            </div>

            <v-card max-height="200" color="darkblue" class="rounded-xl text-start" style="margin-top: -20px;">
              <v-app-bar
                flat
                color="rgba(0, 0, 0, 0)"
                dense
                class="mb-0"
              >
                <v-toolbar-title class="subtitle-1 white--text pl-0">
                  {{ kpi.title }}
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn
                  color="white"
                  icon
                >
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
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import iconEllipsis from '@/assets/images/icon-ellipsis.svg';
  import iconExercise from '@/assets/images/icon-exercise.svg';
  import iconPlay from '@/assets/images/icon-play.svg';
  import iconSelfCare from '@/assets/images/icon-self-care.svg';
  import iconSocial from '@/assets/images/icon-social.svg';
  import iconStudy from '@/assets/images/icon-study.svg';
  import iconWork from '@/assets/images/icon-work.svg'

  export default {
    name: 'HelloWorld',

    data: () => ({
      timeCats: [
        { text: 'Daily' },
        { text: 'Weekly' },
        { text: 'Monthly' },
      ],

      kpis: [
        {
          title: 'Work',
          color: 'orange',
          icon: iconWork,
          daily: {
            duration: 5,
            previous: 7
          },
          weekly: {
            duration: 32,
            previous: 36
          },
          monthly: {
            duration: 103,
            previous: 128
          }
        },
        {
          title: 'Play',
          color: 'secondary',
          icon: iconPlay,
          daily: {
            duration: 1,
            previous: 2
          },
          weekly: {
            duration: 10,
            previous: 8
          },
          monthly: {
            duration: 23,
            previous: 29
          }
        },
        {
          title: 'Study',
          color: 'error',
          icon: iconStudy,
          daily: {
            duration: 0,
            previous: 1
          },
          weekly: {
            duration: 4,
            previous: 7
          },
          monthly: {
            duration: 13,
            previous: 19
          }
        },
        {
          title: 'Exercise',
          color: 'success',
          icon: iconExercise,
          daily: {
            duration: 1,
            previous: 1
          },
          weekly: {
            duration: 4,
            previous: 5
          },
          monthly: {
            duration: 11,
            previous: 18
          }
        },
        {
          title: 'Social',
          color: 'info',
          icon: iconSocial,
          daily: {
            duration: 1,
            previous: 3
          },
          weekly: {
            duration: 5,
            previous: 10
          },
          monthly: {
            duration: 21,
            previous: 23
          }
        },
        {
          title: 'Self Care',
          color: 'warning',
          icon: iconSelfCare,
          daily: {
            duration: 0,
            previous: 1
          },
          weekly: {
            duration: 2,
            previous: 2
          },
          monthly: {
            duration: 7,
            previous: 11
          }
        },
      ]
    }),
  }
</script>
