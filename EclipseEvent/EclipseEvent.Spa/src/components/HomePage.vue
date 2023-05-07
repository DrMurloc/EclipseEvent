<template>
    <div>
        <v-cotainer>
            <v-row>
                <v-col cols="12" sm="5" md="4">

                    <v-img src="https://piuimages.arroweclip.se/eclipse/logo.png"></v-img>
                </v-col>
                <v-col cols="12" sm="7" md="8">
                    <v-list lines="one">
                        <v-list-item title="What?">
                            <v-list-item-subtitle style="padding-top:21px; padding-bottom:21px;">
                                The largest Rhythm Gaming Event in Maryland!
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Where?</v-list-item-title>
                            <v-list-item-subtitle>
                                110 S Eutaw St, Baltimore, MD 21201
                                <v-btn icon="mdi-map" href="https://goo.gl/maps/3JSEFrujBeJEvmxf6" variant="text" color="primary" target="_blank">
                                </v-btn>
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item title="When?">
                            <v-list-item-subtitle style="padding-top:21px; padding-bottom:21px;">
                                December 8th-10th, 2023
                            </v-list-item-subtitle>

                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-cotainer>
        <v-btn style="position:fixed;left:145px;bottom:15px;"
               fab
               small
               target="_blank"
               href="https://twitter.com/ArrowEclipse/"
               icon="mdi-twitter"
               color="primary">
        </v-btn>
        <v-btn style="position:fixed;left:80px;bottom:15px;"
               fab
               small
               target="_blank"
               href="https://discord.gg/ShyU8Hb5PY"
               icon="mdi-discord"
               color="primary">
        </v-btn>
        <v-btn style="position:fixed;left:15px;bottom:15px;"
               fab
               small
               target="_blank"
               href="https://www.facebook.com/ArrowEclipse"
               icon="mdi-facebook"
               color="primary">
        </v-btn>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Enumerable from 'linq';
    interface NewsEntry {
        Image: string;
        Title: string;
        Content: string;
        Link: string | undefined;
        LinkText: string | undefined;
    }
    interface Data {
        News: NewsEntry[]
        CarouselIndex: number;
        SocialMediaMenu: boolean;
    }

    export default defineComponent({
        data(): Data {
            return {
                SocialMediaMenu:false,
                CarouselIndex: 0,
                News: [
                    {
                        Image:"https://piuimages.arroweclip.se/eclipse/AnnouncementPoster.png",
                        Title: "It's Happening!",
                        Content: "Content",
                        Link: "https://google.com",
                        LinkText: "Learn More"
                    },
                    {
                        Image: "https://piuimages.arroweclip.se/eclipse/AnnouncementPoster.png",
                        Title: "News Item 2",
                        Content: "Content",
                        Link: "https://google.com",
                        LinkText: "Learn More"
                    },
                    {
                        Image: "https://piuimages.arroweclip.se/eclipse/AnnouncementPoster.png",
                        Title: "News Item 3",
                        Content: "Content",
                        Link: "https://google.com",
                        LinkText: "Learn More"
                    },
                    {
                        Image: "https://piuimages.arroweclip.se/eclipse/AnnouncementPoster.png",
                        Title: "News Item 4",
                        Content: "Content",
                        Link: "https://google.com",
                        LinkText: "Learn More"
                    }
                ]
            };
        },
        computed: {
            Slides() {
                return Enumerable.range(1,(this.News.length - this.News.length % 3) / 3 + 1).toArray();
            },
            ShowingNews() {
                return Enumerable.from(this.News).skip(this.CarouselIndex * 3).take(3).toArray();
            }
        },
        created() {
        },
        methods: {
        },
    });
</script>