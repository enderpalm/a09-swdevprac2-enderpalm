"use client";

import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

const VenuesPage = () => {
  const venuesPromise = getVenues();

  return (
    <main>
      <Suspense
        fallback={
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <VenueCatalog venuesJson={venuesPromise} />
      </Suspense>
    </main>
  );
};

export default VenuesPage;
