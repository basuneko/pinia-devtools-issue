import { defineStore } from 'pinia';
import { pinia } from '@/pinia';

export const useBaconStore = defineStore('bacon', {
  state: () => ({
    bacon: 'bacon'
  }),

  getters: {},

  actions: {}
})