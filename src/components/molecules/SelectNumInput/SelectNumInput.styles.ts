export default {
  option: (base: any) => ({
    ...base,
    borderRadius: 0,
    width: "150px",
    height: "100%"
  }),
  control: (base: any) => ({
    ...base,
    borderRadius: 0,
    width: "150px",
    height: "100%"
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20
  })
}
