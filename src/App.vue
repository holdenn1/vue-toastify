<template>
  <Toastify />
  <button @click="toastify('success', 'Success!')">Show Toast</button>
  <button @click="toastify('error', 'Error!!!')">Show Toast2</button>
  <button @click="toastify('warning', 'Warning!!!')">Show Toast3</button>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur
    impedit corporis quisquam nisi, laborum velit illo optio reiciendis
    molestiae autem quia explicabo nemo? Distinctio labore aliquam officia dicta
    iusto. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Perspiciatis, molestias vero! Corporis nihil, quis consequatur aliquam non
    alias ullam atque. Necessitatibus, nulla, maxime incidunt quis ratione vero
    tempore culpa consequuntur ea cumque eveniet magnam rerum quidem officia
    enim similique, ad quia aspernatur repudiandae. Architecto error temporibus
    dolore sint necessitatibus optio consequuntur debitis, quis distinctio quod
    nostrum quae consectetur, nobis laboriosam, provident veniam id delectus
    atque totam numquam quia molestias veritatis voluptate! Eum quam ad, labore
    doloremque ipsam sapiente temporibus voluptatum, possimus libero a
    laboriosam explicabo commodi, vel tenetur facilis. Magnam autem tempora
    accusantium hic eum numquam asperiores mollitia dolor quia!
  </p>
</template>

<script setup lang="ts">
import Toastify from "@/Toastify/Toastify.vue";
import { useToastify } from "@/hooks/useToastify";
const { toastify } = useToastify();
</script>

<style lang="scss" scoped></style>
