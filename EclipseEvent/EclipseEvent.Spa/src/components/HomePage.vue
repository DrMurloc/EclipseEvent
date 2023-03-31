<template>
    <div>
        <v-img src="https://piuimages.arroweclip.se/eclipse/eclipse.png"></v-img>
        <v-btn style="position:fixed;right:145px;bottom:15px;"
               fab
               small
               target="_blank"
               href="https://twitter.com/ArrowEclipse/"
               icon="mdi-twitter"
               color="primary">
        </v-btn>
        <v-btn style="position:fixed;right:80px;bottom:15px;"
               fab
               small
               target="_blank"
               href="https://discord.gg/ShyU8Hb5PY"
               icon="mdi-discord"
               color="primary">
        </v-btn>
        <v-btn style="position:fixed;right:15px;bottom:15px;"
               fab
               small
               target="_blank"
               href="https://www.facebook.com/ArrowEclipse"
               icon="mdi-facebook"
               color="primary">
        </v-btn>
    </div>
    
    <!--<v-parallax src="https://piuimages.arroweclip.se/eclipse/eclipse.png">
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
            <v-sheet color="black">
                <h3 style="padding-left:10px;">News</h3>
                <v-carousel v-model="CarouselIndex"
                            show-arrows="hover"
                            hide-delimiters>
                    <v-carousel-item v-for="slide in Slides"
                                     :key="slide">
                        <v-container>
                            <v-row>
                                <v-col v-for="news in ShowingNews" xs="4" :key="news.Title">
                                    <v-card>
                                        <v-img :src="news.Image" height="200px" cover></v-img>
                                        <v-card-title>{{news.Title}}</v-card-title>
                                        <v-card-subtitle>{{news.Content}}</v-card-subtitle>
                                        <v-card-actions v-if="news.Link!=''">
                                            <v-btn variant="outlined"
                                                    color="primary"
                                                    :href="news.Link">
                                                {{news.LinkText}}
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col v-if="ShowingNews.length==0" xs="4">

                                </v-col>
                                <v-col v-if="ShowingNews.length==1" xs="4"></v-col>
                                <v-col v-if="ShowingNews.length==2" xs="4"></v-col>
                            </v-row>
                        </v-container>
                    </v-carousel-item>
                </v-carousel>
            </v-sheet>
        </div>
    </v-parallax>-->
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