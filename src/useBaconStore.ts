import { defineStore } from 'pinia';
import { pinia } from '@/pinia';

export const useBaconStore = defineStore('bacon', {
  state: () => ({}),

  getters: {},

  actions: {}
})

export const baconStore = useBaconStore(pinia);
