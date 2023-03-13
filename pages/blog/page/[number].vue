<template>
    <main>
        <!-- Query for the given blog page number -->
        <ContentQuery
            path="/blog"
            :only="['headline', 'excerpt', 'date', 'tags', '_path', 'image']"
            :sort="{
                date: -1
            }"
            :skip="blogCountLimit * (getPageNumber() - 1)"
            :limit="blogCountLimit"
        >
            <!-- In case it is found -->
            <template v-slot="{ data }">
                <BlogHero />
                <Section id="main" class="!pt-0">
                    <BlogList :data="data" />
                    <ContentQuery
                        path="/blog"
                        :only="['headline']"
                    >
                        <template v-slot="{ data }">
                            <BlogPagination
                                v-if="getPageLimit(data.length) > 1"
                                class="mt-8"
                                :currentPage="getPageNumber()"
                                :totalPages="getPageLimit(data.length)"
                                :nextPage="getPageNumber() < getPageLimit(data.length)"
                                baseUrl="/blog/"
                                pageUrl="/blog/page/"
                            />
                        </template>
                        <template #not-found>
                            <!-- Nothing -->
                        </template>
                    </ContentQuery>
                </Section>
            </template>
            <!-- In case not found -->
            <template #not-found>
                <!-- Show hero and message -->
                <BlogHero />
                <Section id="main" class="!pt-0">
                    <BlogList :data="[]" message="There are no posts in this page, maybe try searching on another one."/>
                </Section>
            </template>
        </ContentQuery>
    </main>
</template>

<script setup>
// Fetching data
const { path, params } = useRoute();
const blogCountLimit = 6;

const getPageLimit = (totalPosts) => {
    return Math.ceil(totalPosts / blogCountLimit);
};

const getPageNumber = () => {
    return Number(params.number);
};

// Attempt to get the number
const router = useRouter();
let pageNo;
try {
    pageNo = getPageNumber();
    if (isNaN(pageNo) || pageNo <= 0) {
        router.replace('/blog/');
    }
} catch (err) {
    console.error(err);
    router.replace('/blog/');
}
</script>
