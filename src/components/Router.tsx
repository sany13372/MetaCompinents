import React, { useEffect, useMemo } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements, Navigate, Outlet, useNavigate
} from "react-router-dom";

import NotFoundPage from "@pages/static/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import ProfilesPage from "@pages/metacomponents/mmd/ProfilesPage";
import EntitiesPage from "@pages/metacomponents/mmd/EntitiesPage";
import DataPage from "@pages/metacomponents/mmd/DataPage";
import HomePage from "@pages/static/HomePage";
import AttributesPage from "@pages/metacomponents/mmd/AttributesPage";

function Router() {

  const rooter = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
          {/* ========= home ========= */}
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* ========= mmd ========= */}
          <Route path="mmd">
            <Route index element={<Navigate to="data-editor" />} />

            <Route path="data-editor">
              <Route index element={<Navigate to="profiles" />} />
              <Route path="profiles">
                <Route index element={<ProfilesPage />} />
                <Route path=":profileId" element={<EntitiesPage />} />
                <Route path=":profileId/:entityId" element={<DataPage />} />
                <Route path=":profileId/:entityId/attributes" element={<AttributesPage />} />
              </Route>
            </Route>
            <Route path="administration" element={<Navigate to="/not-implemented" />} />
          </Route>
        </Route>
      )
    );
  }, []); // eslint-disable-line

  return <RouterProvider router={rooter} />;
}

export default Router;
