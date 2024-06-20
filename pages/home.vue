<script setup lang="ts">
import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#000',
  backgroundColor: '#e5e5e6',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

// Popup User
const fullName = useState('fullName', () => "Admin");

const popoverVisible = ref(false);

const handlePopoverVisibleChange = (visible: boolean) => {
  popoverVisible.value = visible;
};

// Sider
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

// Loading page
const nuxtApp = useNuxtApp();

const loadingPage = ref(false);
nuxtApp.hook("page:start", () => {
  loadingPage.value = true;
});

nuxtApp.hook("page:finish", () => {
  loadingPage.value = false;
});

// onMounted(() => {
//   console.log("nuxtApp $:", nuxtApp);
//   console.log("loadingPage $:", loadingPage);
// });

const searchValue = ref<string>('');

const onSearch = (value: string) => {
  console.log('use value', value);
  console.log('or use this.value', searchValue.value);
};

// ----- Call API ----

const $api = nuxtApp.$api;

const pokemonStore = usePokemonStore();

// const {data, error, pending} = useAsyncData('fetchPostList', () => $api.post.fetchAll())
useAsyncData("fetchPokemon", () => pokemonStore.fetchPokemonList())
</script>

<template>
    <a-progress v-if="loadingPage" :percent="50" size="small" />
    <a-layout v-if="!loadingPage" class="h-[100vh]">
      <div class="shadow-xl">
        <a-layout-header :style="headerStyle">
          <div class="flex justify-between items-center">
            <span class="font-bold text-xl italic">Logo 12345</span>

            <!-- v-model:visible="popoverVisible" -->
            <a-popover
              placement="bottomRight"
              trigger="click"
              :visible="popoverVisible"
              @visibleChange="handlePopoverVisibleChange"
            >
              <template #content>
                <div class="min-w-[150px] space-y-2">
                  <p>Profile</p>
                  <p>Setting</p>
                  <p>Blog</p>
                </div>
              </template>
              <!-- <template #title>
                <span>Title</span>
              </template> -->
              <!-- <a-button>BR</a-button> -->
              <span class="space-x-2 hover:cursor-pointer" >
                <span class="font-semibold">{{ fullName }}</span>
                <a-avatar style="background-color: #87d068">
                  <template #icon>
                    <UserOutlined />
                  </template>
                </a-avatar>
              </span>
            </a-popover>
          </div>
        </a-layout-header>
      </div>
      
      <a-layout>
        <a-layout-sider
          breakpoint="lg"
          collapsed-width="0"
          @collapse="onCollapse"
          @breakpoint="onBreakpoint"
          :style="{
            backgroundColor: '#fff',
          }"
        >
          <div class="logo" />
          <a-menu mode="inline" :default-selected-keys="['4']">
            <a-menu-item key="1">
              <a-icon type="user" />
              <span class="nav-text">nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="video-camera" />
              <span class="nav-text">nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="upload" />
              <span class="nav-text">nav 3</span>
            </a-menu-item>
            <a-menu-item key="4">
              <a-icon type="user" />
              <span class="nav-text">nav 4</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>

        <div class="bg-gray-100 w-full h-full">
          <a-layout-content class="bg-white m-2 w-full h-full p-2 rounded-xl">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-lg">Pokemon</span>
              <div class="flex items-center gap-2">
                <a-input-search
                  :value="searchValue"
                  placeholder="Enter input search"
                  style="width: 200px"
                  @search="onSearch"
                />

                <a-button type="primary" :size="'middle'" class="mr-2">
                  <template #icon>
                    <PlusCircleFilled />
                  </template>
                  Create
                </a-button>
              </div>
            </div>

            <!-- <div v-for="item in pokemonStore.pokemonList" :key="item.url">
                <p>{{ JSON.stringify(item) }}</p>
            </div> -->

            <div :style="{
              maxHeight: '72vh',
              overflowY: 'scroll'
            }">
              <a-list
                class="demo-loadmore-list"
                item-layout="horizontal"
                :data-source="pokemonStore.pokemonList"
              >
              <template #renderItem="{ item, index }">
                <a-list-item>
                  <template #actions>
                    <a>edit</a>
                    <a>more</a>
                  </template>
                  <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  >
                    <template #title>
                      <a href="#">{{ index+1 }} - {{ item.name }}</a>
                    </template>
                    <template #avatar>
                      <a-avatar :src="item.url" />
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
              </a-list>
            </div>
            
          </a-layout-content>
        </div>
      </a-layout>
      <a-layout-footer :style="footerStyle">
        Footer
      </a-layout-footer>
    </a-layout>
</template>

<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
</style>