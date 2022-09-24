<template>
    <v-parallax src="https://piuimages.arroweclip.se/eclipse/eclipse.jpg?asdfdsf">
        <div>
            <div style="height:150px"></div>
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <h1 class="text-h1 font-weight-thin mb-4">
                    Eclipse
                </h1>
                <h4 class="subheading">
                    March 23rd-26th, Baltimore, MD
                </h4>
            </div>
            <div style="height:100px"></div>
            <v-carousel v-model="CarouselIndex">
                <v-carousel-item v-for="news in News"
                                 :key="news.Title">
                    <v-sheet color="white"
                             height="100%"
                             tile>
                        <h3>{{news.Title}}</h3>
                        <span>{{news.Content}}</span>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>

        </div>
    </v-parallax>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    interface NewsEntry {
        Title: string;
        Content: string;
    }
    interface Data {
        News: NewsEntry[]
        CarouselIndex: number;
    }

    export default defineComponent({
        data(): Data {
            return {
                CarouselIndex: 0,
                News: [
                    {
                        Title: "News Entry 1",
                        Content:"Content"
                    },
                    {
                        Title: "News Entry 2",
                        Content:"Some More Content"
                    },
                    {
                        Title: "News Entry 3",
                        Content:"Even more content"
                    }]
            };
        },
        created() {
        },
        methods: {
        },
    });
</script>