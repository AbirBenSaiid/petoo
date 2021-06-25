const { 
  ADD_BLOG,
  FAIL_BLOG, 
  LOAD_BLOG, 
  VIDE_ERRORS_ 
} = require("../actionTypes");

const initialState = {
  load: false,
  blog: {},
  errors: [],
  msg: "",
  blogs: [],
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BLOG:
      if (typeof payload.msg === "string") {
        return {
          ...state,
          blog: payload.newBlog,
          load: false,
          msg: payload.msg,
          blogs: state.blogs.push(payload.newBlog),
        };
      
    } else {
      return { ...state, load: false, errors: payload.errors };
    }
// eslint-disable-next-line
    case FAIL_BLOG:
      return { ...state, errors: payload.errors, load: false };

    case LOAD_BLOG:
      return { ...state, load: true };

    case VIDE_ERRORS_:
      return { ...state, load: false, msg: "", errors: [] };

    default:
      return state;
  }
};
export default blogReducer;
