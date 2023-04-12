<template>
  <div
    :class="[
      'el-row',
      type === 'flex' && 'el-row--flex',
      type === 'flex' && `is-justify-${justify}`,
      type === 'flex' && `is-align-${align}`,
    ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
const justifyList = ["start", "end", "center", "space-around", "space-between"];
const alignList = ["top", "middle", "bottom"];

export default {
  name: "ElRow",
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: "start",
      validator: (val) => justifyList.includes(val),
    },
    align: {
      type: String,
      validator: (val) => alignList.includes(val),
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  computed: {
    style() {
      const { gutter } = this;
      if (!gutter) {
        return {};
      }
      const gap = `${-gutter / 2}px`;
      return {
        marginLeft: gap,
        marginRight: gap,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$is-justify: (
  start: flex-start,
  end: flex-end,
  center: center,
  space-around: space-around,
  space-between: space-between,
);
$is-align: (
  top: flex-start,
  middle: center,
  bottom: flex-end,
);
.el-row {
  box-sizing: border-box;
  &--flex {
    display: flex;
    &::before,
    &::after {
      display: none !important;
    }
    @each $key, $val in $is-justify {
      &.is-justify-#{ $key } {
        justify-content: $val;
      }
    }

    @each $key, $val in $is-align {
      &.is-align-#{ $key } {
        align-items: $val;
      }
    }
  }
  &::before,
  &::after {
    content: "";
    display: block;
  }
  &::after {
    clear: both;
  }
}
</style>
