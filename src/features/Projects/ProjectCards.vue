<template>
  <div class="flex flex-col gap-10">
    <div v-for="card in getCards">
      <ProjectsCard :title="card.title" :images="card.images"
                    :desc="card.description" :personal-rate="card.personalRate"
                    :stack="card.stack"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Widgets from "~/widgets";
import GlobalStore from "~/composables/store";

interface IProjectStore {
  getCards: {
    title: string
    description: string
    stack: string[]
    personalRate: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    images: {imageUrl: string, text: string}[]
  }[]
}

const { getCards }: IProjectStore = GlobalStore.store.useProjectsStore()
const { ProjectsCard } = Widgets.cards
</script>
