import { Colors, useWindowDimensions } from "../Constants/Constants";

const gloabalStyles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: Colors.black,
    display: "flex",
    overflowX: "hidden",
    overflowY: "scroll",
  },
  toptabText: {
    fontSize: Window.width / 50,
    color: "white",
    marginLeft: Window.width / 20,
  },
};

export { gloabalStyles };
