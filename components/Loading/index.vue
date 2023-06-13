<template>
    <div v-loading.fullscreen.lock="loading" element-loading-background="#0000009b"
        element-loading-spinner="el-icon-loading" class="my-5 text-center"></div>
</template>
  
<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
};
</script>