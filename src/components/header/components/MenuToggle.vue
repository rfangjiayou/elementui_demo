<template>
  <div class="menu-toggle-wrap">
    <span
      class="menu-toggle-btn el-icon-more"
      @click="menuShow = !menuShow"
    ></span>
    <transition name="el-zoom-in-top">
      <div class="menu-wrap" v-if="menuShow">
        <el-collapse v-model="activeName" accordion>
          <template v-for="menu in menuList">
            <el-collapse-item
              v-if="menu.children.length > 0"
              :key="menu.name"
              :title="menu.title"
              :name="menu.name"
              @mouseenter="activeName = menu.name"
              @mouseleave="activeName = ''"
            >
              <ul class="menu-child-row">
                <li
                  v-for="(child, index) in menu.children"
                  :key="index"
                  class="menu-child-row-item"
                >
                  <div class="menu-child-subtitle">
                    {{ child.menuItemTitle.name }}
                  </div>
                  <ul class="menu-child-column">
                    <li
                      v-for="menuItem in child.menuItemArray"
                      :key="menuItem.name"
                    >
                      <router-link
                        class="menu-text"
                        active-class="menu-active"
                        @click.native="menuShow = !menuShow"
                        :to="menuItem.path"
                        >{{ menuItem.title }}</router-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </el-collapse-item>
            <div
              v-else
              :key="menu.name"
              class="single-menu"
              @click="jumpToModule(menu.name)"
            >
              {{ menu.title }}
            </div>
          </template>
        </el-collapse>
      </div>
    </transition>
  </div>
</template>

<script>
import { menu } from "../menu.js";

export default {
	name: "MenuToggle",
	data() {
		return {
			activeName: "",
			menuShow: false
		};
	},
	computed: {
		menuList() {
			menu.unshift({
				title: "安全发展基金会",
				name: "foundation",
				path: "/foundation",
				children: [],
				menuItemShow: false
			});
			return menu;
		}
	},
	watch: {
		menuShow(val) {
			if (!val) this.activeName = "";
		}
	},
	methods: {
		jumpToModule(routeName) {
			this.menuShow = false;
			this.$router.push({ name: routeName });
		}
	}
};
</script>

<style lang="scss" scoped>
.menu-toggle-wrap {
  position: relative;
  .menu-toggle-btn {
    &:hover {
      cursor: pointer;
    }
  }
  .menu-wrap {
    position: absolute;
    border: 1px solid #ccc;
    width: 100vw;
    background: #fff;
    padding: 20px;
    top: 60px;
    right: -20px;
    z-index: $--header-z-index + 2;
    .single-menu {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
