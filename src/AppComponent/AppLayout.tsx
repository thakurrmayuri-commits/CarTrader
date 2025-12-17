import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/config";






function Applaout() {
    return (
        <section>

            <Routes>
                {ROUTES.map(
                    ({ path, component: Component }, index) => {
                        if (!Component) {
                            return (
                                <Route
                                    key={index}
                                    path={path}
                                    element={<Navigate to="/" />}
                                />
                            );
                        }

                        const LazyComponent = React.lazy(Component);

                        return <Route key={index} path={path} element={<React.Suspense fallback={<div>Loading...</div>}>
                            <LazyComponent />
                        </React.Suspense>} />;
                    }
                )}
            </Routes>

        </section>
    );
}

export default Applaout;