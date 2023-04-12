import "./Col.scss";
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
  render() {
    const {
      span,
      offset,
      push,
      pull,
      style,
      responsiveClassList,
      $slots: { default: defaultSlot },
    } = this;

    return (
      <div
        class={[
          "el-col",
          (span || span === 0) && `el-col-span-${span}`,
          offset && `el-col-offset-${offset}`,
          push && `el-col-push-${push}`,
          pull && `el-col-pull-${pull}`,
          responsiveClassList,
        ]}
        style={style}
      >
        {defaultSlot && defaultSlot()}
      </div>
    );
  },
};
