<template>
    <Section id="blog" class="text-typography_primary">
        <div class="border-t-2 pt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right mb-6 md:mb-8">
            <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="blog-breadcrumb">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a itemprop="item" href="/"> <span itemprop="name">Home</span></a>
                    <meta itemprop="position" content="1" />
                </li>
                <span>/</span>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <span itemprop="name">Blog</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
        <h1 class="font-bold mb-4 md:mb-6 text-h3 leading-h3 md:text-h1 md:leading-h1 text-center md:text-left">Blog</h1>
        <p class="mb-3 md:w-8/12 md:text-lg md:leading-lg text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos porro consectetur aliquid debitis odit labore eveniet, nesciunt, deleniti
            totam aspernatur blanditiis laborum esse nam fugit ipsa sunt eum, provident consequuntur.
        </p>
        <div class="border-t-2 mt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right"></div>
    </Section>
</template>
