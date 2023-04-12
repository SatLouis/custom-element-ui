<template>
  <div
    :class="[
      'el-col',
      (span || span === 0) && `el-col-span-${span}`,
      offset && `el-col-offset-${offset}`,
      push && `el-col-push-${push}`,
      pull && `el-col-pull-${pull}`,
      responsiveClassList,
    ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
const responsiveAttr = ["xs", "sm", "md", "lg", "xl"];
const moveAttr = ["span", "offset", "push", "pull"];
export default {
  name: "ElCol",
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object], //<768px
    sm: [Number, Object], //≥768px
    md: [Number, Object], //≥992px
    lg: [Number, Object], //≥1200px
    xl: [Number, Object], //≥1920px
  },
  mounted() {
    window.dd = this;
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== "ElRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },

    style() {
      const { gutter } = this;
      if (!gutter) {
        return {};
      }
      const gap = `${gutter / 2}px`;
      return {
        paddingLeft: gap,
        paddingRight: gap,
      };
    },

    responsiveClassList() {
      const classList = [];

      for (const key of responsiveAttr) {
        const { [key]: value } = this;

        if (typeof value === "number") {
          classList.push(`el-col-${key}-${value}`);
        } else if (typeof value === "object") {
          for (const k of Object.keys(value)) {
            if (moveAttr.includes(k)) {
              classList.push(`el-col-${key}-${k}-${value[k]}`);
            }
          }
        }
      }

      return classList;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
$responsiveMap: (
  xs: "width < 768px",
  sm: "width >= 768px",
  md: "width >= 992px",
  lg: "width >= 1200px",
  xl: "width >= 1920px",
);
.el-col {
  float: left;
  box-sizing: border-box;
  @for $num from 0 through 24 {
    &-span-#{$num} {
      width: calc(100% / 24) * $num;
    }
    &-offset-#{$num} {
      margin-left: calc(100% / 24) * $num;
    }
    &-push-#{$num} {
      position: relative;
      left: calc(100% / 24) * $num;
    }
    &-pull-#{$num} {
      position: relative;
      right: calc(100% / 24) * $num;
    }
  }
  /* 
      xs: [Number, Object], //<768px
      sm: [Number, Object], //>=768px
      md: [Number, Object], //>=992px
      lg: [Number, Object], //>=1200px
      xl: [Number, Object], //>=1920px
   */
  @each $k, $v in $responsiveMap {
    @media only screen and ($v) {
      @for $num from 0 through 24 {
        &-#{$k}-#{$num},
        &-#{$k}-span-#{$num} {
          width: calc(100% / 24) * $num;
        }
        &-#{$k}-offset-#{$num} {
          margin-left: calc(100% / 24) * $num;
        }
        &-#{$k}-push-#{$num} {
          position: relative;
          left: calc(100% / 24) * $num;
        }
        &-#{$k}-pull-#{$num} {
          position: relative;
          right: calc(100% / 24) * $num;
        }
      }
    }
  }
  &-span-0 {
    display: none;
  }
}
</style>
