<template>
  <v-container>
    <v-row no-gutters class="justify-content-center">
      <v-col :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 12 : 3" class="mb-4">
        <TheProfileCard />
      </v-col>

      <!-- right side -->
      <v-col :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 12 : 9">
        <v-row>
          <v-col
            v-for="(kpi, index) in kpis"
            :key="index"
            :cols="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 12 : 4"
          >
            <TheInfoCard :kpi="kpi" />
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
