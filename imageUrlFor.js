import sanity from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

function imageUrlFor(source) {
    return imageBuilder.image(source)
  }

export default imageUrlFor;