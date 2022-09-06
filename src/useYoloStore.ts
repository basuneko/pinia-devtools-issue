import { defineStore } from 'pinia';
import { pinia } from '@/pinia';

export const useYoloStore = defineStore('yolo', {
  state: () => ({
    yolo: 'yolo'
  }),

  getters: {},

  actions: {}
})

export const yoloStore = useYoloStore(pinia);
