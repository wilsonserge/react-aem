import {
  Page,
  MapTo,
  withComponentMappingContext,
} from "@adobe/cq-react-editable-components";
import { withRoute } from "../../utils/RouteHelper";
require("./Page.scss");
class AemPage extends Page {
  get containerProps() {
    let attrs = super.containerProps;
    attrs.className =
      (attrs.className || "") +
      " react-aem-page " +
      (this.props.cssClassNames || "");
    return attrs;
  }
}

MapTo("ui.frontend/components/structure/page")(
  withComponentMappingContext(withRoute(AemPage))
);
