<template>
  <Toastify />
  <br />
  <button @click="toastify('success', 'Success!')">Success</button>
  <br />
  <br />
  <button @click="toastify('error', 'Error!!!')">Error</button>
  <br />
  <br />
  <button @click="toastify('warning', 'Warning!!!')">Warning</button>
  <br />
  <br />
  <button @click="toastify('default', 'Default!')">Default</button>
  <br />

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
    dignissimos dolorem labore quos hic neque ullam obcaecati expedita
    voluptatem. Tenetur in ipsa deleniti quibusdam ipsam optio facere officiis
    nam officia saepe, vero enim, cumque consequatur minima et dolores beatae
    numquam libero. Nemo laudantium vero quia! Sint in porro cupiditate ex
    eveniet quae ipsam facere reiciendis, odio earum assumenda officia aliquam
    impedit ratione alias. Eos accusantium vero, similique ad iusto cumque quia,
    minima error officiis obcaecati aperiam voluptatem! Tempora, ratione commodi
    doloribus molestiae porro atque voluptas a voluptatem beatae eum quae rem
    molestias recusandae possimus excepturi nobis neque velit odit illum!
  </p>
</template>

<script setup lang="ts">
import Toastify from "@/Toastify/Toastify.vue";
import { useToastify } from "@/hooks/useToastify";

const { toastify } = useToastify();
</script>

<style lang="scss" scoped></style>
