<template>
    <div class="post">
       The Vue App is working
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';


    interface Data {
    }

    export default defineComponent({
        data(): Data {
            return {
                loading: false,
                post: null
            };
        },
        created() {
        },
        methods: {
        },
    });
</script>