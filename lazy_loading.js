
import React, { Suspense } from "react";

const AboutComponent = React.lazy(() => import('./AboutComponent '))

//For Named component
const OtherComponent = React.lazy(() => import('./AboutComponent').then(module => ({ default: module.AboutComponent })));

const HomeComponent = () => (
    <div>
        <Suspense fallback={<div> Please Wait... </div>} >
            <AboutComponent />
        </Suspense>
    </div>
);