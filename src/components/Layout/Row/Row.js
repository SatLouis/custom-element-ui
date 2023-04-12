import "./Row.scss";
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
  render() {
    const {
      tag: Tag,
      type,
      justify,
      align,
      style,
      $slots: { default: defaultSlot },
    } = this;

    return (
      <Tag
        class={[
          "el-row",
          type === "flex" && "el-row--flex",
          type === "flex" && `is-justify-${justify}`,
          type === "flex" && `is-align-${align}`,
        ]}
        style={style}
      >
        {defaultSlot && defaultSlot()}
      </Tag>
    );
  },
};
