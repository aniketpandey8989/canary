import React from 'react'

import Page from '../pages/page'
import Sidebar from '../Sidebar'
import SkuMaster from './SkuMaster'

const Sku = () => {

    return (
        <div>
            <div>
                <Sidebar />
                <div className="main-content">
                    <SkuMaster />
                </div>
            </div>
        </div>
    )
}
export default Sku;