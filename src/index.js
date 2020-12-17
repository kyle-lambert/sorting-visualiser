import Sort from "./models/Sort";
import SortController from "./controllers/SortController";
import SortView from "./views/SortView";

const app = new SortController(new Sort(), new SortView());
app.init();
