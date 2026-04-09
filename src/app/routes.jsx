// import { createBrowserRouter } from "react-router";
// import { Layout } from "./components/Layout.jsx";
// import { About } from "./components/About.jsx";
// import { Programme } from "./components/Programme.jsx";
// import { BookOfAbstract } from "./components/BookOfAbstract.jsx";
// import { Presenters } from "./components/Presenters.jsx";
// import { OrganizingCommittee } from "./components/OrganizingCommittee.jsx";
// import { EvaluationForm } from "./components/EvaluationForm.jsx";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Layout,
//     children: [
//       { index: true, Component: About },
//       { path: "programme", Component: Programme },
//       { path: "book-of-abstract", Component: BookOfAbstract },
//       { path: "presenters", Component: Presenters },
//       { path: "organizing-committee", Component: OrganizingCommittee },
//       { path: "evaluation", Component: EvaluationForm },
//     ],
//   }
// ],
//   {
//     // ADD THIS HERE: Your GitHub repository name
//     basename: "/csite-colloquium/",
//   }
// );


// 1. Change the import from createBrowserRouter to createHashRouter
import { createHashRouter } from "react-router"; 
import { Layout } from "./components/Layout.jsx";
import { About } from "./components/About.jsx";
import { Programme } from "./components/Programme.jsx";
import { BookOfAbstract } from "./components/BookOfAbstract.jsx";
import { Presenters } from "./components/Presenters.jsx";
import { OrganizingCommittee } from "./components/OrganizingCommittee.jsx";
import { EvaluationForm } from "./components/EvaluationForm.jsx";
import { Acknowledgement } from "./components/Acknowledgement.jsx";
// 2. Update the function call here
export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: About },
      { path: "programme", Component: Programme },
      { path: "book-of-abstract", Component: BookOfAbstract },
      { path: "presenters", Component: Presenters },
      { path: "organizing-committee", Component: OrganizingCommittee },
      { path: "acknowledgement", Component: Acknowledgement },
      { path: "evaluation", Component: EvaluationForm },
    ],
  }
],
  // {
  //   // Keep your basename exactly as it is!
  //   basename: "/csite-colloquium/",
  // }
);