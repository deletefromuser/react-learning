import React, { Suspense } from 'react';

const LifecycleComponent = React.lazy(() => import('./Lifecycle'));

const Todos = React.lazy(() => import('../Router/Todos'));

export function LazyUsingComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LifecycleComponent />
                <hr className='my-3'></hr>
                <Todos />
            </Suspense>
        </div>
    );
}


