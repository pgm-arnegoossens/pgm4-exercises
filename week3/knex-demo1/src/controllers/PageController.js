/**
 * PageController
 * Simple pages will be handled by this controller.
 * A simple page is a page that does not contain many business logic.
 */

import menuItems from "../data/navigation.js";
import userData from "../data/user.js";
import NavigationItem from "../models/NavigationItem.js";
import User from "../models/User.js";
import Page from "../models/Page.js";

export const home = async (req, res) => {
  const menuItems = await NavigationItem.query();
  const user = await User.query().findById(1);
  const homepage = await Page.query().where("slug", null);

  const pageData = {
    title: homepage[0].title,
    content: `
      ${homepage[0].content}
      <h2>${user.firstname + " " + user.lastname}</h2>
      <p>${user.bio}</p>
    `,
  };

  res.render("pages/home", {
    ...pageData,
    userData,
    menuItems,
  });
};

export const page = async (req, res) => {
  const menuItems = await NavigationItem.query();
  const pageData = await Page.query().findOne({
    slug: req.params.slug,
  });

  // If the page does not exist, render a 404 page.
  if (!pageData) {
    res.status(404).send("Page not found.");
    return;
  }

  // Render the page with the necessary data.
  res.render("pages/default", {
    ...pageData,
    menuItems,
  });
};

// export const about = async (req, res) => {
//   const aboutPage = await Page.query().where("slug", "about");
//   const pageData = {
//     title: aboutPage[0].title,
//     content: `
//       ${aboutPage[0].content}
//     `,
//   };
//   res.render("pages/default", {
//     ...pageData,
//     menuItems,
//   });
// };

// export const contact = async (req, res) => {
//   const contactPage = await Page.query().where("slug", "contact");
//   const pageData = {
//     title: contactPage[0].title,
//     content: contactPage[0].content,
//   };
//   res.render("pages/default", {
//     ...pageData,
//     menuItems,
//   });
// };
