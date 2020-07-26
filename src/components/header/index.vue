<template>
  <div class="header-wrap">
    <div class="header">
      <div class="header-logo">
        <img src="" alt="logo" />
      </div>
      <nav class="header-menu">
        <a class="foundation" @click="$route.push({ name: 'foundation' })">
          <span class="foundation-star"></span>
          <span class="foundation-text">安全发展基金会</span>
        </a>
        <div
          v-for="item in menu"
          :key="item.name"
          class="header-menu-item"
          @mouseenter="item.menuItemShow = true"
          @mouseleave="item.menuItemShow = false"
        >
          <router-link
            class="menu-text"
            active-class="menu-active"
            :to="item.path"
            >{{ item.title }}</router-link
          >
          <template v-if="item.children && item.children.length">
            <transition name="el-zoom-in-top">
              <div class="menu-child" v-show="item.menuItemShow">
                <ul class="menu-child-row">
                  <li
                    v-for="(child, index) in item.children"
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
                          :to="menuItem.path"
                          >{{ menuItem.title }}</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </transition>
          </template>
        </div>
      </nav>
      <div class="header-setting">
        <el-button type="info" class="submit" @click="submit"
          >申请体验</el-button
        >
        <MenuToggle class="menu-toggle"></MenuToggle>
      </div>
    </div>
  </div>
</template>

<script>
import MenuToggle from "./components/MenuToggle";
import { menu } from "./menu.js";

export default {
	name: "Header",
	components: {
		MenuToggle
	},
	data() {
		return {
			menu
		};
	},
	methods: {
		submit() {},
		scrollIntoView() {
            document.querySelector("#xxx4")?.scrollIntoView({
                    behavior: "smooth"
            });
		}
	}
};
</script>

<style lang="scss" scoped>
.header-wrap {
  height: $--header-height;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $--header-z-index;
  background: $--color-header;
  // background: transparent;
  .header {
    max-width: $--main-max-width;
    width: 100%;
    margin: 0 auto;
    display: flex;
    &-logo {
      img {
        height: 60px;
      }
    }
    .foundation {
      margin-right: 50px;
      &-star {
        margin-right: 5px;
        background: url(//sensorsdata.cn/assets/img/star_0bc1751.svg) no-repeat
          0 center;
        display: inline-block;
        width: 16px;
        height: 16px;
        -webkit-animation: bigTosmall ease 0.5s infinite;
        animation: bigTosmall ease 0.5s infinite;

        @keyframes bigTosmall {
          0% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1);
          }
        }
      }
      &:hover {
        .foundation-text {
          opacity: 0.6;
        }
        cursor: pointer;
      }
    }
    &-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      &-item {
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        position: relative;
        .menu-child {
          position: absolute;
          top: 60px;
          padding: 20px 0;
          width: 100%;
          background: $--color-header;
          display: table;
          &-row {
            display: table-row;
            &-item {
              display: table-cell;
              white-space: nowrap;
              .menu-child-subtitle {
                font-weight: 600;
                padding: 0 20px;
              }
              a {
                text-decoration: none;
                color: #000;
                padding: 0 20px;
                &:hover {
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
    .menu-text {
      text-decoration: none;
      color: #000;
      font-weight: 600px;
      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
    .menu-active {
      opacity: 0.6;
    }
    &-setting {
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      float: right;
      .submit {
        @include primary-btn;
      }
      .menu-toggle {
        display: none;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .header-menu {
      justify-content: flex-start;
      &-item,
      .foundation {
        display: none;
      }
    }
    .header-setting {
      .menu-toggle {
        margin-left: 20px;
        display: block;
      }
    }
  }
}
</style>
